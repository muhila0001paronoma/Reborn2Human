import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center rounded-2xl overflow-hidden relative">
      {/* Left side - Welcome bubble */}
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

        {/* Title */}
        <h2 className="text-4xl font-bold font-inter text-black">
          Forgot Password
        </h2>
        <p className="text-base font-medium font-inter text-gray-600 mt-1">
          Reset your password here
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Get Code Button */}
          <button
            type="button"
            className="w-full h-12 border-2 border-black text-sm font-medium font-poppins rounded-lg hover:bg-black hover:text-white transition-all"
          >
            Get Code
          </button>

          {/* Code */}
          <input
            type="text"
            placeholder="Code Here..."
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* New Password */}
          <input
            type="password"
            placeholder="New Password"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Confirm New Password */}
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full h-12 bg-black text-white text-base font-semibold font-poppins rounded-lg hover:bg-gray-800 transition-colors"
          >
            Reset Password
          </button>

          {/* Back to Sign In */}
          <div className="text-center">
            <Link to="/signin" className="text-sm font-poppins text-black underline hover:text-gray-600 transition-colors">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
