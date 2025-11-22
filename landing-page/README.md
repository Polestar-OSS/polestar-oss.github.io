# Polestar OSS Landing Page

A modern, production-ready landing page for the Polestar OSS organization, showcasing the Polestar Journey Log Explorer and other open source tools for electric vehicle owners.

## Overview

This landing page is built with React, Vite, and Mantine UI to provide a fast, responsive, and visually appealing introduction to the Polestar OSS project. It serves as the main entry point at `https://polestar-oss.github.io/`.

## Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme switcher for comfortable viewing in any environment
- **Fast Loading**: Optimized bundle size with code splitting and lazy loading
- **SEO Optimized**: Comprehensive meta tags for search engines and social media
- **Accessible**: Built with accessibility best practices using Mantine UI

## Project Structure

```
landing-page/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with theme toggle
│   │   ├── Hero.jsx            # Hero section with CTA buttons
│   │   ├── Features.jsx        # Feature grid with 12 key features
│   │   ├── Screenshots.jsx     # Application screenshots showcase
│   │   ├── TechStack.jsx       # Technology stack overview
│   │   ├── GetStarted.jsx      # Quick start guide
│   │   └── Footer.jsx          # Footer with links and resources
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── postcss.config.cjs          # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── .gitignore                  # Git ignore rules
```

## Tech Stack

### Core
- **React 18.3.1**: Modern UI framework with hooks
- **Vite 7.2.4**: Next-generation build tool
- **Mantine UI 7.13.2**: Feature-rich component library

### Styling
- **PostCSS**: CSS transformations
- **Mantine PostCSS Preset**: Optimized for Mantine components

### Development
- **ESLint**: Code quality and consistency
- **React Plugins**: ESLint plugins for React best practices

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Navigate to the landing-page directory
cd landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production build will be created in the `dist/` directory.

## Development

### Component Architecture

The landing page follows a component-based architecture:

1. **Header**: Fixed header with branding and theme toggle
2. **Hero**: Eye-catching hero section with primary CTAs
3. **Features**: Grid of 12 feature cards highlighting key capabilities
4. **Screenshots**: Showcase of application interfaces
5. **TechStack**: Technology stack and architecture highlights
6. **GetStarted**: Quick start instructions and code snippets
7. **Footer**: Links to documentation and resources

### Styling Approach

- Uses Mantine UI's theming system for consistent design
- Custom color schemes for dark/light modes
- Responsive breakpoints handled by Mantine's responsive utilities
- Gradient effects for visual appeal

### Performance Optimizations

- **Code Splitting**: Vendor chunks separated for better caching
- **Lazy Loading**: Components loaded on demand
- **Minification**: Production builds minified with Terser
- **Asset Optimization**: Images and fonts optimized for web

## Deployment

The landing page is automatically deployed to GitHub Pages via GitHub Actions. See the deployment workflow in `.github/workflows/deploy-landing.yml`.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
# (Configure gh-pages branch in repository settings)
```

## Configuration

### Vite Configuration

Key settings in `vite.config.js`:

- **Base**: Set to `/` for root-level deployment
- **Build Output**: `dist/` directory
- **Port**: Development server on port 3000
- **Code Splitting**: React and Mantine separated into vendor chunks

### Meta Tags

SEO and social media meta tags configured in `index.html`:

- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags
- Description and keywords
- Favicon and app icons

## Contributing

Contributions are welcome! Please see the main repository's [CONTRIBUTING.md](../app/docs/CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Build to verify: `npm run build`
6. Submit a pull request

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Links

- **Live Site**: https://polestar-oss.github.io/
- **Main App**: https://polestar-oss.github.io/polestar-journey-log-explorer/
- **GitHub**: https://github.com/Polestar-OSS/polestar-journey-log-explorer
- **Documentation**: [../app/docs/](../app/docs/)

## Support

For issues or questions:

- Open an issue on [GitHub](https://github.com/Polestar-OSS/polestar-journey-log-explorer/issues)
- Check the [User Guide](../app/docs/USER_GUIDE.md)
- Review [Development Guide](../app/docs/DEVELOPMENT.md)
