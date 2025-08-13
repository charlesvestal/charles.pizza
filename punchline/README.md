# Punchline Marketing Website

A modern, Linear-inspired marketing website for the Punchline iOS drum machine app.

## Design Features

- **Color Scheme**: Orange (#FF6B35) and white on black background, matching the app's aesthetic
- **Typography**: System fonts with clean, modern styling
- **Layout**: Linear-inspired grid system with generous spacing
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Lightweight CSS with smooth animations

## Sections

1. **Hero**: Main value proposition with app mockup
2. **Features**: Key app features with icons
3. **AudioUnits**: Detailed coverage of both Player and Effects AudioUnits
4. **Demo**: Video placeholders for app demonstrations
5. **Download**: Call-to-action with app store integration
6. **Footer**: Navigation and company information

## Required Media Files

Place the following media files in the `images/` folder:

### Hero Video (REQUIRED)
- `hero-demo.mp4` - Main app demo video (1180 × 2556 aspect ratio, optimized for web)
- `hero-demo.webm` - Alternative format for better browser compatibility
- `video-poster.png` - Fallback poster image for video (1180 × 2556 aspect ratio)

### Images
- `player-au-interface.png` - Player AudioUnit interface (16:10 aspect ratio)
- `effects-au-interface.png` - Effects AudioUnit interface (16:10 aspect ratio)
- `demo-sequencing.png` - Step sequencing demo thumbnail
- `demo-effects.png` - Punch-in effects demo thumbnail
- `demo-automation.png` - Parameter automation demo thumbnail
- `app-icon-large.png` - App icon (96x96 or larger)

The hero video should demonstrate key app features including step sequencing, punch-in effects, and parameter automation. It will autoplay muted with an unmute button for sound.

## Key Features Highlighted

### Main App Features
- 16-step sequencer with pattern chaining
- 16 professional drum sounds
- Real-time automation recording
- 16 punch-in effects
- Custom sample import
- Pattern chaining

### Player AudioUnit (Instrument)
- All the same sequencing and effects as the Punchline app
- Full Midi control with note and parameter#3)
- MIDI CC parameter control
- Pattern sequencing in DAW
- Visual feedback
- Tempo sync

### Effects AudioUnit (Effect)
- Step-based gating
- 16 professional effects (bit crush, distortion, reverb, delay, filters, etc.)
- Automation recording and overdubbing
- Tempo-synced processing
- Real-time effect punching

## Development

The website uses vanilla HTML/CSS for maximum compatibility and performance. No build process required - simply serve the files from any web server.

## Color Palette

- Primary Orange: `#FF6B35`
- Secondary Orange: `#FF8C42`
- Accent Orange: `#FFB366`
- White: `#FFFFFF`
- Black: `#000000`
- Surface Black: `#161B22`
- Near Black: `#0D1117`
