import React, { useState } from 'react'

const LoginPage = ({ onCreateAccount, onForgotPassword, isModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    console.log('Sign in attempt:', formData)
    // Add your authentication logic here
    alert('Sign in successful!')
  }

  const handleCreateAccount = () => {
    if (onCreateAccount) {
      onCreateAccount()
    }
  }

  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword()
    }
  }

  return (
    <div className={`${isModal ? 'w-full' : 'h-screen w-screen'} flex m-0 p-0`} style={isModal ? {height: 'auto'} : undefined}>
        <div 
          className={`flex-1 flex items-center justify-center relative ${isModal ? 'bg-white' : ''}`}
        >
          <div
            className="bg-gray-800 absolute flex items-center justify-center"
            style={{
              width: isModal ? '700px' : '842px',
              height: isModal ? '770px' : '925px',
              top: isModal ? '-200px' : '-275px',
              left: isModal ? '-300px' : '-350px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '100%'
            }}
          >
            <div className="text-white text-center px-8">
              <h1 
                className="mb-2"
                style={{
                  fontFamily: 'Poetsen One',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '50px',
                  lineHeight: '100%',
                  letterSpacing: 0,
                  textAlign: 'center'
                }}
              >
                Welcome
              </h1>
              <h2 
                className="mb-2"
                style={{
                  fontFamily: 'Poetsen One',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '50px',
                  lineHeight: '100%',
                  letterSpacing: 0,
                  textAlign: 'center'
                }}
              >
                To
              </h2>
              <h3 
                style={{
                  fontFamily: 'Poetsen One',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '50px',
                  lineHeight: '100%',
                  letterSpacing: 0,
                  textAlign: 'center'
                }}
              >
                Reborn 2 Human!
              </h3>
            </div>
          </div>
        </div>

         <div className="flex-2 relative bg-white">
           <button 
             className="absolute bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
             style={{
               width: '66px',
               height: '56px',
               right: '24px',
               top: '24px',
               transform: 'rotate(0deg)',
               opacity: 1,
               borderBottomLeftRadius: '20px'
             }}
           >
             <span className="text-lg font-bold">×</span>
           </button>

           <div className="max-w-md mx-auto p-8">
             <h2 className="text-3xl font-bold text-black mb-2">Sign in</h2>
             <p className="text-gray-600 mb-8">Your style journey starts here</p>

             <form onSubmit={handleSignIn} className="space-y-6">
               <div className="flex items-center space-x-3">
                 <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                 </div>
                 <input
                   type="text"
                   name="username"
                   value={formData.username}
                   onChange={handleInputChange}
                   placeholder="Username"
                   className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                   required
                 />
               </div>

               <div className="flex items-center space-x-3">
                 <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                   </svg>
                 </div>
                 <input
                   type="password"
                   name="password"
                   value={formData.password}
                   onChange={handleInputChange}
                   placeholder="Password"
                   className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700 placeholder-gray-400"
                   required
                 />
               </div>

               <div className="flex items-center justify-between">
                 <label className="flex items-center space-x-2 cursor-pointer">
                   <input
                     type="checkbox"
                     name="rememberMe"
                     checked={formData.rememberMe}
                     onChange={handleInputChange}
                     className="w-4 h-4 text-gray-800 bg-gray-100 border-gray-300 rounded focus:ring-gray-800"
                   />
                   <span className="text-gray-700">Remember me</span>
                 </label>
                 <button
                   type="button"
                   onClick={handleForgotPassword}
                   className="text-black underline hover:text-gray-700 transition-colors"
                 >
                   Forgot password?
                 </button>
               </div>

               <button
                 type="submit"
                 className="w-full h-12 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
               >
                 Sign In
               </button>

               <div className="relative">
                 <div className="absolute inset-0 flex items-center">
                   <div className="w-full border-t border-gray-300"></div>
                 </div>
                 <div className="relative flex justify-center text-sm">
                   <span className="px-2 bg-white text-gray-500">OR</span>
                 </div>
               </div>

               <button
                 type="button"
                 onClick={handleCreateAccount}
                 className="w-full h-12 bg-white text-black font-bold border-2 border-black rounded-lg hover:bg-gray-50 transition-colors"
               >
                 Create an Account
               </button>
             </form>
           </div>
         </div>
    </div>
  )
}

export default LoginPage
