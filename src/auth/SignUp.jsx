import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          Create Account
        </h2>
        <p className="text-base font-medium font-inter text-gray-600 mt-1">
          Your style journey starts here
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Email / Phone */}
          <input
            type="text"
            placeholder="Email / Phone Number"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-12 rounded-lg bg-[#F5F5F5] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all border border-gray-200"
          />

          {/* Already have account */}
          <div className="flex items-center justify-between text-black text-sm font-poppins">
            <p>Have an account?</p>
            <Link to="/signin" className="underline hover:text-gray-600 transition-colors text-sm">
              Sign in here
            </Link>
          </div>

          {/* Submit */}
          <button className="w-full h-12 bg-black text-white text-base font-semibold font-poppins rounded-lg hover:bg-gray-800 transition-colors">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
