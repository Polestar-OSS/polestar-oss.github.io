# Polestar OSS homepage - repository entry points. CI calls these targets.
SITE_DIR := landing-page
NPM      := npm --prefix $(SITE_DIR)

.DEFAULT_GOAL := help
.PHONY: help install dev build preview lint lint-fix test check screenshots clean

help: ## List targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies from the lockfile
	$(NPM) ci --no-audit --no-fund

dev: ## Vite dev server (http://localhost:3000)
	$(NPM) run dev

build: ## Production build into landing-page/dist
	$(NPM) run build

preview: ## Serve the production build (http://localhost:4174)
	$(NPM) run preview -- --port 4174

lint: ## ESLint, warnings fail
	$(NPM) run lint -- --max-warnings=0

lint-fix: ## ESLint with --fix
	$(NPM) run lint:fix

test: ## Unit tests (tests/unit)
	$(NPM) run test

check: lint test build ## Everything CI runs

screenshots: ## Render the site with Playwright against a running `make preview` (OUT=dir)
	cd $(SITE_DIR) && node ../tests/e2e/screenshots.mjs "$(or $(OUT),../screenshots)"

clean: ## Remove build output
	rm -rf $(SITE_DIR)/dist $(SITE_DIR)/node_modules/.vite
