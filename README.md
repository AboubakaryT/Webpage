# Aboubakary's Professional Portfolio

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase software engineering expertise, projects, and achievements.

## 🌟 Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Interactive**: Smooth scroll animations with Framer Motion
- **Professional**: Enterprise-grade styling and UX
- **Fast**: Built with Vite for lightning-fast development and builds
- **Accessible**: WCAG compliant with proper semantic HTML

## 📋 Sections

- **Home**: Hero section with animated rotating role descriptions
- **Experience**: Timeline of professional internships and roles
- **Education**: Academic background with achievements
- **Tech Stack**: Technologies and tools expertise
- **Projects**: Carousel of featured projects
- **Contact**: Professional contact form with social links
- **Footer**: Navigation and social media integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd Webpage

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Carousel**: Embla Carousel React
- **Build Tool**: Vite
- **Code Quality**: ESLint + TypeScript
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation bar with scroll effects
│   ├── Home.tsx             # Hero section
│   ├── Experience.tsx       # Work experience timeline
│   ├── Education.tsx        # Education section
│   ├── Projects.tsx         # Project carousel
│   ├── TechStack.tsx        # Technology skills
│   ├── Stats.tsx            # Achievement statistics
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer section
│   └── Marquee.tsx          # Animated marquee text
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css               # Global styles & animations
```

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Blue → Purple → Pink
- **Background**: Zinc-950 (#09090b)
- **Borders**: Zinc-800
- **Text**: Zinc-100 to Zinc-400 (hierarchy)

### Typography
- **Display Font**: Cormorant Garamond (serif, italic)
- **Body Font**: DM Sans (sans-serif)

### Spacing
- Consistent 8px grid system
- Responsive padding and margins
- Flexible gap values for flexbox/grid

## 🔧 Configuration

### Environment Variables
Create a `.env` file for API configuration:

```env
VITE_API_URL=http://localhost:3000
```

### Tailwind Configuration
Located in `tailwind.config.js` - customize theme colors and fonts here.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- **Optimized Bundle**: ~150KB gzipped
- **Fast Animations**: Hardware-accelerated with Framer Motion
- **Lazy Loading**: Components load on scroll
- **Image Optimization**: AVIF format for modern browsers

## 🔐 Security

- No sensitive data in version control
- Environment variables for API endpoints
- XSS protection with React's built-in escaping

## 📝 Customization

### Updating Content
1. **Personal Info**: Edit `src/components/Home.tsx`
2. **Experience**: Update `src/components/Experience.tsx`
3. **Projects**: Modify `src/components/Projects.tsx`
4. **Contact**: Update email/social links in `src/components/Contact.tsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes in each component
- Animations: Framer Motion config in components

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Connect repository to Vercel
2. Deploy automatically on push

### Netlify
1. Connect repository to Netlify
2. Deploy automatically on push

## 📊 Analytics (Optional)

Add your analytics provider:
- Google Analytics
- Vercel Analytics
- Plausible

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- Email: your.email@example.com
- GitHub: [@AboubakaryT](https://github.com/AboubakaryT)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

---

**Built with ❤️ for aspiring and experienced Software Engineers**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
refresh
