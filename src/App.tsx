import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Navigation from './components/Navigation'
import ChatInterface from './components/ChatInterface'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <ChatInterface />
        </main>
      </div>
    </AuthProvider>
  )
}

export default App