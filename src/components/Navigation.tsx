import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import LoginModal from './LoginModal'
import ProfileDropdown from './ProfileDropdown'

const Navigation: React.FC = () => {
  const { user, loading } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  if (loading) {
    return (
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>Mikasa AI</h1>
          </div>
          <div className="nav-profile">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>Mikasa AI</h1>
          </div>
          <div className="nav-profile">
            {user ? (
              <ProfileDropdown />
            ) : (
              <button 
                className="login-button"
                onClick={() => setShowLoginModal(true)}
              >
                Masuk
              </button>
            )}
          </div>
        </div>
      </nav>
      
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </>
  )
}

export default Navigation