# Landing Page Deployment Process

This diagram illustrates the complete CI/CD pipeline for building and deploying the landing page to GitHub Pages.

\`\`\`mermaid
graph TB
    subgraph Development["💻 Development"]
        Dev[Developer]
        LocalRepo[Local Repository]
        DevBranch[Feature Branch]
    end
    
    subgraph GitHub["🐙 GitHub Repository"]
        Main[main Branch]
        PR[Pull Request]
        Actions[GitHub Actions]
    end
    
    subgraph CI["🔄 CI/CD Pipeline"]
        Trigger[Workflow Trigger<br/>push to main]
        
        subgraph BuildJob["Build Job"]
            Checkout[Checkout Code<br/>actions/checkout@v4]
            SetupNode[Setup Node.js 18<br/>actions/setup-node@v4]
            Cache[Cache Dependencies<br/>npm cache]
            Install[Install Dependencies<br/>npm ci]
            Lint[Run Linter<br/>npm run lint]
            Build[Build Production<br/>npm run build]
            Artifact[Upload Artifact<br/>upload-pages-artifact@v3]
        end
        
        subgraph DeployJob["Deploy Job"]
            Configure[Configure Pages<br/>configure-pages@v4]
            Deploy[Deploy to Pages<br/>deploy-pages@v4]
        end
    end
    
    subgraph Hosting["🌐 Hosting"]
        Pages[GitHub Pages]
        CDN[GitHub CDN]
        DNS[DNS<br/>polestar-oss.github.io]
    end
    
    subgraph Users["👥 Users"]
        Browser[Web Browsers]
        EndUser[End Users]
    end
    
    %% Development Flow
    Dev -->|Code Changes| LocalRepo
    LocalRepo -->|Commit & Push| DevBranch
    DevBranch -->|Create| PR
    PR -->|Review & Approve| Main
    
    %% CI/CD Flow
    Main -->|Push Event| Trigger
    Trigger --> Checkout
    Checkout --> SetupNode
    SetupNode --> Cache
    Cache --> Install
    Install --> Lint
    Lint --> Build
    Build --> Artifact
    
    Artifact -->|Needs: build| Configure
    Configure --> Deploy
    
    %% Deployment Flow
    Deploy --> Pages
    Pages --> CDN
    CDN --> DNS
    DNS --> Browser
    Browser --> EndUser
    
    %% Feedback Loop
    EndUser -.->|Issues/Feedback| Dev
    
    %% Styling
    style Development fill:#e3f2fd
    style GitHub fill:#fff3e0
    style CI fill:#e8f5e9
    style BuildJob fill:#c8e6c9
    style DeployJob fill:#a5d6a7
    style Hosting fill:#f3e5f5
    style Users fill:#fce4ec
\`\`\`

## Workflow Configuration

### Trigger Events

\`\`\`yaml
on:
  push:
    branches:
      - main
    paths:
      - 'landing-page/**'
  workflow_dispatch:
\`\`\`

**Automatic Triggers**:
- Push to `main` branch
- Changes in `landing-page/` directory only

**Manual Triggers**:
- Workflow dispatch (manual run from GitHub UI)

### Permissions

\`\`\`yaml
permissions:
  contents: read
  pages: write
  id-token: write
\`\`\`

- **contents: read**: Access repository code
- **pages: write**: Deploy to GitHub Pages
- **id-token: write**: OIDC token for deployment

### Concurrency

\`\`\`yaml
concurrency:
  group: "pages-landing"
  cancel-in-progress: false
\`\`\`

- **Group**: Named group for landing page deployments
- **Cancel in Progress**: Keep running deploys (no cancellation)

## Build Job Details

### Step 1: Checkout Code

\`\`\`yaml
- name: Checkout
  uses: actions/checkout@v4
\`\`\`

**Purpose**: Clone repository to runner  
**Duration**: ~5 seconds  
**Output**: Full repository code

### Step 2: Setup Node.js

\`\`\`yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: "18"
    cache: "npm"
    cache-dependency-path: "landing-page/package-lock.json"
\`\`\`

**Purpose**: Install Node.js and setup npm cache  
**Duration**: ~10 seconds (with cache)  
**Output**: Node.js 18 environment, cached dependencies

### Step 3: Install Dependencies

\`\`\`yaml
- name: Install dependencies
  working-directory: ./landing-page
  run: npm ci
\`\`\`

**Purpose**: Install production dependencies  
**Duration**: ~30 seconds (with cache), ~2 minutes (cold)  
**Output**: `node_modules/` directory  
**Command**: `npm ci` (clean install, faster than `npm install`)

### Step 4: Run Linter

\`\`\`yaml
- name: Lint
  working-directory: ./landing-page
  run: npm run lint
\`\`\`

**Purpose**: Check code quality and style  
**Duration**: ~10 seconds  
**Output**: Lint report (fails on errors)  
**Command**: `eslint . --ext js,jsx`

**Exit Codes**:
- `0`: No errors
- `1`: Errors found (blocks deployment)

### Step 5: Build Production Bundle

\`\`\`yaml
- name: Build
  working-directory: ./landing-page
  run: npm run build
\`\`\`

**Purpose**: Create optimized production bundle  
**Duration**: ~1-2 minutes  
**Output**: `dist/` directory with minified assets  
**Command**: `vite build`

**Build Outputs**:
- `index.html`: Main HTML file
- `assets/*.js`: JavaScript bundles (with hash)
- `assets/*.css`: Stylesheets (with hash)
- Public assets (images, fonts, favicon)

**Bundle Size**:
- React vendor: ~150KB gzipped
- Mantine vendor: ~200KB gzipped
- App code: ~50KB gzipped
- Total: ~400KB gzipped

### Step 6: Upload Artifact

\`\`\`yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./landing-page/dist
\`\`\`

**Purpose**: Package dist folder for deployment  
**Duration**: ~10 seconds  
**Output**: GitHub artifact (available for deploy job)

## Deploy Job Details

### Step 1: Configure Pages

\`\`\`yaml
- name: Setup Pages
  uses: actions/configure-pages@v4
\`\`\`

**Purpose**: Configure GitHub Pages settings  
**Duration**: ~5 seconds  
**Output**: Pages configuration

### Step 2: Deploy to GitHub Pages

\`\`\`yaml
- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v4
\`\`\`

**Purpose**: Deploy artifact to GitHub Pages  
**Duration**: ~30 seconds  
**Output**: Deployed site URL  
**URL**: `https://polestar-oss.github.io/`

## Deployment Flow Diagram

\`\`\`mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as Git Push
    participant GH as GitHub
    participant Actions as GitHub Actions
    participant Runner as Ubuntu Runner
    participant Pages as GitHub Pages
    participant CDN as GitHub CDN
    participant User as End User
    
    Dev->>Git: git push origin main
    Git->>GH: Push to main branch
    GH->>Actions: Trigger workflow
    Actions->>Runner: Start ubuntu-latest
    
    Runner->>Runner: Checkout code
    Runner->>Runner: Setup Node.js 18
    Runner->>Runner: Install dependencies
    Runner->>Runner: Run linter
    Runner->>Runner: Build production bundle
    Runner->>Runner: Upload artifact
    
    Runner->>Actions: Build complete
    Actions->>Pages: Deploy artifact
    Pages->>Pages: Process files
    Pages->>CDN: Distribute to CDN
    
    CDN-->>User: Serve landing page
    
    Actions-->>Dev: Deployment success notification
\`\`\`

## Success Criteria

### Build Success

✅ **Conditions**:
1. Code checkout successful
2. Dependencies installed without errors
3. Linter passes with no errors
4. Build completes without errors
5. Artifact uploaded successfully

❌ **Failure Points**:
- Checkout fails (repo access issue)
- Install fails (dependency conflict)
- Lint errors found
- Build fails (syntax error, import error)
- Artifact upload fails

### Deploy Success

✅ **Conditions**:
1. Build job completed successfully
2. Pages configured correctly
3. Artifact deployed to Pages
4. Site accessible at URL

❌ **Failure Points**:
- Build job failed
- Pages configuration error
- Deployment permission issue
- DNS propagation delay

## Monitoring & Verification

### Automatic Checks

1. **Workflow Status**: GitHub Actions UI shows success/failure
2. **Deployment Status**: GitHub Pages settings show deployment status
3. **Site Availability**: Pages URL should be accessible
4. **Console Errors**: Check browser console for runtime errors

### Manual Verification

1. **Visual Inspection**: Visit site and check layout
2. **Responsive Testing**: Test on mobile/tablet
3. **Theme Toggle**: Verify dark/light mode works
4. **Link Testing**: Check all CTAs and links work
5. **Performance**: Run Lighthouse audit

### Lighthouse Metrics

Target scores (mobile):
- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: 100
- **SEO**: 100

## Rollback Procedure

### Option 1: Revert Commit

\`\`\`bash
# Revert to previous commit
git revert HEAD
git push origin main
\`\`\`

Triggers new deployment with previous code.

### Option 2: Manual Deployment

\`\`\`bash
# Checkout previous version
git checkout <previous-commit-hash>

# Manually trigger workflow
# (Use workflow_dispatch in GitHub UI)
\`\`\`

### Option 3: Local Build & Deploy

\`\`\`bash
# Build locally
cd landing-page
npm run build

# Deploy using gh-pages (if configured)
npm run deploy
\`\`\`

## Environment Variables

### Build Environment

- **NODE_ENV**: `production` (set by Vite)
- **VITE_BASE_URL**: `/` (root path)
- **CI**: `true` (GitHub Actions environment)

### No Secrets Required

- No API keys needed
- No environment secrets
- All configuration in code
- Public repository safe

## Performance Optimization

### Build Time Optimization

1. **Dependency Caching**: npm cache reduces install time
2. **Parallel Jobs**: Build and deploy run in sequence (required)
3. **Minimal Dependencies**: Only essential packages
4. **Fast Build Tool**: Vite builds faster than webpack

### Deploy Time Optimization

1. **Small Bundle**: <500KB gzipped
2. **Efficient Artifact**: Only dist/ uploaded
3. **CDN Distribution**: Fast global delivery
4. **HTTP/2**: Multiplexing for parallel downloads

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check lint errors: `npm run lint:fix` locally
   - Verify build locally: `npm run build`
   - Check dependency versions in package.json

2. **Deploy Fails**
   - Verify Pages is enabled in repo settings
   - Check workflow permissions
   - Verify artifact was uploaded

3. **Site Not Updating**
   - Check workflow ran successfully
   - Wait for CDN cache invalidation (1-5 minutes)
   - Hard refresh browser (Cmd+Shift+R)

4. **404 Errors**
   - Verify base path in vite.config.js
   - Check public folder assets
   - Verify index.html in dist root

## Future Improvements

### Planned Enhancements

1. **Preview Deployments**: Deploy PR previews
2. **Performance Budgets**: Fail build if bundle too large
3. **Visual Regression**: Screenshot comparison tests
4. **Lighthouse CI**: Automated performance checks
5. **Deployment Notifications**: Slack/Discord notifications
6. **Multi-Stage**: Staging environment before production
