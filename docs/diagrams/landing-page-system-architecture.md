# Landing Page System Architecture

This diagram illustrates the complete system architecture of the Polestar OSS landing page, showing all components, state management, and external integrations.

\`\`\`mermaid
graph TB
    subgraph Browser["🌐 Browser Environment"]
        subgraph Landing["Landing Page Application"]
            subgraph Entry["Entry Point"]
                Main[main.jsx<br/>App Bootstrap]
                Provider[MantineProvider<br/>Theme System]
            end
            
            subgraph Layout["Layout Components"]
                App[App.jsx<br/>Root Component]
                Shell[AppShell<br/>Layout Container]
            end
            
            subgraph Pages["Page Sections"]
                Header[Header<br/>Navigation & Branding]
                Hero[Hero<br/>Hero Section & CTAs]
                Features[Features<br/>Feature Grid]
                Screenshots[Screenshots<br/>App Showcase]
                TechStack[TechStack<br/>Technology Overview]
                GetStarted[GetStarted<br/>Quick Start Guide]
                Footer[Footer<br/>Links & Resources]
            end
            
            subgraph State["State Management"]
                ThemeHook[useMantineColorScheme<br/>Theme State]
                LocalStorage[localStorage<br/>Theme Persistence]
            end
        end
        
        subgraph Cache["Browser Cache"]
            AppCache[Application Cache<br/>Service Worker]
            AssetCache[Asset Cache<br/>Images & Fonts]
        end
    end
    
    subgraph External["🌍 External Services"]
        GitHub[GitHub<br/>Repository]
        MainApp[Journey Log Explorer<br/>Main Application]
        Pages[GitHub Pages<br/>Static Hosting]
        CDN[GitHub CDN<br/>Global Distribution]
    end
    
    subgraph Build["🔨 Build Pipeline"]
        Vite[Vite Build<br/>Bundler]
        Dist[dist/<br/>Production Bundle]
    end
    
    Main --> Provider
    Provider --> App
    App --> Shell
    Shell --> Header
    Shell --> Hero
    Shell --> Features
    Shell --> Screenshots
    Shell --> TechStack
    Shell --> GetStarted
    Shell --> Footer
    
    Header --> ThemeHook
    ThemeHook <-.-> LocalStorage
    
    Hero -.->|Launch App Link| MainApp
    GetStarted -.->|Source Code Link| GitHub
    Footer -.->|Documentation Link| GitHub
    
    Vite --> Dist
    Dist --> Pages
    Pages --> CDN
    CDN --> Browser
    
    Browser --> AppCache
    Browser --> AssetCache
    
    style Browser fill:#e3f2fd
    style Landing fill:#fff3e0
    style External fill:#e8f5e9
    style Build fill:#f3e5f5
    style State fill:#fce4ec
    style Cache fill:#e0f2f1
\`\`\`

## Component Descriptions

### Entry Point
- **main.jsx**: Application entry point, initializes React and Mantine provider
- **MantineProvider**: Wraps app with theme configuration and color scheme management

### Layout Components
- **App.jsx**: Root component that composes all page sections
- **AppShell**: Mantine's layout container providing consistent structure

### Page Sections
- **Header**: Fixed header with logo, navigation, and theme toggle
- **Hero**: Eye-catching hero section with primary CTAs and value proposition
- **Features**: Grid of 12 feature cards highlighting key capabilities
- **Screenshots**: Visual showcase of the application with descriptions
- **TechStack**: Technology stack overview with stats and highlights
- **GetStarted**: Quick start guide with code snippets and CTAs
- **Footer**: Links to resources, documentation, and legal information

### State Management
- **useMantineColorScheme**: Mantine hook managing dark/light theme state
- **localStorage**: Browser storage for theme preference persistence

### Browser Cache
- **Application Cache**: Service worker cache (future enhancement)
- **Asset Cache**: Browser cache for images, fonts, and static assets

### External Services
- **GitHub**: Source code repository and issue tracking
- **Main App**: Journey Log Explorer application (linked from CTAs)
- **GitHub Pages**: Static hosting service
- **GitHub CDN**: Global content delivery network

### Build Pipeline
- **Vite Build**: Development and production build tool
- **dist/**: Production bundle output directory

## Data Flow

1. **Initial Load**:
   - User requests landing page URL
   - GitHub CDN serves static assets
   - Browser loads and executes bundle
   - MantineProvider initializes theme from localStorage
   - App renders all components

2. **Theme Toggle**:
   - User clicks theme toggle in Header
   - useMantineColorScheme updates theme state
   - New theme saved to localStorage
   - App re-renders with new color scheme

3. **Navigation**:
   - User clicks "Launch App" button
   - Browser navigates to main application URL
   - Main app loads in same/new tab

4. **External Links**:
   - User clicks documentation links
   - Browser opens GitHub repository
   - User views docs, code, or issues

## Performance Optimizations

- **Code Splitting**: Vendor chunks separated from app code
- **Lazy Loading**: Components loaded on demand (future)
- **Asset Optimization**: Compressed images and fonts
- **CDN Caching**: Long cache headers for static assets
- **Bundle Size**: <500KB gzipped total

## Security Features

- **HTTPS Only**: All traffic encrypted
- **Content Security Policy**: XSS protection
- **No Sensitive Data**: No API keys or credentials
- **Dependency Security**: Regular vulnerability scans

## Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Indicators**: Visible focus states
