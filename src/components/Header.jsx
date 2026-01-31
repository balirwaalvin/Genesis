import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

export default function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Chat', id: 'chat' },
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
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
          onClick={() => setCurrentPage('home')}
        >
          <div className="logo-icon">G</div>
          <span className="logo-text">Genesis</span>
        </motion.div>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item, i) => (
            <motion.a
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentPage(item.id)
                setMobileMenuOpen(false)
              }}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="btn-primary header-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('chat')}
        >
          Get Started
        </motion.button>

        <motion.button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
      </div>

      <div className="header-glow"></div>
    </motion.header>
  )
}
