# Ali Shehab - Portfolio

A premium, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Premium Design** - Clean, minimal, high-end look with glassmorphism effects
- ✨ **Smooth Animations** - Professional animations using Framer Motion
- 🎯 **3D Effects** - Subtle 3D perspective on cards
- 🧲 **Magnetic Buttons** - Interactive magnetic cursor effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

## Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── AnimatedSection.tsx
│   ├── AnimatedText.tsx
│   ├── Card3D.tsx
│   ├── MagneticButton.tsx
│   └── Navbar.tsx
├── hooks/           # Custom React hooks
│   ├── useMagneticButton.ts
│   ├── useScrollAnimation.ts
│   └── useSmoothScroll.ts
├── sections/        # Page sections
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: {
    // Your color values
  },
}
```

### Content

Update the content in each section file:
- `src/sections/Hero.tsx` - Hero section content
- `src/sections/About.tsx` - About section content
- `src/sections/Skills.tsx` - Skills and technologies
- `src/sections/Projects.tsx` - Project portfolio
- `src/sections/Experience.tsx` - Work experience and education
- `src/sections/Contact.tsx` - Contact information

## Animation Features

- **Page Load Animations** - Fade and slide animations on initial load
- **Scroll Animations** - Elements animate into view on scroll
- **Hover Effects** - Interactive hover states on buttons and cards
- **3D Card Effects** - Subtle 3D perspective on hover
- **Magnetic Buttons** - Buttons that follow cursor movement
- **Smooth Scrolling** - Smooth scroll behavior between sections

## License

MIT

