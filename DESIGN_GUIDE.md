# Genesis - Visual Design Guide 🎨

## Color Scheme

### Primary Colors
```
Indigo:     #6366f1 (Primary)
Dark Indigo: #4f46e5
Light Indigo: #818cf8
```

### Secondary Colors
```
Pink:       #ec4899 (Secondary)
Cyan:       #06b6d4 (Accent)
```

### Background Colors
```
Darkest:    #020617
Very Dark:  #0f172a
Dark:       #1a1f35
Card:       #1e293b
Darker Card: #334155
```

### Text Colors
```
Primary:    #f1f5f9 (Main text)
Secondary:  #cbd5e1 (Muted text)
```

---

## Typography

### Font Family
```
Font Stack: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Font Sizes
```
Hero Title:     60px (Desktop) / 36px (Mobile)
Section Title:  48px (Desktop) / 36px (Mobile)
Card Title:     24px / 22px
Subtitle:       18px / 16px
Body:           16px / 15px
Small:          14px / 12px
Caption:        12px / 11px
```

### Font Weights
```
Regular:        400
Medium:         500
Semibold:       600
Bold:           700
Extrabold:      800
```

---

## Spacing System

### Base Unit: 4px

```
xs:     4px
sm:     8px
md:    12px
lg:    16px
xl:    20px
2xl:   24px
3xl:   30px
4xl:   40px
5xl:   60px
6xl:   80px
7xl:  100px
```

### Padding Examples
```
Card Padding:   40px (Desktop) / 32px (Tablet) / 24px (Mobile)
Section Padding: 100px (Desktop) / 60px (Tablet) / 40px (Mobile)
Container Padding: 20px (all devices)
```

---

## Border Radius

```
Small:    6px (inputs, small buttons)
Medium:   8px (buttons, cards)
Large:   12px (feature cards)
XL:      16px (large sections)
Full:    50% (circular elements)
```

---

## Shadows & Glows

### Box Shadows
```css
/* Card Shadow */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(99, 102, 241, 0.1);

/* Hover Shadow */
box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4),
            0 0 60px rgba(99, 102, 241, 0.2);

/* Glow Shadow */
box-shadow: 0 0 20px rgba(99, 102, 241, 0.4),
            0 0 40px rgba(99, 102, 241, 0.2);
```

### Text Shadows
```css
/* Subtle Glow */
text-shadow: 0 0 20px rgba(99, 102, 241, 0.5),
             0 0 40px rgba(236, 72, 153, 0.3);
```

### Gradient Overlays
```css
/* Background Glow */
background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);

