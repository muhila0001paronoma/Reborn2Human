import React from 'react'

function Navbar({ onSignIn }) {
  return (
    <header className="w-full bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold tracking-wide">Reborn 2 Human</div>

        <ul className="hidden gap-8 md:flex">
          <li><a href="#home" className="relative pb-1 hover:opacity-80 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100">Home</a></li>
          <li><a href="#services" className="hover:opacity-80">Services</a></li>
          <li><a href="#products" className="hover:opacity-80">Products</a></li>
          <li><a href="#about" className="hover:opacity-80">About Us</a></li>
          <li><a href="#contact" className="hover:opacity-80">Contact Us</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <a href="#book" className="rounded-full bg-white px-4 py-1.5 text-black hover:bg-gray-200">Book Appointment</a>
          <button onClick={onSignIn} className="rounded-full border border-white px-4 py-1.5 hover:bg-white/10">Sign in</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar


