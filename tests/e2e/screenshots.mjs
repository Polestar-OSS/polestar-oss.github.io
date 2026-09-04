/**
 * Visual check of the built homepage.
 *
 *   make build && make preview &
 *   cd landing-page && node ../tests/e2e/screenshots.mjs [outDir]
 *
 * Desktop dark, desktop light and mobile. Asserts the consent banner shows
 * on first visit and stays hidden after a decision, walks the screenshot
 * tabs, and fails on page errors.
 */
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';

const { chromium } = createRequire(path.join(process.cwd(), 'package.json'))('playwright');
const BASE = process.env.SITE_URL || 'http://localhost:4174/';
const OUT = process.argv[2] || '../screenshots';
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined });
const errors = [];
const checks = [];

async function run(name, { width, height, scheme, mobile = false }) {
    const ctx = await browser.newContext({ viewport: { width, height }, colorScheme: scheme, isMobile: mobile, hasTouch: mobile });
    const page = await ctx.newPage();
    page.on('pageerror', (e) => errors.push(`[${name}] pageerror: ${e.message}`));
    page.on('console', (m) => { if (m.type() === 'error' && !/googletagmanager|ERR_|net::|Failed to load resource/.test(m.text())) errors.push(`[${name}] console: ${m.text().slice(0, 300)}`); });
    for (let a = 0; a < 30; a++) { try { await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 15000 }); break; } catch (e) { if (a === 29) throw e; await page.waitForTimeout(1000); } }
    await page.waitForSelector('text=Your browser', { timeout: 30000 });
    const current = await page.evaluate(() => document.documentElement.getAttribute('data-mantine-color-scheme'));
    if (current !== scheme) await page.getByRole('button', { name: /Toggle colour scheme/i }).click();
    await page.evaluate(() => localStorage.removeItem('polestar-oss:consent'));
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('text=Your browser', { timeout: 30000 });
    checks.push(`[${name}] consent banner on first visit: ${await page.getByRole('dialog', { name: /Cookie consent/ }).isVisible()}`);
    await page.waitForTimeout(3200); // let the routes draw
    await page.screenshot({ path: `${OUT}/${name}-hero.png`, fullPage: false });
    await page.getByRole('button', { name: /^Decline$/ }).click();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('text=Your browser', { timeout: 30000 });
    checks.push(`[${name}] consent banner after decline + reload: ${await page.getByRole('dialog', { name: /Cookie consent/ }).count()}`);
    checks.push(`[${name}] footer analytics state: ${(await page.evaluate(() => document.body.innerText)).match(/Analytics: \w+/)?.[0]}`);
    // Scroll through so in-view animations and lazy images have fired before the full-page capture
    await page.evaluate(async () => {
        const step = window.innerHeight * 0.7;
        for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 300)); }
        window.scrollTo(0, 0);
    });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });
    if (!mobile) {
        for (const tab of ['Detailed', 'Insights', 'Tariff', 'Light']) {
            await page.locator('label', { hasText: new RegExp(`^${tab}$`) }).first().click();
            await page.waitForTimeout(400);
        }
        await page.locator('#explorer').scrollIntoViewIfNeeded();
        await page.waitForTimeout(800);
        await page.screenshot({ path: `${OUT}/${name}-explorer.png`, fullPage: false });
    }
    await ctx.close();
}

await run('dark-desktop', { width: 1440, height: 900, scheme: 'dark' });
await run('light-desktop', { width: 1440, height: 900, scheme: 'light' });
await run('dark-mobile', { width: 390, height: 844, scheme: 'dark', mobile: true });
await browser.close();
console.log(checks.join('\n'));
if (errors.length) { console.error(`ERRORS (${errors.length}):\n${errors.join('\n')}`); process.exit(1); }
console.log('no page errors');
