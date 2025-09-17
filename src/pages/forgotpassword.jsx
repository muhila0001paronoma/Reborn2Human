import React, { useState } from 'react'

const ForgotPasswordPage = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    code: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [codeSent, setCodeSent] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGetCode = (e) => {
    e.preventDefault()
    if (!formData.username.trim()) {
      alert('Please enter your username first!')
      return
    }
    
    console.log('Getting verification code for:', formData.username)
    setCodeSent(true)
    alert('Verification code sent! Check your email or phone.')
  }

  const handleResetPassword = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!codeSent) {
      alert('Please get your verification code first!')
      return
    }
    
    if (!formData.code.trim()) {
      alert('Please enter the verification code!')
      return
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    if (formData.newPassword.length < 6) {
      alert('Password must be at least 6 characters long!')
      return
    }
    
    console.log('Reset password attempt:', formData)
    alert('Password reset successfully!')
    
    if (onBackToLogin) {
      onBackToLogin()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[600px] flex">
        {/* Left Section - Welcome */}
        <div className="bg-gray-800 flex-1 flex items-center justify-center relative">
          <div className="text-white text-center px-8">
            <h1 className="text-4xl font-bold mb-2">Welcome</h1>
            <h2 className="text-4xl font-bold mb-2">To</h2>
            <h3 className="text-4xl font-bold">Reborn 2 Human!</h3>
          </div>
        </div>

        {/* Right Section - Forgot Password Form */}
        <div className="flex-2 p-8 relative">
          {/* Close Button */}
          <button className="absolute top-6 right-6 w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
            <span className="text-lg font-bold">×</span>
          </button>

          {/* Form Content */}
          <div className="max-w-md mx-auto mt-12">
            <h2 className="text-3xl font-bold text-black mb-2">Forgot Password</h2>
            <p className="text-gray-600 mb-8">Reset your password here</p>

            <form onSubmit={handleResetPassword} className="space-y-6">
              {/* Username Field */}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
                disabled={codeSent}
              />

              {/* Get Code Button */}
              <button
                type="button"
                onClick={handleGetCode}
                className="w-full h-12 bg-white text-black font-bold border-2 border-black rounded-lg hover:bg-gray-50 transition-colors"
                disabled={codeSent}
              >
                {codeSent ? 'Code Sent' : 'Get Code'}
              </button>

              {/* Code Field */}
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                placeholder="Code Here..."
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
                disabled={!codeSent}
              />

              {/* New Password Field */}
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="New Password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
                disabled={!codeSent}
              />

              {/* Confirm New Password Field */}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm New Password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
                disabled={!codeSent}
              />

              {/* Reset Password Button */}
              <button
                type="submit"
                className="w-full h-12 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                disabled={!codeSent}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
