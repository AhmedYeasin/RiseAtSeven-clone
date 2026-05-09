# Rise at Seven Clone

A modern, interactive Home page is given task by a client. This project showcases advanced web development techniques with smooth animations, responsive design, and cutting-edge technologies. (Only for Interview and Learning pupose)

## 🚀 Technologies Used

### Core Technologies
- **Language**: JavaScript (ES6+)
- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4, DaisyUI 5

### Libraries & Dependencies
- **Animations**:
  - GSAP 3 (GreenSock Animation Platform) - Advanced scroll-triggered animations
  - Framer Motion 12 - React animation library for component animations
  - React Fast Marquee 1 - Horizontal scrolling marquee effects
- **Smooth Scrolling**: Lenis 1 - Custom smooth scrolling implementation
- **Icons**: Lucide React 1 - Modern icon library
- **Utilities**: clsx, tailwind-merge - Class name management

### Development Tools
- **Linting**: ESLint 10 with React hooks and refresh plugins

- **Deployment**: Vercel

## 🎨 Animations & Interactions

### GSAP Animations
- **Scroll-Triggered Animations**: Using ScrollTrigger plugin for pinning, scrubbing, and timeline-based animations
- **Card Stacking**: Sequential card reveal with opacity and transform effects in the Manifesto section
- **Horizontal Scrolling**: Infinite horizontal scroll with text splitting using SplitText plugin in ServicesTicker
- **Marquee Effects**: Custom marquee animations with GSAP for smooth, performant scrolling

### Framer Motion
- **Hero Section**: Circle reveal mask animation, parallax background effects using scroll transforms
- **Component Transitions**: Smooth entrance animations for text and elements

### CSS Animations
- **Blob Animations**: Custom CSS keyframe animations for background blob effects
- **Responsive Scaling**: Clamp-based responsive typography and sizing

### React Fast Marquee
- **Client Logos**: Horizontal marquee display of client logos with pause-on-hover disabled
- **Gradient Fading**: Smooth gradient edges for seamless looping

### Lenis Smooth Scrolling
- **Enhanced UX**: Custom easing functions for buttery smooth vertical scrolling
- **Performance Optimized**: Hardware-accelerated scrolling with gesture support

## 📁 Project Structure

```
src/
├── components/
│   ├── AnnouncementBar.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ClientsMarquee.jsx
│   ├── About.jsx
│   ├── FeaturedWork.jsx
│   ├── OurServices.jsx
│   ├── Manifesto.jsx
│   ├── ServicesTicker.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/clone-riseatseven.git
   cd clone-riseatseven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

**Live Demo**: [https://clone-riseatseven.vercel.app/]
or
https://capable-liger-2415ad.netlify.app/
(https://clone-riseatseven-4kj6g56bu-ahmed-yeasins-projects.vercel.app)

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with clamp-based responsive units
- **Performance Optimized**: Fast loading with Vite's optimized build
- **Accessibility**: Semantic HTML and ARIA-compliant components
- **Modern UI**: Clean, professional design matching the original Rise at Seven brand
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## 📄 License

This project is for educational purposes as a clone of the Rise at Seven website. Please respect intellectual property rights.

## AI Integration
Note: I used Gemini and Claude AI for explore animations.
