# Spylt Clone

A modern, interactive product showcase website for a beverage brand, built with React and featuring smooth scrolling animations, video integration, and responsive design.

## Overview

This project is a frontend clone of the Spylt brand website, showcasing a vibrant and engaging user interface. It demonstrates advanced web animation techniques using GSAP (GreenSock Animation Platform) and implements a smooth scrolling experience across multiple sections.

## Features

- ✨ **Smooth Scrolling** - Custom scroll smoothing with GSAP ScrollSmoother plugin
- 🎬 **Video Integration** - Embedded video backgrounds and media sections
- 🎨 **Modern Design** - Clean, responsive UI built with Tailwind CSS
- 📱 **Responsive Layout** - Mobile-first design using react-responsive
- ⚡ **Performance Optimized** - Built with Vite for fast development and production builds
- 🎭 **Advanced Animations** - GSAP-powered scroll triggers and transitions
- 🎯 **Pre-loader** - Custom loading animation before content renders

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animation Library**: GSAP (GreenSock Animation Platform)
- **Responsive Design**: react-responsive
- **Code Quality**: ESLint
- **Language**: JavaScript/JSX with TypeScript support

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ClipPathTitle.jsx
│   ├── FlavorSlider.jsx
│   ├── FlavorTitle.jsx
│   ├── NavBar.jsx
│   ├── PreLoader.tsx
│   └── VideoPinSection.jsx
├── sections/            # Page sections
│   ├── BenefitSection.jsx
│   ├── FlavorSection.jsx
│   ├── FooterSection.jsx
│   ├── HeroSection.jsx
│   ├── MessageSection.jsx
│   ├── NutritionSection.jsx
│   └── TestimonialSection.jsx
├── constants/           # Application constants
├── utils/               # Utility functions
├── App.jsx              # Main app component
├── App.css              # Global styles
├── main.jsx             # App entry point
└── index.css            # Base styles
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/spylt-clone.git
cd spylt-clone
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check for code issues:

```bash
npm run lint
```

## Key Components

- **NavBar** - Navigation component with smooth scrolling links
- **HeroSection** - Eye-catching landing section with video integration
- **FlavorSection** - Interactive flavor showcase with slider
- **NutritionSection** - Product nutrition information display
- **BenefitSection** - Health benefits showcase
- **TestimonialSection** - Customer testimonials
- **FooterSection** - Footer with links and contact info
- **PreLoader** - Loading animation that displays before content

## Deployment

This project is optimized for deployment on Vercel. To deploy:

```bash
vercel --prod
```

Or use Vercel's GitHub integration for automatic deployments on push.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is provided as-is for educational and demonstration purposes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## Author

Created as a showcase project demonstrating modern web development practices with React, GSAP animations, and responsive design.
