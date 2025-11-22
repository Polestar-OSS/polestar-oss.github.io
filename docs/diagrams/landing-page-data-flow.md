# Landing Page Data Flow

This diagram illustrates the data flow and user interactions within the landing page application, focusing on theme management and navigation.

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Browser
    participant App
    participant Provider as MantineProvider
    participant Storage as localStorage
    participant Header
    participant Hero
    participant External as External Apps
    
    %% Initial Page Load
    rect rgb(200, 230, 255)
        Note over User,Storage: Initial Page Load
        User->>Browser: Navigate to polestar-oss.github.io
        Browser->>App: Load React bundle
        App->>Provider: Initialize with theme config
        Provider->>Storage: Read saved theme preference
        Storage-->>Provider: Return theme (or default 'dark')
        Provider-->>App: Provide theme context
        App->>Header: Render with theme
        App->>Hero: Render with theme
        App->>Browser: Render all sections
        Browser-->>User: Display landing page
    end
    
    %% Theme Toggle Flow
    rect rgb(255, 230, 200)
        Note over User,Storage: Theme Toggle Interaction
        User->>Header: Click theme toggle button
        Header->>Provider: Call toggleColorScheme()
        Provider->>Provider: Toggle theme state (dark ↔ light)
        Provider->>Storage: Save new theme preference
        Storage-->>Provider: Confirm saved
        Provider-->>Header: Update theme context
        Provider-->>Hero: Update theme context
        Provider-->>App: Trigger re-render
        App-->>Browser: Re-render with new theme
        Browser-->>User: Show updated theme
    end
    
    %% Navigation to Main App
    rect rgb(200, 255, 230)
        Note over User,External: Launch Main Application
        User->>Hero: Click "Launch App" button
        Hero->>Browser: Navigate to app URL
        Browser->>External: Open polestar-journey-log-explorer
        External-->>User: Display main application
    end
    
    %% GitHub Link Click
    rect rgb(255, 230, 230)
        Note over User,External: View Source Code
        User->>Header: Click GitHub icon
        Header->>Browser: Open GitHub link (new tab)
        Browser->>External: Navigate to repository
        External-->>User: Display GitHub repository
    end
    
    %% Documentation Link
    rect rgb(230, 230, 255)
        Note over User,External: Access Documentation
        User->>Hero: Click documentation link
        Hero->>Browser: Open docs URL (new tab)
        Browser->>External: Navigate to docs
        External-->>User: Display documentation
    end
\`\`\`

## Flow Descriptions

### 1. Initial Page Load Flow

**Trigger**: User navigates to landing page URL

**Steps**:
1. Browser downloads and executes React bundle
2. App component initializes
3. MantineProvider wraps app with theme context
4. Provider checks localStorage for saved theme preference
5. Provider applies theme (saved or default 'dark')
6. App renders all section components with theme
7. Browser displays complete page to user

**Data**:
- **Input**: URL request
- **Processing**: Theme initialization, component rendering
- **Output**: Rendered landing page
- **State**: Theme preference loaded from storage

**Performance**: ~1-2 seconds for First Contentful Paint

### 2. Theme Toggle Flow

**Trigger**: User clicks theme toggle button in header

**Steps**:
1. User clicks ActionIcon in Header
2. Header calls `toggleColorScheme()` from Mantine hook
3. Provider toggles internal theme state
4. New theme saved to localStorage
5. Provider notifies all consuming components
6. Components re-render with new theme
7. Browser updates display

**Data**:
- **Input**: Button click event
- **Processing**: Theme state toggle
- **Output**: Updated UI with new color scheme
- **State**: Theme preference saved to localStorage

**Performance**: Instant (<100ms) with smooth transition

### 3. Navigation to Main Application Flow

**Trigger**: User clicks "Launch App" or "Launch App Now" button

**Steps**:
1. User clicks Button in Hero or GetStarted section
2. Button's href triggers browser navigation
3. Browser navigates to main app URL
4. Main app loads in same or new tab (based on target)
5. Journey Log Explorer displays

**Data**:
- **Input**: Button click
- **Processing**: None (direct navigation)
- **Output**: New page load
- **State**: No state changes

**Target URL**: `https://polestar-oss.github.io/polestar-journey-log-explorer/`

### 4. GitHub Link Flow

**Trigger**: User clicks GitHub icon or "View on GitHub" button

**Steps**:
1. User clicks ActionIcon or Button
2. Browser opens link in new tab (target="_blank")
3. GitHub repository page loads
4. User views source code, issues, or docs

