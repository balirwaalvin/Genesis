import React from 'react'
import Sidebar from './components/Sidebar'
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
      <Sidebar />
      <div className="main-content">
        <ChatInterface />
      </div>
    </motion.div>
  )
}
