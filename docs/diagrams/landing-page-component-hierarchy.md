# Landing Page Component Hierarchy

This diagram shows the complete component tree of the landing page application, illustrating the parent-child relationships and component composition.

\`\`\`mermaid
graph TD
    Root[main.jsx<br/>Application Entry Point]
    
    Root --> Provider[MantineProvider<br/>Theme Provider]
    Provider --> App[App.jsx<br/>Root Component]
    
    App --> Shell[AppShell<br/>Layout Container]
    
    Shell --> HeaderSlot[AppShell.Header]
    Shell --> MainSlot[AppShell.Main]
    
    HeaderSlot --> Header[Header.jsx<br/>Navigation Component]
    
    MainSlot --> Hero[Hero.jsx<br/>Hero Section]
    MainSlot --> Features[Features.jsx<br/>Features Section]
    MainSlot --> Screenshots[Screenshots.jsx<br/>Screenshots Section]
    MainSlot --> TechStack[TechStack.jsx<br/>Tech Stack Section]
    MainSlot --> GetStarted[GetStarted.jsx<br/>Get Started Section]
    MainSlot --> Footer[Footer.jsx<br/>Footer Section]
    
    %% Header Children
    Header --> HeaderContainer[Container]
    HeaderContainer --> HeaderGroup1[Group<br/>Branding]
    HeaderContainer --> HeaderGroup2[Group<br/>Actions]
    
    HeaderGroup1 --> Logo[Text<br/>Polestar OSS]
    HeaderGroup2 --> GitHubIcon[ActionIcon<br/>GitHub Link]
    HeaderGroup2 --> ThemeToggle[ActionIcon<br/>Theme Toggle]
    
    %% Hero Children
    Hero --> HeroBox[Box<br/>Gradient Background]
    HeroBox --> HeroContainer[Container]
    HeroContainer --> HeroStack[Stack<br/>Vertical Layout]
    
    HeroStack --> HeroTitle[Title<br/>Main Heading]
    HeroStack --> HeroText[Text<br/>Description]
    HeroStack --> HeroCTAGroup[Group<br/>CTA Buttons]
    HeroStack --> HeroBadges[Group<br/>Privacy Badges]
    
    HeroCTAGroup --> LaunchButton[Button<br/>Launch App]
    HeroCTAGroup --> GitHubButton[Button<br/>View on GitHub]
    
    %% Features Children
    Features --> FeaturesBox[Box<br/>Section Wrapper]
    FeaturesBox --> FeaturesContainer[Container]
    FeaturesContainer --> FeaturesHeader[Stack<br/>Section Header]
    FeaturesContainer --> FeaturesGrid[SimpleGrid<br/>3 Columns]
    
    FeaturesHeader --> FeaturesTitle[Title<br/>Section Title]
    FeaturesHeader --> FeaturesSubtitle[Text<br/>Description]
    
    FeaturesGrid --> Feature1[Card<br/>Interactive Charts]
    FeaturesGrid --> Feature2[Card<br/>Route Mapping]
    FeaturesGrid --> Feature3[Card<br/>Data Table]
    FeaturesGrid --> Feature4[Card<br/>Privacy]
    FeaturesGrid --> Feature5[Card<br/>Battery Analytics]
    FeaturesGrid --> Feature6[Card<br/>Cost Calculator]
    FeaturesGrid --> Feature7[Card<br/>Carbon Savings]
    FeaturesGrid --> Feature8[Card<br/>Filtering]
    FeaturesGrid --> Feature9[Card<br/>No Backend]
    FeaturesGrid --> Feature10[Card<br/>Responsive]
    FeaturesGrid --> Feature11[Card<br/>Annotations]
    FeaturesGrid --> Feature12[Card<br/>Customizable]
    
    Feature1 --> FeatureIcon1[ThemeIcon<br/>Chart Icon]
    Feature1 --> FeatureTitle1[Text<br/>Title]
    Feature1 --> FeatureDesc1[Text<br/>Description]
    
    %% Screenshots Children
    Screenshots --> ScreenshotsBox[Box<br/>Section Wrapper]
    ScreenshotsBox --> ScreenshotsContainer[Container]
    ScreenshotsContainer --> ScreenshotsHeader[Stack<br/>Section Header]
    ScreenshotsContainer --> ScreenshotsStack[Stack<br/>Card Stack]
    
    ScreenshotsStack --> Screenshot1[Card<br/>Statistics Dashboard]
    ScreenshotsStack --> Screenshot2[Card<br/>Interactive Charts]
    ScreenshotsStack --> Screenshot3[Card<br/>Map View]
    ScreenshotsStack --> Screenshot4[Card<br/>Data Table]
    
    Screenshot1 --> SSGrid1[SimpleGrid<br/>2 Columns]
    SSGrid1 --> SSText1[Stack<br/>Text Content]
    SSGrid1 --> SSImage1[Box<br/>Image Container]
    
    %% TechStack Children
    TechStack --> TechBox[Box<br/>Section Wrapper]
    TechBox --> TechContainer[Container]
    TechContainer --> TechHeader[Stack<br/>Section Header]
    TechContainer --> StatsGrid[SimpleGrid<br/>4 Columns]
    TechContainer --> TechGrid[SimpleGrid<br/>4 Columns]
    TechContainer --> ArchCard[Card<br/>Architecture]
    
    StatsGrid --> Stat1[Card<br/>Components 30+]
    StatsGrid --> Stat2[Card<br/>Chart Types 5]
    StatsGrid --> Stat3[Card<br/>Metrics 11+]
    StatsGrid --> Stat4[Card<br/>Bundle <500KB]
    
    TechGrid --> Tech1[Card<br/>Frontend]
    TechGrid --> Tech2[Card<br/>Visualization]
    TechGrid --> Tech3[Card<br/>Data Processing]
    TechGrid --> Tech4[Card<br/>Architecture]
    
    Tech1 --> TechBadge1[Badge<br/>Frontend]
    Tech1 --> TechList1[Stack<br/>Technologies]
    
    %% GetStarted Children
    GetStarted --> GSBox[Box<br/>Section Wrapper]
    GSBox --> GSContainer[Container]
    GSContainer --> GSStack[Stack<br/>Main Layout]
    
    GSStack --> GSHeader[Stack<br/>Section Header]
    GSStack --> GSCard[Card<br/>Quick Start]
    GSStack --> GSLinks[Group<br/>Doc Links]
    
    GSCard --> GSSteps[Stack<br/>3 Steps]
    GSCard --> GSCode[Code<br/>Installation]
    GSCard --> GSButtons[Group<br/>CTA Buttons]
    
    GSButtons --> GSLaunch[Button<br/>Launch App]
    GSButtons --> GSGitHub[Button<br/>View Source]
    
    %% Footer Children
    Footer --> FooterBox[Box<br/>Section Wrapper]
    FooterBox --> FooterContainer[Container]
    FooterContainer --> FooterStack[Stack<br/>Layout]
    
    FooterStack --> FooterTop[Group<br/>Top Section]
    FooterStack --> FooterDivider[Divider]
    FooterStack --> FooterBottom[Group<br/>Bottom Section]
    
    FooterTop --> FooterBrand[Stack<br/>Branding]
    FooterTop --> FooterLinks1[Stack<br/>Resources]
    FooterTop --> FooterLinks2[Stack<br/>Documentation]
    FooterTop --> FooterSocial[Stack<br/>Social Links]
    
    FooterBottom --> Copyright[Text<br/>Copyright]
    FooterBottom --> MadeWith[Group<br/>Attribution]
    
    %% Styling
    style Root fill:#e3f2fd
    style Provider fill:#fff3e0
    style App fill:#f3e5f5
    style Shell fill:#e8f5e9
    
    style Header fill:#ffccbc
    style Hero fill:#c5cae9
    style Features fill:#c8e6c9
    style Screenshots fill:#f8bbd0
    style TechStack fill:#b2dfdb
    style GetStarted fill:#fff9c4
    style Footer fill:#d7ccc8
\`\`\`

## Component Details

### Root Level (main.jsx)
- **Purpose**: Application bootstrap and provider setup
- **Children**: 1 (MantineProvider)
- **State**: None
- **Props**: theme configuration

### MantineProvider
- **Purpose**: Provides theme context to all components
- **Children**: 1 (App)
- **State**: Color scheme (dark/light)
- **Props**: theme, defaultColorScheme

### App.jsx
- **Purpose**: Root component, composes all sections
- **Children**: 1 (AppShell)
- **State**: None
- **Props**: None

### AppShell
- **Purpose**: Layout container with header and main slots
- **Children**: 2 slots (Header, Main)
- **State**: None
- **Props**: header height, padding

### Header (7 total components)
- **Purpose**: Navigation, branding, theme toggle
- **Children**: Container → Groups → Actions/Text
- **State**: None (uses theme hook)
- **Key Features**: Responsive layout, theme toggle

### Hero (11 total components)
- **Purpose**: Hero section with primary CTAs
- **Children**: Box → Container → Stack → Title/Text/Buttons
- **State**: None
- **Key Features**: Gradient background, CTA buttons, badges

### Features (52 total components)
- **Purpose**: Display 12 feature cards in grid
- **Children**: Box → Container → Grid → 12 Cards
- **State**: None
- **Key Features**: Responsive grid, color-coded icons

### Screenshots (20+ total components)
- **Purpose**: Showcase app with 4 screenshot cards
- **Children**: Box → Container → Stack → 4 Cards
- **State**: None
- **Key Features**: Alternating layout, image placeholders

### TechStack (40+ total components)
- **Purpose**: Display tech stack, stats, and architecture
- **Children**: Box → Container → Multiple Grids → Cards
- **State**: None
- **Key Features**: Stats cards, tech cards, architecture highlights

### GetStarted (20+ total components)
- **Purpose**: Quick start guide with code example
- **Children**: Box → Container → Stack → Card/Links
- **State**: None
- **Key Features**: Step-by-step guide, code snippet, CTAs

### Footer (30+ total components)
- **Purpose**: Links, resources, and legal info
- **Children**: Box → Container → Stack → Groups
- **State**: None
- **Key Features**: Multi-column layout, social links

## Component Statistics

- **Total Components**: ~200+
- **Mantine Components Used**: 30+
- **Custom Components**: 7 (main sections)
- **Max Depth**: 8 levels
- **Avg Components per Section**: 20-50

## Composition Patterns

### Container Pattern
Most sections follow this pattern:
\`\`\`
Box (styling wrapper)
└── Container (max-width container)
    └── Stack (vertical layout)
        ├── Header (title + subtitle)
        └── Content (grid/cards/etc)
\`\`\`

### Card Pattern
Feature and tech cards:
\`\`\`
Card
└── Stack
    ├── ThemeIcon
    └── div
        ├── Text (title)
        └── Text (description)
\`\`\`

### CTA Pattern
Call-to-action buttons:
\`\`\`
Group
├── Button (primary action)
└── Button (secondary action)
\`\`\`

## Props Flow

- **Theme**: Provider → All components (via context)
- **Links**: Hardcoded in components (external URLs)
- **Content**: Hardcoded in components (static data)
- **Actions**: Button onClick handlers (navigation)

## Future Enhancements

- Add lazy loading for sections
- Implement intersection observer for animations
- Add component-level code splitting
- Create reusable card components
- Extract static data to separate files
