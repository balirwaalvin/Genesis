# Genesis - Advanced Customization Guide

## 🎨 Theme Customization

### Create Custom Themes

#### Create a new file: `src/themes/customTheme.js`

```javascript
export const themes = {
  default: {
    '--primary': '#6366f1',
    '--primary-dark': '#4f46e5',
    '--primary-light': '#818cf8',
    '--secondary': '#ec4899',
    '--accent': '#06b6d4',
  },
  cyberpunk: {
    '--primary': '#00ff00',
    '--primary-dark': '#00cc00',
    '--primary-light': '#33ff33',
    '--secondary': '#ff00ff',
    '--accent': '#00ffff',
  },
  sunset: {
    '--primary': '#ff6b35',
    '--primary-dark': '#d84315',
    '--primary-light': '#ff8a65',
    '--secondary': '#f7931e',
    '--accent': '#fbc02d',
  },
  ocean: {
    '--primary': '#006994',
    '--primary-dark': '#004d73',
    '--primary-light': '#0091ad',
    '--secondary': '#00bcd4',
    '--accent': '#1de9b6',
  }
};

export function applyTheme(themeName) {
  const theme = themes[themeName];
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
```

### Implement Theme Switcher

Add to `App.jsx`:

```javascript
import { useState } from 'react'
import { applyTheme, themes } from './themes/customTheme'

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('default')

  const handleThemeChange = (theme) => {
    applyTheme(theme)
    setCurrentTheme(theme)
  }

  return (
    <>
      <div className="theme-switcher">
        {Object.keys(themes).map(theme => (
          <button
            key={theme}
            onClick={() => handleThemeChange(theme)}
            className={currentTheme === theme ? 'active' : ''}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>
      {/* Rest of app */}
    </>
  )
}
```

---

## 🎬 Advanced Animation Tweaks

### Customize Framer Motion

Edit component files to adjust animations:

```javascript
// Change animation speed
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Change delay between children
      delayChildren: 0.3     // Initial delay
    }
  }
}

// Add new variants
const customVariants = {
  spin: {
    rotate: 360,
    transition: { duration: 2, repeat: Infinity }
  },
  bounce: {
    y: [0, -10, 0],
    transition: { duration: 0.6, repeat: Infinity }
  }
}
```

### Add Scroll Animations

```javascript
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress }}
    >
      Content
    </motion.section>
  )
}
```

---

## 🔌 API Integration

### Connect to Real AI API

Update `ChatInterface.jsx`:

```javascript
import axios from 'axios'

const sendMessage = async (message) => {
  try {
    const response = await axios.post('/api/chat', {
      message: message,
      model: selectedModel
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    
    return response.data.reply
  } catch (error) {
    console.error('API Error:', error)
    return 'Sorry, I encountered an error.'
  }
}
```

### Example: OpenAI Integration

```javascript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY
})

export async function getAIResponse(message) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "user",
      content: message
    }],
    max_tokens: 1024,
  })
  return response.choices[0].message.content
}
```

---

## 💾 State Management

### Add Redux for Complex State

```bash
npm install @reduxjs/toolkit react-redux
```

Create `src/store/chatSlice.js`:

```javascript
import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    loading: false,
    selectedModel: 'advanced'
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setModel: (state, action) => {
      state.selectedModel = action.payload
    },
    clearMessages: (state) => {
      state.messages = []
    }
  }
})

export const { addMessage, setLoading, setModel, clearMessages } = chatSlice.actions
export default chatSlice.reducer
```

---

## 🗄️ Database Integration

### Firebase Setup

```bash
npm install firebase
```

Create `src/config/firebase.js`:

```javascript
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
```

---

## 🔐 Authentication

### Add User Authentication

```javascript
import { auth } from './config/firebase'
import { signInWithGoogle, signOut } from 'firebase/auth'

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider())
    return result.user
  } catch (error) {
    console.error('Login failed:', error)
  }
}

export async function logout() {
  await signOut(auth)
}
```

---

## 📊 Analytics Integration

### Add Google Analytics

```bash
npm install @react-ga/react-ga4
```

Add to `main.jsx`:

```javascript
import ReactGA from 'react-ga4'

ReactGA.initialize(process.env.REACT_APP_GA_ID)
ReactGA.send({
  hitType: "pageview",
  page: "/",
  title: "Genesis AI"
})
```

---

## 🎯 Performance Optimization

### Code Splitting

```javascript
import { lazy, Suspense } from 'react'

const ChatInterface = lazy(() => import('./components/ChatInterface'))
const Pricing = lazy(() => import('./components/Pricing'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatInterface />
      <Pricing />
    </Suspense>
  )
}
```

### Image Optimization

```javascript
import { useState } from 'react'

export function OptimizedImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      style={{ opacity: isLoaded ? 1 : 0.5 }}
    />
  )
}
```

### Memoization

```javascript
import { memo, useMemo } from 'react'

const ChatMessage = memo(({ message }) => {
  const formattedText = useMemo(
    () => message.text.toUpperCase(),
    [message.text]
  )
  return <div>{formattedText}</div>
})
```

---

## 🚀 Deployment Optimization

### Environment Variables

Create `.env.local`:

```env
REACT_APP_API_URL=https://api.genesis.ai
REACT_APP_OPENAI_KEY=sk-...
REACT_APP_GA_ID=G-...
REACT_APP_ENV=production
```

### Build Optimization

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
        }
      }
    },
    minify: 'terser',
    sourcemap: false,
  }
})
```

---

## 🧪 Testing

### Unit Tests with Vitest

```bash
npm install -D vitest @testing-library/react
```

Create `src/__tests__/Header.test.jsx`:

```javascript
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders logo', () => {
    render(<Header currentPage="home" setCurrentPage={() => {}} />)
    expect(screen.getByText('Genesis')).toBeInTheDocument()
  })
})
```

---

## 📱 PWA Setup

Create `public/manifest.json`:

```json
{
  "name": "Genesis AI",
  "short_name": "Genesis",
  "description": "Advanced AI Platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#6366f1",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🔧 Debugging Tips

### React DevTools
```bash
npm install -D @react-devtools/shell
```

### Console Logging
```javascript
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', value)
}
```

### Error Boundaries
```javascript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }
  render() {
    return this.props.children
  }
}
```

---

## 🎓 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [CSS-Tricks](https://css-tricks.com)
- [Web.dev](https://web.dev)

---

**Happy Customizing! 🎨✨**
