import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import ChatInterface from './components/ChatInterface'
import './App.css'

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      className="app"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <ChatInterface />
    </motion.div>
  )
}
