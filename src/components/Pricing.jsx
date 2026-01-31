import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Pricing.css'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for individuals',
      price: billingCycle === 'monthly' ? 9 : 90,
      features: [
        '10,000 messages/month',
        'Basic AI model',
        '24/7 support',
        'Web access',
        'Basic analytics'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Professional',
      description: 'For power users',
      price: billingCycle === 'monthly' ? 29 : 290,
      features: [
        'Unlimited messages',
        'Advanced AI model',
        '24/7 priority support',
        'API access',
        'Advanced analytics',
        'Custom integrations'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For organizations',
      price: 'Custom',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'Dedicated support',
        'Advanced API',
        'White-label solution',
        'Custom deployment'
      ],
      highlighted: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const planVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Simple Pricing</h2>
          <p>Choose the perfect plan for your needs</p>
        </motion.div>

        <motion.div
          className="billing-toggle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <button
            className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly (Save 20%)
          </button>
        </motion.div>

        <motion.div
          className="pricing-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              variants={planVariants}
              whileHover={{ y: -10 }}
            >
              {plan.highlighted && <div className="badge">Most Popular</div>}
              <div className="card-glow"></div>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price-section">
                <div className="price">
                  {typeof plan.price === 'number' ? '$' : ''}{plan.price}
                  {typeof plan.price === 'number' && <span className="period">/month</span>}
                </div>
              </div>

              <motion.button
                className={plan.highlighted ? 'btn-primary' : 'btn-secondary'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>

              <div className="features-list">
                <p className="features-title">Features:</p>
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="feature-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="checkmark">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="faq-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h3>Frequently Asked Questions</h3>
          <div className="faq-items">
            <div className="faq-item">
              <h4>Can I switch plans anytime?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>Yes! Try Genesis for free for 7 days. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer discounts for annual billing?</h4>
              <p>Absolutely! Pay annually and save 20% on all plans.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
