import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import './ChatInterface.css'

export default function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState('advanced')
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

    // Add user message
    const userMessage = {
      id: Date.now(),
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
        id: Date.now() + 1,
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

  const emptyStateVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div className="chat-container">
      {/* Main Chat Area */}
      <div className="chat-main">
        {/* Model Selector Bar */}
        <div className="model-selector-bar">
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="model-select"
          >
            <option value="advanced">Genesis Advanced</option>
            <option value="standard">Genesis Standard</option>
            <option value="creative">Genesis Creative</option>
            <option value="technical">Genesis Technical</option>
          </select>
        </div>

        {/* Messages Area */}
        <div className="chat-messages">
          {messages.length === 0 ? (
            <motion.div
              className="empty-state"
              variants={emptyStateVariants}
              initial="initial"
              animate="animate"
            >
              <div className="genesis-logo">
                <Logo size={80} />
              </div>
              <h2 className="welcome-title">Welcome to Genesis</h2>
              <p className="welcome-subtitle">How can I help you today?</p>

              <div className="suggestion-cards">
                <motion.button
                  className="suggestion-card"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInputValue("Explain quantum computing in simple terms")}
                >
                  <span className="suggestion-icon">🔬</span>
                  <span className="suggestion-text">Explain quantum computing</span>
                </motion.button>
                <motion.button
                  className="suggestion-card"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInputValue("Write a creative story")}
                >
                  <span className="suggestion-icon">✨</span>
                  <span className="suggestion-text">Write a creative story</span>
                </motion.button>
                <motion.button
                  className="suggestion-card"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInputValue("Help me code a website")}
                >
                  <span className="suggestion-icon">💻</span>
                  <span className="suggestion-text">Help me code</span>
                </motion.button>
                <motion.button
                  className="suggestion-card"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInputValue("Plan my day efficiently")}
                >
                  <span className="suggestion-icon">📅</span>
                  <span className="suggestion-text">Plan my day</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <>
              {messages.map((msg) => (
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
                    {msg.sender === 'ai' ? (
                      <div className="ai-avatar">G</div>
                    ) : (
                      <div className="user-avatar">👤</div>
                    )}
                  </div>
                  <div className="message-content">
                    <div className="message-text">
                      <p>{msg.text}</p>
                    </div>
                    {msg.sender === 'ai' && (
                      <div className="message-actions">
                        <button className="action-btn" title="Copy">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 2h8a2 2 0 012 2v8M2 6h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          </svg>
                        </button>
                        <button className="action-btn" title="Good response">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
                          </svg>
                        </button>
                        <button className="action-btn" title="Bad response">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 14l-2-6H0l5-4L3 0l5 4 5-4-2 4 5 4h-6z"/>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="message ai"
                  variants={messageVariants}
                  initial="initial"
                  animate="animate"
                >
                  <div className="message-avatar">
                    <div className="ai-avatar">G</div>
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="chat-input-container">
          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <div className="input-wrapper">
              <button type="button" className="attach-btn" title="Attach file">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 016 6v6a4 4 0 01-8 0V8a2 2 0 114 0v6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </button>

              <input
                type="text"
                placeholder="Message Genesis..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="chat-input"
              />

              <motion.button
                type="submit"
                className="send-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading || !inputValue.trim()}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3l16 7-16 7 3-7-3-7z"/>
                </svg>
              </motion.button>
            </div>
          </form>
          <p className="input-disclaimer">Genesis can make mistakes. Always verify important information.</p>
        </div>
      </div>
    </div>
  )
}
