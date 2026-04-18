# Md. Azad - Professional Portfolio

A modern, interactive portfolio website for Nazrul Islam Azad, Assistant Manager at ACI Motors Limited, showcasing expertise in electrical engineering, solar energy systems, and sustainable energy solutions.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## 🌟 Features

- **Immersive 3D Hero Section** - Interactive solar panel visualization built with React Three Fiber
- **Smooth Scrolling** - Lenis-powered buttery smooth scroll experience
- **Scroll-Triggered Animations** - Framer Motion animations with spring physics
- **Fully Responsive** - Mobile-first design, optimized for all screen sizes
- **Glassmorphism UI** - Modern frosted glass aesthetic with backdrop blur
- **Dark Theme** - Eye-friendly dark theme optimized for technical content
- **Interactive Components** - Filterable projects, flip cards, modal details
- **SEO Optimized** - Meta tags, semantic HTML, proper heading hierarchy
- **Fast Performance** - Static generation, optimized images, minimal bundle size

## 🎨 Design System

### Colors

- **Background**: `#0b0f14` (Dark navy)
- **Surface**: `#131820` (Elevated dark)
- **Accent**: `#f5a623` (Amber - primary)
- **Accent 2**: `#00c9a7` (Teal - secondary)
- **Text**: `#e8edf5` (Off-white)

### Typography

- **Headings**: Syne (Weight 800, tight tracking)
- **Body**: DM Sans (Weight 300-500)
- **Labels**: DM Sans (Weight 600, uppercase, tracking)

### Component Patterns

- Glassmorphism cards with `backdrop-blur-md`
- Amber-to-teal gradient accents
- Spring physics animations (stiffness: 100, damping: 15)
- Hover states on all interactive elements
- Consistent spacing using CSS variables

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling

- **Tailwind CSS v4** - Utility-first CSS
- **CSS Variables** - Theme customization
- **Framer Motion** - Animations

### 3D Graphics

- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for R3F
- **Three.js** - 3D graphics library

### UI & UX

- **Lucide React** - Icon library
- **Lenis** - Smooth scrolling
- **Shadcn UI** - Component primitives (v4.3.0)

### Development

- **Turbopack** - Next.js bundler
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/azad-portfolio.git
cd azad-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deployment

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment Options

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.out
```

#### Docker

```bash
# Build image
docker build -t azad-portfolio .

# Run container
docker run -p 3000:3000 azad-portfolio
```

## 📁 Project Structure

```
azad-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & providers
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles & CSS variables
│
├── components/
│   ├── 3d/
│   │   └── HeroScene.tsx   # 3D solar panel visualization
│   │
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation with smooth scroll
│   │   └── Footer.tsx      # Footer with links & social
│   │
│   ├── providers/
│   │   └── LenisProvider.tsx # Smooth scroll provider
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with 3D background
│   │   ├── StatsStrip.tsx  # Statistics strip
│   │   ├── About.tsx       # About section with skills
│   │   ├── Skills.tsx      # Skills grid with filters
│   │   ├── Projects.tsx    # Projects with modal
│   │   ├── Experience.tsx  # Timeline experience
│   │   ├── Certifications.tsx # Flip cards
│   │   └── Contact.tsx     # Contact form
│   │
│   └── ui/                 # Shadcn UI components
│
├── data/
│   └── portfolio.ts        # Portfolio content data
│
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   └── utils.ts           # Utility functions (cn helper)
│
├── public/                # Static assets
├── CLAUDE.md             # Project instructions for Claude Code
└── package.json          # Dependencies & scripts
```

## 🎯 Key Components

### Hero Section

- Full-viewport 3D solar panel visualization
- Interactive camera controls (OrbitControls)
- Animated photon particles
- Gradient overlays for text readability
- Scroll indicator

### Projects Section

- Filterable project cards (All, Commercial, Residential, Industrial)
- Modal with detailed project information
- Technology tags and project images
- Hover effects with smooth transitions

### Experience Section

- Vertical timeline with alternating cards
- Slide animations from left/right
- Company info, duration, achievements
- Responsive single-column on mobile

### Certifications Section

- 3D flip cards with front/back faces
- Click-to-flip interaction
- Credential details and validity status
- Professional badge styling

### Contact Section

- Contact form with validation
- Info cards (email, phone, location)
- Social media links
- Availability indicator

## 🎨 Customization

### Update Content

Edit `/data/portfolio.ts` to update:

- Personal information
- Skills and expertise
- Projects
- Work experience
- Education
- Certifications
- Contact details

### Modify Colors

Update CSS variables in `/app/globals.css`:

```css
:root {
  --accent: #f5a623; /* Primary accent color */
  --accent2: #00c9a7; /* Secondary accent color */
  --bg: #0b0f14; /* Background color */
  --surface: #131820; /* Card background */
  --text: #e8edf5; /* Primary text */
  --muted: #7a8a9e; /* Secondary text */
}
```

### Modify Animations

Edit `/lib/animations.ts` to adjust:

- Spring physics (stiffness, damping)
- Stagger timing
- Animation variants
- Transition durations

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 🌐 SEO

The portfolio includes:

- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for images
- Descriptive page titles

## 🚧 Performance

- Static page generation for fast loading
- Optimized images with Next/Image
- Minimal JavaScript bundle
- Lazy loading for images
- Code splitting by route

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Md. Azad**

- Website: [https://nazrulislamazad.vercel.app](https://nazrulislamazad.vercel.app)
- Email: azad@example.com
- LinkedIn: [Your Profile]
- GitHub: [Your Profile]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
