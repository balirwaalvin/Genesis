import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const menuItems = [
    { label: 'Features', icon: '✨' },
    { label: 'Pricing', icon: '💎' },
    { label: 'About', icon: 'ℹ️' },
    { label: 'Help', icon: '❓' },
    { label: 'Settings', icon: '⚙️' },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  }

  return (
    <motion.header
      className="header"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="header-content">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-icon">G</div>
          <span className="logo-text">Genesis</span>
        </motion.div>

        <div className="header-actions">
          <div className="dropdown-container" ref={dropdownRef}>
            <motion.button
              className="menu-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Menu</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {menuItems.map((item) => (
                    <motion.button
                      key={item.label}
                      className="dropdown-item"
                      whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-label">{item.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