/* Accent Glow */
background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
```

---

## Animations & Transitions

### Timing Functions
```css
ease-out:    cubic-bezier(0, 0, 0.2, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-in:     cubic-bezier(0.4, 0, 1, 1)
linear:      linear
```

### Duration Standards
```
Quick:       0.2s - 0.3s (hover states)
Standard:    0.3s - 0.5s (component transitions)
Slow:        0.6s - 0.8s (page transitions)
Very Slow:   1s - 3s (looping animations)
Crawl:       6s+ (background animations)
```

### Key Animations
```
@keyframes float
- Moves element up and down (6s loop)
- Used for floating cards and icons

@keyframes glow-pulse
- Pulsing glow effect (1s loop)
- Used for button glow states

@keyframes shimmer
- Light sweep animation (8s loop)
- Used for background effects

@keyframes aurora
- Aurora-like color shift (15s loop)
- Used for gradient backgrounds

@keyframes gradient-shift
- Gradient color animation (3s loop)
- Used for gradient text
```

---

## Component Styling

### Header
```
Height:              80px
Background:          Linear gradient with blur
Border Bottom:       2px solid rgba(99, 102, 241, 0.2)
Padding:             20px
Glow Effect:         Bottom gradient line
Mobile Menu:         Dropdown from top
```

### Hero Section
```
Min Height:          calc(100vh - 80px)
Grid Layout:         2 columns (desktop) / 1 column (mobile)
Floating Cards:      120px (desktop) / 100px (tablet) / 80px (mobile)
Orb Background:      300px circle with blur
Text Shadow:         Subtle indigo glow
```

### Chat Interface
```
Height:              100vh (or auto on mobile)
Message Bubbles:     Max-width 70% (desktop) / 90% (mobile)
AI Bubble:           Gradient border with glow
User Bubble:         Solid gradient background
Input Area:          Sticky bottom with blur
Typing Indicator:    3 animated dots
```

### Feature Cards
```
Grid:                auto-fit minmax(320px, 1fr)
Gap:                 30px (desktop) / 24px (tablet) / 20px (mobile)
Padding:             40px (desktop) / 32px (tablet) / 24px (mobile)
Border:              2px solid rgba(99, 102, 241, 0.2)
Hover Effect:        Scale + Shadow + Glow
Bottom Border:       Gradient reveal on hover
```

### Pricing Cards
```
Grid:                Same as features
Scale:               1.05 for highlighted card
Badge:               Absolute top-right with gradient
Most Popular:        Brighter glow and larger scale
Features List:       Bordered items with checkmarks
Toggle Button:       Pill-shaped with gradient on active
```

### Footer
```
Background:          Gradient from transparent to dark
Padding:             80px top / 20px bottom
Border Top:          2px solid with glow
Newsletter Form:     Flex with input + button
Links Grid:          4 columns responsive
Social Icons:        40px circles with hover effects
```

---

## Responsive Grid System

### Desktop (1400px container)
```
- 2+ columns for grid layouts
- Full spacing (20px padding)
- Hover states active
- All effects visible
```

### Tablet (1024px container)
```
- 2 columns → 1 column transition
- Adjusted padding
- Hover states simplified
- Touch-friendly spacing
```

### Mobile (768px and below)
```
- Single column layouts
- Reduced padding (16px)
- Simplified animations
- Larger touch targets (44px minimum)
```

---

## Interactive States

### Button States
```
Default:   Gradient background, glow shadow
Hover:     Brighten shadow, slight lift (translateY -2px)
Active:    Scale down, pressed effect
Disabled:  Opacity 0.5, no cursor
Focus:     Blue outline (for keyboard navigation)
```

### Input States
```
Default:   Rgba background, soft border
Focus:     Bright border, inner glow, brighter background
Hover:     Border brightens slightly
Disabled:  Opacity reduced, no interaction
Error:     Red border and glow
Success:   Green border and glow
```

### Link States
```
Default:   Secondary color with underline effect
Hover:     Primary color, full underline
Active:    Primary color, bold underline
Visited:   Secondary color (disabled)
Focus:     Blue outline for accessibility
```

---

## Accessibility

### Color Contrast
```
Text on Background:     7:1 (AAA standard)
Borders on Background:  3:1 minimum
Interactive Elements:   3:1 minimum
Focus Indicators:       High contrast outline
```

### Touch Targets
```
Minimum Size:    44px × 44px
Spacing Between:  8px minimum
Button Padding:   12px vertical, 24px horizontal
```

### Focus States
```
All interactive elements must have visible focus states
Focus outline:     2-3px solid color
Outline offset:    2px from element
High contrast:     Accessible to colorblind users
```

---

## Dark Mode Details

### Contrast Levels
```
High Contrast:     #f1f5f9 on #020617 (87% contrast)
Standard Contrast: #cbd5e1 on #1e293b (60% contrast)
Muted Text:        #94a3b8 on #1e293b (45% contrast)
```

### Elevation Levels
```
Level 0: #020617 (Darkest)
Level 1: #0f172a (Very Dark)
Level 2: #1a1f35 (Dark)
Level 3: #1e293b (Card)
Level 4: #334155 (Darker Card)
```

---

## Visual Effects Showcase

### Glow Effects
- 💫 Soft radial glows on hover
- ✨ Text shadow glows
- 🌟 Box shadow glows
- ⚡ Border glows on focus

### Gradient Effects
- 🌈 Directional gradients
- 🔄 Animated gradient shifts
- 📊 Radial gradients
- 🎨 Multi-stop gradients

### Motion Effects
- 🎬 Smooth page transitions
- ⬆️ Float animations
- 🔄 Spin and rotate effects
- 💫 Scale and fade effects
- 🌊 Wave animations

### Blur Effects
- 🔳 Backdrop blur (10px)
- 📸 Component blur
- 🌫️ Background blur
- ✨ Selective blur areas

---

## Brand Guidelines

### Logo
- Gradient background: Indigo to Pink
- Icon: White "G" letter
- Text: Gradient text "Genesis"
- Glow: 20px box-shadow radius

### Tagline
- "The next generation AI platform"
- "Designed for intelligence, speed, and elegance"

### Voice & Tone
- Professional yet friendly
- Modern and innovative
- Clear and accessible
- Inspiring and forward-thinking

---

## Performance Considerations

### GPU-Friendly
- Use `transform` and `opacity` for animations
- Avoid animating `width` and `height`
- Use `will-change` sparingly
- Prefer CSS over JavaScript animations

### Rendering
- Minimize repaints with `contain: layout`
- Use `pointer-events: none` for static overlays
- Batch DOM updates
- Lazy load images

### File Size
- CSS: 26.78 kB (5.05 kB gzipped)
- Keep animations in CSS when possible
- Compress images
- Use web-safe fonts

---

**This design system ensures consistency and beautiful visuals throughout Genesis!** 🎨✨
