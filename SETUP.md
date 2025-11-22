# Quick Setup Guide

## Initial Setup

### 1. Clone Repository

```bash
git clone https://github.com/Polestar-OSS/polestar-oss.github.io.git
cd polestar-oss.github.io
```

### 2. Install Landing Page Dependencies

```bash
cd landing-page
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The landing page will open at `http://localhost:3000`.

## Development Commands

### Landing Page

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Application (Journey Log Explorer)

```bash
cd app/app

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## First Time Setup Checklist

- [ ] Install Node.js 18 or higher
- [ ] Clone repository
- [ ] Install dependencies (`npm install`)
- [ ] Run development server (`npm run dev`)
- [ ] Open browser to verify it works
- [ ] Make a test change to verify hot reload
- [ ] Run build to verify production build works
- [ ] Review documentation in `docs/`

## GitHub Pages Configuration

### Enable GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Source: GitHub Actions (recommended)
4. Save configuration

### First Deployment

1. Push to main branch:
   ```bash
   git push origin main
   ```

2. Check GitHub Actions:
   - Go to Actions tab
   - Verify "Deploy Landing Page" workflow runs
   - Check for any errors

3. Verify deployment:
   - Visit `https://polestar-oss.github.io/`
   - Check all links work
   - Test theme toggle
   - Verify responsive design

## Troubleshooting

### Development Server Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Fails

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix

# Try building again
npm run build
```

### GitHub Actions Fails

1. Check workflow logs in GitHub Actions tab
2. Verify all required files are committed
3. Check package.json scripts are correct
4. Ensure Node.js version matches (18)

### Site Not Updating After Deployment

1. Wait 1-5 minutes for CDN propagation
2. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+F5)
3. Check workflow completed successfully
4. Verify correct branch is deployed

## Next Steps

1. **Replace Screenshot Placeholders**
   - Take screenshots of the Journey Log Explorer
   - Save as optimized images
   - Update `Screenshots.jsx` with actual images

2. **Customize Content**
   - Update text in components as needed
   - Add your own branding elements
   - Adjust colors in theme configuration

3. **Deploy**
   - Commit and push changes
   - Verify deployment succeeds
   - Test live site

4. **Maintain**
   - Update dependencies monthly
   - Keep documentation current
   - Monitor GitHub Actions
   - Respond to issues

## Resources

- [Landing Page README](./landing-page/README.md)
- [Documentation Index](./docs/README.md)
- [Architecture Guide](./docs/LANDING_PAGE_ARCHITECTURE.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## Support

- **Issues**: https://github.com/Polestar-OSS/polestar-journey-log-explorer/issues
- **Discussions**: https://github.com/Polestar-OSS/polestar-journey-log-explorer/discussions
- **Documentation**: [docs/](./docs/)

---

Happy coding! 🚗⚡
