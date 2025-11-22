# Polestar OSS

[![Deploy Landing Page](https://github.com/Polestar-OSS/polestar-oss.github.io/actions/workflows/deploy-landing.yml/badge.svg)](https://github.com/Polestar-OSS/polestar-oss.github.io/actions/workflows/deploy-landing.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Open source tools and applications for electric vehicle owners, with a focus on privacy, performance, and user experience.

🌐 **Visit**: [https://polestar-oss.github.io/](https://polestar-oss.github.io/)

## Projects

### 🚗 Journey Log Explorer

A comprehensive web application for analyzing Polestar journey log data with interactive charts, maps, and statistics.

- **Live App**: [https://polestar-oss.github.io/polestar-journey-log-explorer/](https://polestar-oss.github.io/polestar-journey-log-explorer/)
- **Repository**: [polestar-journey-log-explorer](https://github.com/Polestar-OSS/polestar-journey-log-explorer)
- **Documentation**: [app/docs/](./app/docs/)

**Features**:
- 📊 Interactive charts and visualizations
- 🗺️ Route mapping with OpenLayers
- 📈 11+ key metrics and statistics
- 🌱 Carbon savings calculator
- 💰 Cost calculator with global rates
- 🔒 100% client-side processing
- 🌓 Dark/light theme
- 📱 Fully responsive

## Repository Structure

```
polestar-oss.github.io/
├── landing-page/           # Organization landing page
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── app/                    # Journey Log Explorer application
│   ├── app/                # Application source code
│   │   └── src/
│   ├── docs/               # Application documentation
│   │   ├── ARCHITECTURE.md
│   │   ├── USER_GUIDE.md
│   │   ├── DEVELOPMENT.md
│   │   └── diagrams/
│   └── README.md
│
├── docs/                   # Project-wide documentation
│   ├── README.md
│   ├── LANDING_PAGE_ARCHITECTURE.md
│   └── diagrams/
│       ├── landing-page-system-architecture.md
│       ├── landing-page-component-hierarchy.md
│       ├── landing-page-data-flow.md
│       └── landing-page-deployment-process.md
│
├── .github/
│   └── workflows/
│       ├── deploy-landing.yml    # Landing page deployment
│       └── deploy.yml            # App deployment
│
└── README.md               # This file
```

## Quick Start

### Landing Page Development

```bash
# Navigate to landing page
cd landing-page

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The landing page will be available at `http://localhost:3000`.

### Application Development

```bash
# Navigate to application
cd app/app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173`.

## Documentation

### Landing Page
- [Landing Page README](./landing-page/README.md)
- [Landing Page Architecture](./docs/LANDING_PAGE_ARCHITECTURE.md)
- [System Architecture Diagram](./docs/diagrams/landing-page-system-architecture.md)
- [Component Hierarchy](./docs/diagrams/landing-page-component-hierarchy.md)
- [Data Flow](./docs/diagrams/landing-page-data-flow.md)
- [Deployment Process](./docs/diagrams/landing-page-deployment-process.md)

### Journey Log Explorer
- [Application README](./app/README.md)
- [Project Summary](./app/docs/PROJECT_SUMMARY.md)
- [Architecture](./app/docs/ARCHITECTURE.md)
- [User Guide](./app/docs/USER_GUIDE.md)
- [Development Guide](./app/docs/DEVELOPMENT.md)
- [Contributing](./app/docs/CONTRIBUTING.md)
- [System Diagrams](./app/docs/diagrams/)

### General
- [Documentation Index](./docs/README.md)

## Technology Stack

### Landing Page
- **React 18.3.1** - UI framework
- **Vite 7.2.4** - Build tool
- **Mantine UI 7.13.2** - Component library
- **Tabler Icons 3.19.0** - Icon set

### Journey Log Explorer
- **React 18.3.1** - UI framework
- **Vite 7.2.4** - Build tool
- **Mantine UI 7.13.2** - Component library
- **Recharts 2.12.7** - Charts and visualizations
- **OpenLayers 10.7.0** - Interactive maps
- **PapaParse 5.4.1** - CSV parsing
- **ExcelJS 4.4.0** - Excel file support
- **Day.js 1.11.19** - Date handling

## Deployment

Both projects are automatically deployed to GitHub Pages via GitHub Actions:

- **Landing Page**: Deploys to root (`polestar-oss.github.io`)
- **Application**: Deploys to subdirectory (`polestar-oss.github.io/polestar-journey-log-explorer`)

### Deployment Triggers

- Push to `main` branch
- Manual workflow dispatch

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` or GitHub Actions
4. Ensure workflows have proper permissions

## Features

### Privacy-First
- 100% client-side processing
- No backend servers
- No data collection
- No tracking or analytics
- All processing happens locally in your browser

### Open Source
- MIT licensed
- Community-driven
- Transparent development
- Contributions welcome

### Performance
- Fast load times (<2s)
- Optimized bundles (<500KB gzipped)
- Code splitting
- CDN distribution

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast modes
- Responsive design

## Contributing

We welcome contributions! Please see:

1. [Contributing Guidelines](./app/docs/CONTRIBUTING.md)
2. [Development Guide](./app/docs/DEVELOPMENT.md)
3. [Architecture Documentation](./docs/LANDING_PAGE_ARCHITECTURE.md)

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- ESLint for code quality
- Prettier for formatting (optional)
- Semantic commit messages
- Clear documentation
- Test before submitting

## Support

- **Issues**: [GitHub Issues](https://github.com/Polestar-OSS/polestar-journey-log-explorer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Polestar-OSS/polestar-journey-log-explorer/discussions)
- **Documentation**: [docs/](./docs/)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Built with ❤️ by the Polestar OSS community
- Powered by open source technologies
- Inspired by EV owners worldwide
- Designed for privacy and performance

## Links

- **Landing Page**: https://polestar-oss.github.io/
- **Main Application**: https://polestar-oss.github.io/polestar-journey-log-explorer/
- **GitHub Organization**: https://github.com/Polestar-OSS
- **Main Repository**: https://github.com/Polestar-OSS/polestar-journey-log-explorer

## Roadmap

### Landing Page
- [ ] Add interactive demo section
- [ ] Add blog/news section
- [ ] Multi-language support
- [ ] Progressive Web App features
- [ ] Video tutorials

### Journey Log Explorer
- [ ] Additional chart types
- [ ] Advanced filtering options
- [ ] Export to PDF reports
- [ ] Trip comparison features
- [ ] Community features

## Statistics

- **Total Components**: 200+
- **Lines of Code**: 10,000+
- **Documentation Pages**: 20+
- **Diagrams**: 10+
- **Supported Formats**: CSV, XLSX
- **Bundle Size**: <500KB gzipped

---

**Last Updated**: November 21, 2025  
**Maintained By**: Polestar OSS Community  
**Version**: 1.0.0
