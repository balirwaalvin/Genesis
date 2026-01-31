import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ChatInterface from './components/ChatInterface'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  }

  return (
    <motion.div
      className="app"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={currentPage}
      >
        {currentPage === 'home' && (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Features />
            <Pricing />
          </>
        )}
        {currentPage === 'chat' && <ChatInterface />}
      </motion.main>

      <Footer setCurrentPage={setCurrentPage} />
    </motion.div>
  )
}
