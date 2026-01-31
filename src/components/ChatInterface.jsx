import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import './ChatInterface.css'

export default function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState('advanced')
  const [showChat, setShowChat] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // First message initializes chat
    if (messages.length === 0) {
      setShowChat(true)
    }

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate API call with realistic responses
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me help you with that. I've analyzed your request and here's what I found...",
        "I understand what you're asking. Based on current information, I'd recommend considering these points...",
        "Interesting topic! Let me provide you with a comprehensive answer. The key aspects to consider are...",
        "I'm glad you asked that. Here's my detailed analysis on this subject...",
        "That's a fascinating question. Let me break this down for you with the most relevant information..."
      ]

      const aiMessage = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'ai',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const messageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  }

  const genesisVariants = {
    initial: { opacity: 0, scale: 0.8, y: 30 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <div className="chat-container">
      {/* Genesis Title Section */}
      {!showChat && (
        <motion.div
          className="genesis-section"
          variants={genesisVariants}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="genesis-title">
            <h1 className="genesis-text">Genesis</h1>
            <div className="genesis-glow"></div>
          </div>
          <p className="genesis-subtitle">Your Advanced AI Assistant</p>
        </motion.div>
      )}

      {/* Chat Section */}
      <motion.div
        className={`chat-section ${showChat ? 'active' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: showChat ? 0 : 0.5 }}
      >
        <div className="chat-header">
          <div className="chat-title">
            <h2>Chat</h2>
          </div>
          <div className="model-selector">
            <label>Model:</label>
            <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
              <option value="advanced">Advanced</option>
              <option value="standard">Standard</option>
              <option value="creative">Creative</option>
              <option value="technical">Technical</option>
            </select>
          </div>
        </div>

        <div className="chat-messages">
          <AnimatePresence mode="wait">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                className={`message ${msg.sender}`}
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
              >
                <div className="message-avatar">
                  {msg.sender === 'ai' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <div className="message-actions">
                      <button className="action-btn" title="Copy">📋</button>
                      <button className="action-btn" title="Like">👍</button>
                      <button className="action-btn" title="Dislike">👎</button>
                    </div>
                  </div>
                  <span className="message-time">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                key="loading"
                className="message ai"
                variants={messageVariants}
                initial="initial"
                animate="animate"
              >
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="message-bubble loading">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Ask me anything... Type your question here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            />
            <div className="input-actions">
              <button type="button" className="action-icon" title="Attach">
                📎
              </button>
              <button type="button" className="action-icon" title="Voice">
                🎤
              </button>
              <motion.button
                type="submit"
                className="send-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                <span>Send</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10L18 2L10 18L9 11L2 10Z" fill="currentColor" />
                </svg>
              </motion.button>
            </div>
          </div>
          <p className="input-hint">Genesis can make mistakes. Always verify important information.</p>
        </form>
      </motion.div>
    </div>
  )
}
