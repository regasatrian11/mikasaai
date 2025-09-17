import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const ChatInterface: React.FC = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="chat-interface">
        <div className="welcome-screen">
          <div className="welcome-content">
            <h1>Selamat datang di Mikasa AI</h1>
            <p>Silakan masuk untuk mulai menggunakan AI assistant</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-interface">
      <div className="chat-container">
        <div className="chat-messages">
          <div className="welcome-message">
            <h2>Halo, {user.user_metadata?.username || user.email?.split('@')[0]}!</h2>
            <p>Saya Mikasa AI, siap membantu Anda. Apa yang bisa saya bantu hari ini?</p>
          </div>
        </div>
        <div className="chat-input-container">
          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Ketik pesan Anda di sini..."
              disabled
            />
            <button disabled>Kirim</button>
          </div>
          <p className="chat-note">Interface chat akan dikembangkan lebih lanjut</p>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface