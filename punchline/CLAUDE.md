# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for Punchline, an iOS drum machine app with AudioUnit plugins. The site uses vanilla HTML, CSS, and JavaScript with no build system or framework dependencies.

## Development Commands

This is a static website with no build system:
- **Run locally**: Open `index.html` directly in a browser or serve with any web server
- **No build/test commands**: Static files require no compilation

## Architecture

### Technology Stack
- Pure HTML5, CSS3, vanilla JavaScript
- No frameworks, no package managers, no build tools
- Media-heavy with video demonstrations

### File Structure
```
/
├── index.html          # Single page application
├── css/style.css       # All styling with CSS custom properties
├── images/             # Media assets (videos, screenshots, icons)
└── js/                 # Currently unused
```

### Design System
- **Colors**: Primary orange (#FF932f) on black background
- **Spacing**: CSS custom properties (--space-xs through --space-4xl)
- **Typography**: Apple system fonts with semantic sizing
- **Components**: Reusable button styles, card layouts, grid systems

### Key CSS Patterns
- CSS custom properties for theming
- Mobile-first responsive design
- Section-based layout (Hero, Features, AudioUnits, Demo, Download, Footer)
- Gradient effects and smooth animations

### JavaScript Features
All JavaScript is inline in index.html:
- Video autoplay management with mute/unmute controls
- Demo video click-to-play functionality
- Progressive enhancement approach

## Important Guidelines

### Media Specifications
- Hero video: 1180 × 2556 aspect ratio
- AudioUnit interfaces: 16:10 aspect ratio
- All videos in MP4 format in `images/` directory

### Development Notes
- Preserve existing design system and color palette
- Maintain mobile-first responsive approach
- Keep all JavaScript inline in HTML
- No external dependencies or libraries