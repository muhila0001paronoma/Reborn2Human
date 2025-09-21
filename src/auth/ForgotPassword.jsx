import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center rounded-2xl overflow-hidden relative">
      {/* Left side - Welcome bubble */}
      <div className="hidden md:flex flex-col items-center justify-center bg-[#222] rounded-full w-[800px] h-[800px] -ml-72 -mt-48 text-white text-center p-8">
        <h1 className="text-5xl font-poetsen">
          Welcome <br /> To <br /> Reborn 2 Human!
        </h1>
      </div>

      {/* Right side - Form */}
      <div className="relative w-full max-w-xl px-8">
        {/* Close button */}
        <Link to="/" className="absolute top-0 right-0 bg-black rounded-bl-2xl w-16 h-14 flex items-center justify-center hover:bg-gray-800 transition-colors">
          <span className="text-white text-2xl font-poppins">X</span>
        </Link>

        {/* Title */}
        <h2 className="text-6xl font-extrabold font-inter text-black">
          Forgot Password
        </h2>
        <p className="text-lg font-medium font-inter text-black mt-2">
          Reset your password here
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Get Code Button */}
          <button
            type="button"
            className="w-full h-16 border-2 border-black text-2xl font-medium font-poppins rounded-xl hover:bg-black hover:text-white transition-all"
          >
            Get Code
          </button>

          {/* Code */}
          <input
            type="text"
            placeholder="Code Here..."
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* New Password */}
          <input
            type="password"
            placeholder="New Password"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Confirm New Password */}
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full h-20 bg-black text-white text-3xl font-semibold font-poppins rounded-xl hover:bg-gray-800 transition-colors"
          >
            Reset Password
          </button>

          {/* Back to Sign In */}
          <div className="text-center">
            <Link to="/signin" className="text-lg font-poppins text-black underline hover:text-gray-600 transition-colors">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
