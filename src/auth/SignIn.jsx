import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center rounded-2xl overflow-hidden relative">
      {/* Left side - Welcome section */}
      <div className="hidden md:flex flex-col items-center justify-center bg-[#222] rounded-full w-[600px] h-[600px] -ml-48 -mt-32 text-white text-center p-6">
        <h1 className="text-3xl font-poetsen leading-tight">
          Welcome <br /> To <br /> Reborn 2 Human!
        </h1>
      </div>

      {/* Right side - Form */}
      <div className="relative w-full max-w-md px-6">
        {/* Close button */}
        <Link to="/" className="absolute top-0 right-0 bg-black rounded-bl-2xl w-12 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors">
          <span className="text-white text-lg font-poppins">×</span>
        </Link>

        <h2 className="text-4xl font-bold font-inter text-black">
          Sign in
        </h2>
        <p className="text-base font-medium font-inter text-gray-600 mt-1">
          Your style journey starts here
        </p>

        {/* Form fields */}
        <form className="mt-6 space-y-4">
          {/* Username */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="flex-1 h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
            />
          </div>

          {/* Password */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-black text-sm font-poppins">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-black" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="underline hover:text-gray-600 transition-colors text-sm">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button className="w-full h-12 bg-black text-white text-base font-semibold font-poppins rounded-lg hover:bg-gray-800 transition-colors">
            Sign In
          </button>

          {/* OR divider */}
          <div className="flex items-center my-3">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-sm font-light font-poppins text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Create account */}
          <Link to="/signup">
            <button className="w-full h-12 border-2 border-black text-base font-semibold font-poppins rounded-lg hover:bg-black hover:text-white transition-all">
              Create an Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
