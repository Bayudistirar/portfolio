# Personal Portfolio

A minimalist portfolio website built with mathematical precision using the golden ratio (φ = 1.618) design system. Features a clean, dark aesthetic with amber accent colors and smooth scroll animations.

## ✨ Features

- **Golden Ratio Design System** - Spacing, typography, and layout based on φ (1.618)
- **Responsive Layout** - Adapts seamlessly from mobile to desktop
- **Scroll Animations** - Smooth fade-in effects as content enters viewport
- **Cursor Spotlight** - Interactive glow effect following mouse movement
- **Dark Theme** - Easy on the eyes with subtle grain texture
- **Accessible Navigation** - Smooth scrolling with active section tracking

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Fonts:** JetBrains Mono, Playfair Display
- **Deployment:** Vercel

## 📁 Project Structure
```
portfolio/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles & grain texture
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Main portfolio page
├── components/         # React components
│   ├── Sidebar.tsx     # Fixed sidebar navigation
│   ├── MobileHeader.tsx # Responsive mobile header
│   ├── Navigation.tsx   # Scroll-tracking nav
│   ├── ExperienceItem.tsx
│   ├── ProjectCard.tsx
│   ├── SocialLinks.tsx
│   └── CursorSpotlight.tsx
├── lib/
│   ├── constants.ts    # Portfolio data & config
│   └── useScrollAnimation.ts # Intersection Observer hook
└── tailwind.config.js  # Golden ratio configuration
```

## 🎨 Design Philosophy

Inspired by [Brittany Chiang](https://brittanychiang.com)'s elegant minimalism but forged with a distinct amber aesthetic. Every spacing value follows the golden ratio for visual harmony:

- `0.382rem`, `0.618rem`, `1rem`, `1.618rem`, `2.618rem`, `4.236rem`, `6.854rem`
- Line height: 1.618 (φ)
- Layout split: 38.2% sidebar / 61.8% content

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 🌐 Live Demo

[View Live Portfolio](https://bayudistira.vercel.app/) *(update this after deployment)*

---

**Built with precision by Bayu Yudistira Ramadhan**  
Denpasar, Bali · 2024
