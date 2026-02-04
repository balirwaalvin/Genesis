import React, { useState } from 'react';
import './Sidebar.css';
import Logo from './Logo';

export default function Sidebar({ onNewChat }) {
  const [collapsed, setCollapsed] = useState(false);

  const historyItems = [
    { id: 1, title: 'Quantum Computing Basics', date: 'Today' },
    { id: 2, title: 'React Component Structure', date: 'Yesterday' },
    { id: 3, title: 'Creative Story Ideas', date: 'Previous 7 Days' },
    { id: 4, title: 'Python Script Optimization', date: 'Previous 7 Days' },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <Logo size={collapsed ? 24 : 32} />
          {!collapsed && <span className="logo-text">Genesis</span>}
        </div>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {collapsed ? (
              <path d="M4 4h16M4 12h16M4 20h16" />
            ) : (
              <path d="M18 16l-4-4 4-4M6 12h12" />
            )}
          </svg>
        </button>
      </div>

      <button className="new-chat-btn" onClick={onNewChat}>
        <span className="plus-icon">+</span>
        {!collapsed && <span>New chat</span>}
      </button>

      <div className="history-list">
        {!collapsed && <div className="history-label">Recent</div>}
        {historyItems.map(item => (
          <button key={item.id} className="history-item" title={item.title}>
            <svg className="history-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            {!collapsed && <span className="history-text">{item.title}</span>}
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="user-profile">
          <div className="avatar">U</div>
          {!collapsed && <div className="user-info">
            <span className="user-name">User</span>
            <span className="user-plan">Pro Plan</span>
          </div>}
        </button>
      </div>
    </aside>
  );
}
