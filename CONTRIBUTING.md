# Contributing to Polestar OSS

Thank you for your interest in contributing to Polestar OSS! This document provides guidelines for contributing to both the landing page and the Journey Log Explorer application.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what is best for the community

## How to Contribute

### Reporting Issues

1. **Check existing issues** to avoid duplicates
2. **Use issue templates** if available
3. **Provide detailed information**:
   - Clear description of the issue
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser/OS information

### Suggesting Features

1. **Open a discussion** first to gauge interest
2. **Describe the use case** and benefits
3. **Consider implementation complexity**
4. **Be open to feedback** and alternatives

### Submitting Pull Requests

#### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/polestar-oss.github.io.git
cd polestar-oss.github.io
```

#### 2. Create a Branch

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or a fix branch
git checkout -b fix/issue-description
```

#### 3. Make Changes

**For Landing Page**:
```bash
cd landing-page
npm install
npm run dev
# Make your changes
npm run lint
npm run build
```

**For Application**:
```bash
cd app/app
npm install
npm run dev
# Make your changes
npm run lint
npm run build
```

#### 4. Commit Changes

```bash
# Add changes
git add .

# Commit with clear message
git commit -m "feat: add new feature description"
```

**Commit Message Format**:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

#### 5. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Reference related issues
- Screenshots (if UI changes)
- Testing steps

## Development Guidelines

### Code Style

- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Use ESLint rules

### Component Guidelines

**React Components**:
```jsx
// Use functional components
export default function ComponentName() {
  // Hooks at the top
  const [state, setState] = useState(null)
  
  // Event handlers
  const handleClick = () => {
    // Handle event
  }
  
  // Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  )
}
```

### Documentation

- Update README when adding features
- Add JSDoc comments for complex functions
- Create/update diagrams for architecture changes
- Keep documentation in sync with code

### Testing

- Test manually in multiple browsers
- Check responsive design
- Verify dark/light themes
- Test keyboard navigation
- Run linter: `npm run lint`
- Build successfully: `npm run build`

## Project-Specific Guidelines

### Landing Page

**What to Contribute**:
- UI improvements
- Performance optimizations
- Accessibility enhancements
- Content updates
- New sections

**What to Avoid**:
- Adding dependencies unnecessarily
- Breaking existing functionality
- Ignoring responsive design
- Accessibility regressions

### Journey Log Explorer

**What to Contribute**:
- New chart types
- Additional statistics
- UI/UX improvements
- Bug fixes
- Performance optimizations
- Documentation

**What to Avoid**:
- Adding backend dependencies
- Breaking data privacy
- Bloating bundle size
- Removing features without discussion

## Review Process

1. **Automated Checks**: CI/CD runs linting and builds
2. **Code Review**: Maintainers review code quality
3. **Testing**: Manual testing of changes
4. **Discussion**: Address feedback and make updates
5. **Approval**: Maintainer approves and merges

### Review Timeline

- Initial response: 1-3 days
- Review cycles: 1-7 days
- Merge: After approval

## Getting Help

- **Questions**: Open a Discussion
- **Bugs**: Open an Issue
- **Chat**: (If available) Join community chat
- **Documentation**: Check [docs/](../docs/)

## Recognition

Contributors are:
- Listed in release notes
- Acknowledged in documentation
- Part of the community

Thank you for contributing to Polestar OSS! 🚗⚡