**Data**:
- **Input**: Link click
- **Processing**: None (external navigation)
- **Output**: GitHub page in new tab
- **State**: No state changes

**Target URL**: `https://github.com/Polestar-OSS/polestar-journey-log-explorer`

### 5. Documentation Link Flow

**Trigger**: User clicks documentation links in GetStarted or Footer

**Steps**:
1. User clicks Anchor/Button with doc link
2. Browser opens link in new tab
3. GitHub renders Markdown documentation
4. User reads documentation

**Data**:
- **Input**: Link click
- **Processing**: None (external navigation)
- **Output**: Documentation page in new tab
- **State**: No state changes

**Target URLs**:
- User Guide: `/docs/USER_GUIDE.md`
- Development: `/docs/DEVELOPMENT.md`
- Contributing: `/docs/CONTRIBUTING.md`
- Architecture: `/docs/ARCHITECTURE.md`

## State Management

### Theme State

\`\`\`mermaid
stateDiagram-v2
    [*] --> CheckStorage: App Loads
    CheckStorage --> Dark: No saved preference
    CheckStorage --> Dark: Preference = "dark"
    CheckStorage --> Light: Preference = "light"
    
    Dark --> Light: Toggle clicked
    Light --> Dark: Toggle clicked
    
    Light --> SaveDark: Save to storage
    Dark --> SaveLight: Save to storage
    
    SaveDark --> Dark
    SaveLight --> Light
\`\`\`

**Storage Key**: `mantine-color-scheme-value`

**Possible Values**:
- `"dark"` (default)
- `"light"`

**Persistence**: Survives browser refresh and navigation

### Component State

- **No local state**: All components are stateless functional components
- **Theme consumed via hook**: `useMantineColorScheme()` from Mantine
- **Props**: Static props (no dynamic data)
- **Context**: Only theme context from MantineProvider

## Event Handling

### Click Events

1. **Theme Toggle**
   - Handler: `toggleColorScheme()`
   - Effect: Toggle theme, save to storage
   - Bubbling: None

2. **CTA Buttons**
   - Handler: Browser navigation (href)
   - Effect: Navigate to external URL
   - Target: `_blank` for new tab or `_self` for same tab

3. **Social Links**
   - Handler: Browser navigation (href)
   - Effect: Open social media profile
   - Target: `_blank` (new tab)

### Keyboard Events

- **Tab Navigation**: Native browser behavior
- **Enter/Space**: Activates buttons and links
- **Escape**: Closes modals (if implemented)

### Scroll Events

- **None**: No scroll-based interactions (yet)
- **Future**: Intersection observer for animations

## Performance Optimizations

### Rendering Optimization

- **React.memo**: Not needed (no re-renders except theme)
- **useMemo**: Not needed (no expensive computations)
- **useCallback**: Not needed (no callback props)
- **Code Splitting**: Vendor chunks separated

### Data Optimization

- **No API Calls**: All data is static
- **No Data Fetching**: No external data sources
- **No State Updates**: Only theme toggle updates state
- **localStorage**: Minimal usage (just theme)

### Network Optimization

- **Bundle Size**: <500KB gzipped
- **Lazy Loading**: Not implemented (small bundle)
- **CDN**: GitHub Pages CDN for fast delivery
- **Caching**: Long cache headers for static assets

## Error Handling

### Render Errors

- **Error Boundaries**: Not implemented (simple app)
- **Fallback**: Browser default error display
- **Recovery**: Page refresh

### Storage Errors

- **localStorage Unavailable**: Falls back to default theme
- **localStorage Full**: Silently fails, uses default
- **Invalid Value**: Falls back to default

### Navigation Errors

- **Broken Links**: User sees 404 page
- **Network Error**: Browser shows error page
- **CORS Issues**: Not applicable (no API calls)

## Accessibility Data Flow

### Screen Reader Flow

1. User navigates with screen reader
2. Semantic HTML provides structure
3. ARIA labels provide context
4. Screen reader announces content
5. User navigates with keyboard

### Keyboard Flow

1. User presses Tab
2. Focus moves to next interactive element
3. Focus indicator visible
4. User presses Enter/Space
5. Action executes (navigation or toggle)

## Future Enhancements

### Planned Flows

1. **Analytics Flow**: Track user interactions (privacy-respecting)
2. **Animation Flow**: Intersection observer for scroll animations
3. **Lazy Load Flow**: Defer loading below-fold content
4. **Service Worker Flow**: Cache assets for offline support
5. **Form Flow**: Newsletter signup or feedback form
