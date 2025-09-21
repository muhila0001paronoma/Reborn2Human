import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="logo">
        Reborn <span className="logo-2">2</span> Human
      </div>

      {/* Center - Links */}
      <div className="navbar-center hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/haircuts">Services</Link>
        <a href="#products">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>

      {/* Right - Buttons */}
      <div className="navbar-right">
        <button className="btn-white">
          Book Appointment
        </button>
        <Link to="/signin" className="btn-outline">
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
