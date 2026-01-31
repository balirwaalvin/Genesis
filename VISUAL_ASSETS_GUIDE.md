# 🎨 Genesis - Visual Assets & Emoji Reference Guide

## 🎪 Emoji Reference for Components

### Navigation/Header
- 🏠 Home
- 💬 Chat
- ✨ Features
- 💰 Pricing
- 📧 Newsletter
- 🔗 Links
- 🤖 AI Robot
- 👤 User

### Features
- 🧠 Smart AI
- ⚡ Lightning Fast
- 🔒 Secure
- 🌍 Multi-language
- 📊 Analytics
- 🔄 Always Learning
- 💡 Innovation
- 🚀 Performance

### Chat Elements
- 💭 Message
- 🤔 Thinking
- ✓ Done
- 📋 Copy
- 👍 Like
- 👎 Dislike
- 🎤 Voice
- 📎 Attach

### Status
- ✅ Complete
- ⏳ Loading
- 🚫 Error
- ⚠️ Warning
- ℹ️ Info
- 💫 Processing

---

## 🎨 Color Codes Quick Reference

### Primary Colors
```
Indigo:       #6366f1
Dark Indigo:  #4f46e5
Light Indigo: #818cf8
```

### Secondary Colors
```
Pink:   #ec4899
Cyan:   #06b6d4
```

### Backgrounds
```
Darkest:  #020617
Dark:     #0f172a
Darker:   #1a1f35
Card:     #1e293b
Lighter:  #334155
```

### Text
```
Primary:    #f1f5f9
Secondary:  #cbd5e1
Muted:      #94a3b8
```

### Usage Examples
```css
/* Button Background */
background: #6366f1;

/* Card Background */
background: #1e293b;

/* Text Color */
color: #f1f5f9;

/* Glow Effect */
box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
```

---

## 📐 Sizing Guide

### Font Sizes
```
Hero Title:    60px (desktop) → 36px (mobile)
Section Title: 48px (desktop) → 36px (mobile)
Card Title:    24px → 22px
Subtitle:      18px → 16px
Body:          16px → 15px
Small:         14px → 12px
Caption:       12px → 11px
```

### Component Sizes
```
Header Height:     80px
Button Padding:    12px 32px
Card Padding:      40px (desktop) → 24px (mobile)
Section Padding:   100px (desktop) → 40px (mobile)
Container Max:     1400px
```

### Border Radius
```
Small:    6px   (inputs, buttons)
Medium:   8px   (buttons, small cards)
Large:    12px  (feature cards)
XL:       16px  (sections)
Full:     50%   (circles)
```

---

## ✨ Animation Reference

### Duration Standards
```
Snappy:     0.2s - 0.3s
Standard:   0.3s - 0.5s
Smooth:     0.6s - 0.8s
Slow:       1s - 3s
Very Slow:  6s+ (backgrounds)
```

### Easing Functions
```
ease-out:    cubic-bezier(0, 0, 0.2, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-in:     cubic-bezier(0.4, 0, 1, 1)
linear:      linear
```

### Animation Types
```
Float:     Moving up/down smoothly
Pulse:     Glow intensity varying
Shimmer:   Light sweep effect
Aurora:    Color gradient shift
Rotate:    Spinning effect
Scale:     Size change
Fade:      Opacity change
Slide:     Position change
```

---

## 🖼️ Component Visual Hierarchy

### Header
```
Logo [GRADIENT] | Nav Links | Get Started Button
        ↓              ↓              ↓
     GLOW         UNDERLINE       GLOW
```

### Hero Section
```
┌─────────────────────────────────┐
│  GRADIENT TITLE                 │
│  Subtitle with description      │
│  [Button] [Button]              │
│  Stats: 99.9% | 24/7 | 100k+   │
│                      [Cards]    │
│                   [Floating]    │
│                   [Animated]    │
└─────────────────────────────────┘
```

### Chat Interface
```
╔════════════════════════════════════╗
║ Genesis AI Chat                    ║
║ [Advanced ▼]                       ║
╠════════════════════════════════════╣
║ 🤖 AI Message [👍] [👎] [📋]     ║
║ 👤 User Message                    ║
║ 🤖 AI: "..."                       ║
║ 👤 [New Message...]               ║
╚════════════════════════════════════╝
   Input: [Type here...] [📎] [🎤] [Send]
```

### Feature Cards
```
┌──────────────────────┐
│ 🧠 Smart AI         │
│ Powered by neural   │
│ networks            │ ← GLOW on hover
│ ▔▔▔▔▔▔▔▔▔▔         │ ← Gradient bottom
└──────────────────────┘
```

### Pricing Card (Highlighted)
```
┌──────────────────────┐
│ ⭐ Most Popular     │ ← Badge
│ Professional         │
│ $29/month           │ ← GRADIENT TEXT
│ [Get Started]       │ ← GLOW BUTTON
│ ✓ Unlimited msgs    │
│ ✓ Advanced AI       │
│ ✓ Priority support  │
└──────────────────────┘ ← GLOW BORDER
```

---

## 🎭 Effect Combination Patterns

### Hover Effect Pattern
```
Button Hover:
  1. Scale: +5%
  2. Glow: +20% intensity
  3. Shadow: +10px
  4. Duration: 0.3s

Card Hover:
  1. Translate: -10px (up)
  2. Border: Brighten
  3. Shadow: Increase
  4. Glow: Activate
```

### Focus State Pattern
```
Input Focus:
  1. Border: Change to primary color
  2. Glow: Activate
  3. Background: Slightly brighter
  4. Outline: Blue focus ring

Button Focus:
  1. Outline: 2px blue
  2. Offset: 2px
  3. High contrast: For accessibility
```

