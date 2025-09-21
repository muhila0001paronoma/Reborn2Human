import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          Create Account
        </h2>
        <p className="text-lg font-medium font-inter text-black mt-2">
          Your style journey starts here
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Email / Phone */}
          <input
            type="text"
            placeholder="Email / Phone Number"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-14 rounded-lg bg-[#D8D8D8] px-5 text-xl font-poppins text-gray-600 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
          />

          {/* Already have account */}
          <div className="flex items-center justify-between text-black text-lg font-poppins">
            <p>Have an account?</p>
            <Link to="/signin" className="underline hover:text-gray-600 transition-colors">
              Sign in here
            </Link>
          </div>

          {/* Submit */}
          <button className="w-full h-20 bg-black text-white text-3xl font-semibold font-poppins rounded-xl hover:bg-gray-800 transition-colors">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
