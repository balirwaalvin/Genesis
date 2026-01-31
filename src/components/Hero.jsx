import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero({ setCurrentPage }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Welcome to <span className="gradient-text">Genesis</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          The next generation AI platform designed for intelligence, speed, and elegance.
          Experience conversations like never before with cutting-edge artificial intelligence.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('chat')}
          >
            Start Chatting Now
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <div className="stat-value">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Available</div>
          </div>
          <div className="stat">
            <div className="stat-value">100k+</div>
            <div className="stat-label">Active Users</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visualization"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <div className="floating-card card-1">
          <div className="card-glow"></div>
          <div className="card-content">
            <div className="card-icon">💡</div>
            <div className="card-text">Smart AI</div>
          </div>
        </div>
        <div className="floating-card card-2">
          <div className="card-glow"></div>
          <div className="card-content">
            <div className="card-icon">⚡</div>
            <div className="card-text">Lightning Fast</div>
          </div>
        </div>
        <div className="floating-card card-3">
          <div className="card-glow"></div>
          <div className="card-content">
            <div className="card-icon">🔒</div>
            <div className="card-text">Secure</div>
          </div>
        </div>
        <div className="hero-orb"></div>
      </motion.div>
    </section>
  )
}
