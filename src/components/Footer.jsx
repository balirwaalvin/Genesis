import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
    >
      <div className="footer-content">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {currentYear} <span className="footer-brand">Genesis</span>. All rights reserved.
            </p>
          </div>

          <div className="footer-center">
            <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>
              Cookies
            </a>
          </div>

          <div className="footer-right">
            <a href="#" className="footer-social" title="Twitter" onClick={(e) => e.preventDefault()}>
              𝕏
            </a>
            <a href="#" className="footer-social" title="LinkedIn" onClick={(e) => e.preventDefault()}>
              💼
            </a>
            <a href="#" className="footer-social" title="GitHub" onClick={(e) => e.preventDefault()}>
              ⭐
            </a>
          </div>
        </div>
      </div>

      <div className="footer-glow"></div>
    </motion.footer>
  )
}
