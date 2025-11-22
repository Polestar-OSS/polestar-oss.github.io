# Documentation Index

Welcome to the Polestar OSS documentation. This index provides an overview of all available documentation for both the landing page and the main Journey Log Explorer application.

## Landing Page Documentation

The landing page serves as the entry point to Polestar OSS projects at `https://polestar-oss.github.io/`.

### Core Documentation

- **[Landing Page Architecture](./LANDING_PAGE_ARCHITECTURE.md)** - Complete architectural overview, component structure, and technical decisions
- **[Landing Page README](../landing-page/README.md)** - Quick start guide, features, and development setup

### Diagrams

- **[Landing Page System Architecture](./diagrams/landing-page-system-architecture.md)** - Overall system architecture with external dependencies
- **[Landing Page Component Hierarchy](./diagrams/landing-page-component-hierarchy.md)** - Component tree and relationships
- **[Landing Page Data Flow](./diagrams/landing-page-data-flow.md)** - Theme management and user interaction flows
- **[Landing Page Deployment Process](./diagrams/landing-page-deployment-process.md)** - CI/CD pipeline and deployment workflow

## Journey Log Explorer Documentation

The main application for analyzing Polestar journey data.

### Core Documentation

- **[Project Summary](../app/docs/PROJECT_SUMMARY.md)** - Complete project overview, features, and status
- **[Architecture](../app/docs/ARCHITECTURE.md)** - Detailed system architecture and design patterns
- **[SOLID Implementation](../app/docs/SOLID_IMPLEMENTATION.md)** - SOLID principles implementation guide
- **[User Guide](../app/docs/USER_GUIDE.md)** - Comprehensive user manual with features and usage
- **[Development Guide](../app/docs/DEVELOPMENT.md)** - Developer setup, architecture, and contribution guidelines
- **[Quick Start](../app/docs/QUICKSTART.md)** - Fast-track setup guide
- **[Contributing](../app/docs/CONTRIBUTING.md)** - Contribution guidelines and code standards

### Application Diagrams

- **[System Architecture](../app/docs/diagrams/system-architecture.md)** - Complete system architecture with all components
- **[Component Hierarchy](../app/docs/diagrams/component-hierarchy.md)** - React component tree structure
- **[Data Flow](../app/docs/diagrams/data-flow.md)** - Data processing pipeline
- **[Data Model](../app/docs/diagrams/data-model.md)** - Journey data structure and relationships
- **[User Journey](../app/docs/diagrams/user-journey.md)** - User interaction flows
- **[Deployment Process](../app/docs/diagrams/deployment-process.md)** - Build and deployment pipeline

## Project Structure

\`\`\`
polestar-oss.github.io/
├── landing-page/              # Landing page source code
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── app/                       # Journey Log Explorer
│   ├── app/                   # Application source
│   │   └── src/
│   ├── docs/                  # Application documentation
│   └── README.md
│
├── docs/                      # Project-wide documentation
│   ├── LANDING_PAGE_ARCHITECTURE.md
│   └── diagrams/
│       └── landing-page-*.md
│
└── .github/
    └── workflows/
        ├── deploy.yml         # App deployment
        └── deploy-landing.yml # Landing page deployment
\`\`\`

## Getting Started

### For Users

1. **Visit the Landing Page**: [https://polestar-oss.github.io/](https://polestar-oss.github.io/)
2. **Read the User Guide**: [User Guide](../app/docs/USER_GUIDE.md)
3. **Launch the App**: [Journey Log Explorer](https://polestar-oss.github.io/polestar-journey-log-explorer/)

### For Developers

1. **Read the Architecture**: Start with [Architecture](../app/docs/ARCHITECTURE.md) or [Landing Page Architecture](./LANDING_PAGE_ARCHITECTURE.md)
2. **Setup Development Environment**: Follow [Development Guide](../app/docs/DEVELOPMENT.md)
3. **Review Contributing Guidelines**: See [Contributing](../app/docs/CONTRIBUTING.md)
4. **Explore the Code**: Clone the repository and run locally

## Key Features

### Journey Log Explorer

- ✅ Upload CSV/XLSX journey logs
- ✅ Interactive charts and visualizations
- ✅ Map view with route plotting
- ✅ Data table with search and filters
- ✅ Statistics dashboard (11+ metrics)
- ✅ Carbon savings calculator
- ✅ Cost calculator with global rates
- ✅ Trip annotations and notes
- ✅ 100% client-side processing
- ✅ Dark/light theme
- ✅ Responsive design

### Landing Page

- ✅ Modern, professional design
- ✅ Feature showcase with 12 cards
- ✅ Technology stack overview
- ✅ Quick start guide
- ✅ Dark/light theme
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Fast loading (<500KB)

## Technology Stack

### Landing Page

- React 18.3.1
- Vite 7.2.4
- Mantine UI 7.13.2
- Tabler Icons 3.19.0

### Journey Log Explorer

- React 18.3.1
- Vite 7.2.4
- Mantine UI 7.13.2
- Recharts 2.12.7
- OpenLayers 10.7.0
- PapaParse 5.4.1
- ExcelJS 4.4.0
- Day.js 1.11.19

## Deployment

Both applications are deployed to GitHub Pages:

- **Landing Page**: Root domain at `polestar-oss.github.io`
- **Main App**: Subdirectory at `polestar-oss.github.io/polestar-journey-log-explorer`

Deployments are automated via GitHub Actions on push to main branch.

## Support & Community

- **GitHub Issues**: [Report bugs or request features](https://github.com/Polestar-OSS/polestar-journey-log-explorer/issues)
- **Discussions**: [Ask questions and share ideas](https://github.com/Polestar-OSS/polestar-journey-log-explorer/discussions)
- **Contributing**: [Contribution guidelines](../app/docs/CONTRIBUTING.md)

## License

Both projects are licensed under the MIT License. See [LICENSE](../LICENSE) for details.

## Changelog

### Landing Page

- **v1.0.0** (2025-11-21) - Initial release
  - Hero section with CTAs
  - 12 feature cards
  - Screenshots showcase
  - Tech stack overview
  - Quick start guide
  - Responsive footer

### Journey Log Explorer

See the main [README](../app/README.md) for application changelog.

## Additional Resources

- **Live Landing Page**: https://polestar-oss.github.io/
- **Live Application**: https://polestar-oss.github.io/polestar-journey-log-explorer/
- **GitHub Organization**: https://github.com/Polestar-OSS
- **Main Repository**: https://github.com/Polestar-OSS/polestar-journey-log-explorer

---

**Last Updated**: November 21, 2025  
**Maintained By**: Polestar OSS Community
