import React, { useState } from 'react'

const CreateAccountPage = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCreateAccount = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long!')
      return
    }
    
    console.log('Create account attempt:', formData)
    alert('Account created successfully!')
  }

  const handleSignInHere = () => {
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

        {/* Right Section - Create Account Form */}
        <div className="flex-2 p-8 relative">
          {/* Close Button */}
          <button className="absolute top-6 right-6 w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
            <span className="text-lg font-bold">×</span>
          </button>

          {/* Form Content */}
          <div className="max-w-md mx-auto mt-12">
            <h2 className="text-3xl font-bold text-black mb-2">Create Account</h2>
            <p className="text-gray-600 mb-8">Your style journey starts here</p>

            <form onSubmit={handleCreateAccount} className="space-y-6">
              {/* Username Field */}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />

              {/* Email/Phone Field */}
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email / Phone Number"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />

              {/* Password Field */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />

              {/* Confirm Password Field */}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />

              {/* Login Prompt */}
              <div className="text-center">
                <span className="text-gray-700">Have an account? </span>
                <button
                  type="button"
                  onClick={handleSignInHere}
                  className="text-black underline hover:text-gray-700 transition-colors"
                >
                  Sign in here
                </button>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full h-12 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage
