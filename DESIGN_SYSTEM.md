# 🎨 Design System & Style Guide

## Color Palette

### Primary Gradient
```
Blue → Purple → Pink
#3b82f6 → #a855f7 → #ec4899
```

### Backgrounds
- **Primary**: `#0a0a0a` (Zinc-950)
- **Surface**: `#09090b` (Zinc-950 darker)
- **Hover**: `#18181b` (Zinc-900)
- **Subtle**: `#27272a` (Zinc-800)

### Text
- **Primary**: `#e8e8e8` (Zinc-100)
- **Secondary**: `#a1a1aa` (Zinc-400)
- **Muted**: `#71717a` (Zinc-500)
- **Disabled**: `#52525b` (Zinc-600)

### Accent Colors
- **Blue**: `#3b82f6`
- **Purple**: `#a855f7`
- **Pink**: `#ec4899`
- **Green**: `#10b981`

---

## Typography

### Display Font
**Name**: Cormorant Garamond
**Usage**: Section headings, titles
**Styles**: Italic for emphasis
**Sizes**: 
- Small: `1.5rem` (24px)
- Medium: `2.5rem` (40px)
- Large: `3.5rem` (56px)
- XL: `clamp(3.5rem, 10vw, 7.5rem)`

### Body Font
**Name**: DM Sans
**Usage**: Paragraph text, labels, metadata
**Sizes**:
- Small: `0.875rem` (14px)
- Base: `1rem` (16px)
- Large: `1.125rem` (18px)

### Font Weights
- Light: 300 (headings)
- Regular: 400 (body)
- Medium: 500 (labels)
- Bold: 600-700 (emphasis)

---

## Spacing System

### 8px Grid
All spacing uses multiples of 8px:
- `px-2` = 8px
- `px-4` = 16px
- `px-6` = 24px
- `px-8` = 32px
- `px-12` = 48px
- `px-16` = 64px

### Component Spacing
- **Card Padding**: 24px (p-6)
- **Section Padding**: 32px (px-8)
- **Horizontal Gap**: 24px (gap-6)
- **Vertical Gap**: 40px (gap-10)

### Section Heights
- **Navbar**: 64px (h-16)
- **Hero**: 500px+ (responsive)
- **Card**: Min 200px (min-h-[200px])

---

## Borders & Shadows

### Border Radius
- Small: `rounded-lg` = 8px
- Medium: `rounded-xl` = 12px
- Large: `rounded-2xl` = 16px
- Full: `rounded-full` = 9999px

### Border Styles
- **Primary**: `border border-zinc-800`
- **Hover**: `border-blue-600/50`
- **Active**: `border-blue-500`

### Shadows
```css
/* Light hover */
shadow-lg shadow-blue-500/10

/* Medium hover */
shadow-lg shadow-blue-500/20

/* Strong hover */
shadow-lg shadow-blue-500/50

/* Glow effect */
shadow-lg shadow-purple-500/30
```

---

## Button Styles

### Primary Button
```tsx
className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
```

### Secondary Button
```tsx
className="px-8 py-3 rounded-lg border border-zinc-700 text-white font-medium hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300"
```

### Icon Button
```tsx
className="w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300"
```

---

## Card Styles

### Base Card
```tsx
className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
```

### Experience Card
```tsx
className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-600/50 group-hover:from-zinc-900 group-hover:to-zinc-950 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
```

---

## Hover Effects

### Smooth Transition
```css
transition-all duration-300
```

### Scale Transform
```css
group-hover:scale-110
```

### Translate Transform
```css
hover:-translate-y-1
```

### Color Change
```css
hover:text-blue-400
hover:border-blue-500
```

### Gradient Background
```css
hover:bg-blue-500/10
```

---

## Animations

### Fade Up
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fadeUp 0.8s ease-out forwards;
```

### Stagger Delays
```tsx
delay-[0.1s]  // 0.1s
delay-[0.25s] // 0.25s
delay-[0.4s]  // 0.4s
delay-[0.55s] // 0.55s
```

### Framer Motion
```tsx
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ delay: i * 0.1 }}
```

---

## Responsive Design

### Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Mobile First
```tsx
// Base (mobile)
className="w-full"

// Tablet and up
className="w-full md:w-1/2"

// Desktop and up
className="w-full lg:w-1/3"
```

### Responsive Typography
```tsx
style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
```

---

## Gradient Utilities

### Text Gradient
```tsx
className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
```

### Background Gradient
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

### Directional Gradients
- `to-r` - Right
- `to-b` - Bottom
- `to-br` - Bottom Right
- `to-t` - Top
- `to-l` - Left

---

## Icon Usage

### Icon Sizes
```tsx
<FaGithub size={16} />  // Small (16px)
<FaGithub size={18} />  // Base (18px)
<FaGithub size={20} />  // Medium (20px)
<FaGithub size={24} />  // Large (24px)
```

### Icon Colors
- Inherit text color: `text-zinc-400`
- Match theme: `text-blue-400`
- On hover: `hover:text-white`

---

## Accessibility

### Focus States
```tsx
focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30
```

### Color Contrast
- Text on dark: AAA compliant
- Minimum ratio: 4.5:1

### Semantic HTML
- Use `<button>` for actions
- Use `<a>` for navigation
- Use `<nav>`, `<section>`, `<footer>` for structure

---

## Best Practices

### When to Use Gradients
✅ Section headings
✅ Primary buttons
✅ Accent borders
✅ Icon backgrounds
❌ Body text (readability)

### When to Use Animations
✅ Scroll-triggered appears
✅ Hover effects
✅ Page transitions
❌ Every element (performance)

### Spacing Rules
✅ Consistent 8px grid
✅ Larger gaps between sections
✅ Tighter gaps within components
❌ Random spacing values

---

## Performance Tips

### CSS
- Use Tailwind utilities
- Avoid `!important`
- Batch media queries

### Animations
- Use `will-change` sparingly
- Prefer `transform` over `top/left`
- Use GPU acceleration

### Images
- Use AVIF format
- Optimize before adding
- Use responsive sizing

---

## Customization Examples

### Change Primary Color
Replace all instances of:
```
from-blue-600 to-purple-600
```
With:
```
from-teal-600 to-cyan-600
```

### Change Background Shade
Replace all instances of:
```
bg-zinc-950
```
With:
```
bg-slate-950
```

### Adjust Animation Speed
Change all instances of:
```
duration-300
```
To:
```
duration-500
```

---

**Follow this guide for consistency and professional appearance.** ✨
