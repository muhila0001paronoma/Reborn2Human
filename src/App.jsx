
import React, { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import CreateAccountPage from './pages/createaccount'
import ForgotPasswordPage from './pages/forgotpassword'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const showLogin = () => setCurrentPage('login')
  const showCreateAccount = () => setCurrentPage('createaccount')
  const showForgotPassword = () => setCurrentPage('forgotpassword')
  const showHome = () => setCurrentPage('home')

  const openLoginModal = () => setLoginModalOpen(true)
  const closeLoginModal = () => setLoginModalOpen(false)
  const goToCreateFromModal = () => {
    closeLoginModal()
    showCreateAccount()
  }
  const goToForgotFromModal = () => {
    closeLoginModal()
    showForgotPassword()
  }

  useEffect(() => {
    if (!loginModalOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLoginModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [loginModalOpen])

  return (
    <div>
      {currentPage === 'home' ? (
        <>
          <HomePage onSignIn={openLoginModal} />
          {loginModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={closeLoginModal}>
              <div className="relative w-full max-w-5xl mx-4 rounded-2xl bg-white shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={closeLoginModal}
                  className="absolute right-3 top-3 z-10 h-9 w-9 rounded-md bg-black text-white flex items-center justify-center hover:bg-gray-800"
                  aria-label="Close login"
                >
                  ×
                </button>
                <LoginPage isModal onCreateAccount={goToCreateFromModal} onForgotPassword={goToForgotFromModal} />
              </div>
            </div>
          )}
        </>
      ) : currentPage === 'login' ? (
        <LoginPage onCreateAccount={showCreateAccount} onForgotPassword={showForgotPassword} />
      ) : currentPage === 'createaccount' ? (
        <CreateAccountPage onBackToLogin={showLogin} />
      ) : (
        <ForgotPasswordPage onBackToLogin={showLogin} />
      )}
    </div>
  )
}

export default App