---

## 💫 Glow Effect Specifications

### Button Glow
```css
box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
/* On hover: 0 0 30px rgba(99, 102, 241, 0.6) */
```

### Card Glow
```css
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(99, 102, 241, 0.1);
/* On hover: 0 0 60px rgba(99, 102, 241, 0.2) */
```

### Text Glow
```css
text-shadow: 0 0 20px rgba(99, 102, 241, 0.5),
             0 0 40px rgba(236, 72, 153, 0.3);
```

### Background Glow
```css
background: radial-gradient(circle at 20% 50%, 
            rgba(99, 102, 241, 0.1) 0%, transparent 50%);
```

---

## 🎯 Design Tokens

### Spacing Scale
```
xs:    4px
sm:    8px
md:   12px
lg:   16px
xl:   20px
2xl:  24px
3xl:  30px
4xl:  40px
5xl:  60px
6xl:  80px
```

### Border Scale
```
thin:     1px
normal:   2px
thick:    3px
thicker:  4px
```

### Shadow Scale
```
sm:  0 1px 2px rgba(0,0,0,0.05)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)
xl:  0 20px 25px rgba(0,0,0,0.1)
```

---

## 🌈 Gradient Combinations

### Primary Gradient
```css
linear-gradient(135deg, #6366f1 0%, #ec4899 100%)
```

### Dark Gradient
```css
linear-gradient(180deg, #0f172a 0%, #1a1f35 100%)
```

### Aurora Gradient
```css
radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
```

### Text Gradient
```css
linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%)
```

---

## 🔤 Typography Combinations

### Hero Title
```
Font: Inter, sans-serif
Size: 60px
Weight: 800
Color: Gradient
Shadow: Subtle glow
Letter Spacing: Normal
Line Height: 1.2
```

### Body Text
```
Font: Inter, sans-serif
Size: 16px
Weight: 400
Color: Secondary (#cbd5e1)
Line Height: 1.6
Letter Spacing: Normal
```

### Button Text
```
Font: Inter, sans-serif
Size: 16px
Weight: 600
Color: White (on gradient)
Text Transform: None
Letter Spacing: Normal
```

---

## 📱 Responsive Typography

### Desktop
```
Hero Title:    60px
Section Title: 48px
Body:          16px
Caption:       14px
```

### Tablet (768px-1024px)
```
Hero Title:    48px
Section Title: 36px
Body:          15px
Caption:       13px
```

### Mobile (<768px)
```
Hero Title:    36px
Section Title: 28px
Body:          14px
Caption:       12px
```

---

## 🎪 Icon Reference

### Feature Icons (Emoji)
```
🧠 = Intelligence/Brain/Smart
⚡ = Speed/Energy/Performance
🔒 = Security/Safety/Lock
🌍 = Global/International
📊 = Analytics/Data/Charts
🔄 = Update/Loop/Refresh
💡 = Ideas/Innovation
🚀 = Launch/Speed/Growth
```

### Status Icons
```
✅ = Success/Complete
⏳ = Loading/Waiting
🚫 = Error/Cancel
⚠️ = Warning
ℹ️ = Information
💫 = Processing
🔔 = Notification
🎯 = Target/Goal
```

### Action Icons
```
📋 = Copy
👍 = Like/Approve
👎 = Dislike/Disapprove
🎤 = Voice/Audio
📎 = Attach/File
🔍 = Search
⚙️ = Settings
🔐 = Lock/Secure
```

---

## 🎨 Color Palette Reference

### Full Palette
```
Primary:       #6366f1 (Indigo)
Primary Dark:  #4f46e5
Primary Light: #818cf8
Secondary:     #ec4899 (Pink)
Accent:        #06b6d4 (Cyan)
Success:       #10b981 (Green)
Warning:       #f59e0b (Amber)
Error:         #ef4444 (Red)
```

### Background Palette
```
Darkest:  #020617
Very Dark: #0f172a
Dark:      #1a1f35
Medium:    #1e293b
Light:     #334155
```

### Text Palette
```
Primary:   #f1f5f9 (Main text)
Secondary: #cbd5e1 (Muted text)
Tertiary:  #94a3b8 (Faint text)
```

---

## 🎊 Complete Visual Reference

### Light Glow Effect
- Brightness: 30-50%
- Blur: 20px-40px
- Duration: 0.3s-0.5s

### Medium Glow Effect
- Brightness: 50-70%
- Blur: 40px-60px
- Duration: 0.5s-0.8s

### Strong Glow Effect
- Brightness: 70-100%
- Blur: 60px+
- Duration: 0.8s-1.5s

---

## 📊 Component Measurement Cheat Sheet

| Component | Width | Height | Padding | Border Radius |
|-----------|-------|--------|---------|---------------|
| Button | Flex | 44px | 12-32px | 8px |
| Card | 100% | Auto | 40px | 16px |
| Input | 100% | 44px | 12px | 8px |
| Header | 100% | 80px | 20px | 0px |
| Hero | 100% | 100vh | 80px | 0px |

---

## ✨ Effect Intensity Scale

| Level | Opacity | Blur | Shadow | Example |
|-------|---------|------|--------|---------|
| Subtle | 10-20% | 10px | Light | Hover state |
| Medium | 30-50% | 20px | Medium | Default glow |
| Strong | 60-80% | 40px | Heavy | Focus/Active |
| Intense | 90-100% | 60px+ | Very Heavy | Animation peak |

---

**This guide ensures consistent visual design across Genesis! 🎨✨**

Use these references to maintain the beautiful aesthetic of your Genesis platform.

---

*Last Updated: January 31, 2026*
