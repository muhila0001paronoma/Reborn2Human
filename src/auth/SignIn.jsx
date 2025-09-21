import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center rounded-2xl overflow-hidden relative">
      {/* Left side - Welcome section */}
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

        <h2 className="text-6xl font-extrabold font-inter text-black">
          Sign in
        </h2>
        <p className="text-lg font-medium font-inter text-black mt-2">
          Your style journey starts here
        </p>

        {/* Form fields */}
        <form className="mt-8 space-y-6">
          {/* Username */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#2B2B2B] w-20 h-20 rounded-lg flex items-center justify-center">
              <img
                src="https://placehold.co/50x50"
                alt="user"
                className="w-10 h-10"
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="flex-1 h-20 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
            />
          </div>

          {/* Password */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#2B2B2B] w-20 h-20 rounded-lg flex items-center justify-center">
              <img
                src="https://placehold.co/50x50"
                alt="lock"
                className="w-10 h-10"
              />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 h-20 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-black text-lg font-poppins">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 border border-black rounded focus:ring-2 focus:ring-black" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="underline hover:text-gray-600 transition-colors">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button className="w-full h-20 bg-black text-white text-3xl font-semibold font-poppins rounded-xl hover:bg-gray-800 transition-colors">
            Sign In
          </button>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-black"></div>
            <span className="px-4 text-xl font-light font-poppins">OR</span>
            <div className="flex-1 border-t border-black"></div>
          </div>

          {/* Create account */}
          <Link to="/signup">
            <button className="w-full h-20 border-2 border-black text-3xl font-semibold font-poppins rounded-xl hover:bg-black hover:text-white transition-all">
              Create an Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
