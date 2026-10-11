# 🔧 Maintenance & Customization Guide

## Quick Updates

### Updating Personal Information

#### 1. Home Section Hero Text
**File**: `src/components/Home.tsx` (Lines 7-12)
```tsx
// Change the rotating role descriptions
const arr = [
  " a Software Engineer",
  " a Student",
  "a Leader",
  "Self-Driven",
  " a Builder"
];
```

#### 2. Social Media Links
**File**: `src/components/Home.tsx` (Lines 95-113)
```tsx
<a href="https://github.com/YOUR_GITHUB" ...>
<a href="https://linkedin.com/in/YOUR_LINKEDIN" ...>
<a href="mailto:YOUR_EMAIL@example.com" ...>
```

Also update in `src/components/Contact.tsx` and `src/components/Footer.tsx`

#### 3. Contact Information
**File**: `src/components/Contact.tsx`
- Email: Line 129
- Social links: Lines 160-185

#### 4. Footer Links
**File**: `src/components/Footer.tsx`
- Social links: Lines 40-68

---

## Adding Projects

**File**: `src/components/Projects.tsx`

Add to the `projects` array:
```tsx
{
  Name: "Your Project Name",
  img: yourImage,
  description: "Project description here",
  github: "https://github.com/...",
  live: "https://...",
  tags: ["Tech1", "Tech2", "Tech3"]
}
```

Don't forget to import the image:
```tsx
import yourImage from "../assets/your-image.png";
```

---

## Updating Experience

**File**: `src/components/Experience.tsx`

Modify the `experiences` array:
```tsx
{
  title: "Your Role",
  company: "Company Name",
  img: companyLogo,
  location: "Location",
  date: "Start - End",
  description: "Your description here",
  tags: ["Skill1", "Skill2"]
}
```

---

## Updating Education

**File**: `src/components/Education.tsx`

Modify the `education` array:
```tsx
{
  school: "School Name",
  degree: "Degree",
  img: schoolLogo,
  location: "Location",
  date: "Start - End",
  description: "Description",
  achievements: ["Achievement1", "Achievement2"]
}
```

---

## Customizing Tech Stack

**File**: `src/components/TechStack.tsx`

Modify the `technologies` array:
```tsx
{
  category: "Category Name",
  icon: IconComponent,
  color: "from-blue-500 to-cyan-500",
  skills: ["Skill1", "Skill2", "Skill3", "Skill4"]
}
```

---

## Updating Stats

**File**: `src/components/Stats.tsx`

Modify the `stats` array:
```tsx
{
  number: "X+",
  label: "Your Metric",
  icon: "🎯"
}
```

---

## Color Customization

### Primary Gradient
**File**: `src/index.css` and component files

Search and replace gradient values:
```
from-blue-500 to-purple-500
from-purple-600 to-pink-600
```

### Background Colors
Zinc-950 (`#09090b`) is the primary background.
Change in `src/index.css`:
```css
--bg: #0a0a0a;
```

---

## Font Customization

**File**: `src/index.css`

Currently using:
- Display: Cormorant Garamond (serif, italic)
- Body: DM Sans (sans-serif)

Change the `@import` URLs to use different fonts from Google Fonts.

---

## Adding New Sections

1. Create new component file in `src/components/`
2. Import in `src/App.tsx`
3. Add to the component tree in the correct order

Example:
```tsx
import YourNewComponent from "./components/YourNewComponent";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <YourNewComponent />
      {/* ... rest of components ... */}
    </>
  )
}
```

---

## Animation Tweaks

### Scroll Animation Duration
**File**: Component files using Framer Motion

```tsx
transition={{ duration: 0.5 }}  // Change 0.5 to your value
```

### Fade-up Animation
**File**: `src/index.css`

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }  /* Adjust 30px */
  to   { opacity: 1; transform: translateY(0); }
}
```

### Stagger Delay
```tsx
staggerChildren: 0.1,  // Adjust delay between items
delayChildren: 0.2,    // Adjust initial delay
```

---

## Performance Optimization

### Image Optimization
- Use AVIF format when possible (already used for MHW.avif)
- Compress images with:
  - TinyPNG
  - ImageOptim
  - Squoosh

### Lazy Loading
Already implemented with Framer Motion's `whileInView`.

### Code Splitting
Vite handles this automatically.

---

## Responsive Design Breakpoints

Used in Tailwind:
- `sm:` - 640px (tablet)
- `md:` - 768px (larger tablet)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (large desktop)

---

## Testing Responsive Design

Use browser DevTools:
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test different screen sizes

---

## Adding Dark/Light Mode Toggle (Optional)

```tsx
import { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <div className={isDark ? 'dark' : 'light'}>
      {/* Components */}
    </div>
  );
}
```

---

## Environment Variables

**File**: `.env`

```env
VITE_API_URL=http://localhost:3000
VITE_SITE_NAME=Aboubakary's Portfolio
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Deployment Updates

### GitHub Pages
After pushing changes:
```bash
npm run build
npm run deploy
```

### Vercel
1. Push to GitHub
2. Vercel auto-deploys

### Netlify
1. Push to GitHub
2. Netlify auto-deploys

---

## Troubleshooting

### Animations Not Working
- Check Framer Motion is imported
- Verify `whileInView` config
- Check viewport settings

### Styling Issues
- Clear Tailwind cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check class names are correct

### Hover Effects Not Showing
- Ensure `group` and `group-hover:` are used together
- Check Tailwind config includes hover variants

---

## Common Customizations Checklist

- [ ] Updated social media links
- [ ] Updated email address
- [ ] Updated project descriptions
- [ ] Updated experience details
- [ ] Updated education info
- [ ] Changed profile image
- [ ] Updated tech stack
- [ ] Customized colors (if desired)
- [ ] Updated contact form
- [ ] Tested on mobile devices
- [ ] Deployed to live domain

---

## Need More Help?

Refer to:
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)

---

**Keep your portfolio fresh and updated!** 🎯
