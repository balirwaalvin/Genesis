import React from 'react'
import { motion } from 'framer-motion'
import './Features.css'

export default function Features() {
  const features = [
    {
      id: 1,
      icon: '🧠',
      title: 'Advanced AI',
      description: 'Powered by state-of-the-art neural networks for intelligent conversations'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get responses in milliseconds with our optimized infrastructure'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared with third parties'
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Multi-language',
      description: 'Communicate in 50+ languages with real-time translation'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Analytics',
      description: 'Track your conversation history and usage patterns'
    },
    {
      id: 6,
      icon: '🔄',
      title: 'Always Learning',
      description: 'Continuous improvements with regular model updates'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Powerful Features</h2>
          <p>Everything you need for an exceptional AI experience</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              variants={featureVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="feature-glow"></div>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-border"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
