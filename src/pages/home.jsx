import React from 'react'
import Navbar from '../components/Navbar'

function Home({ onSignIn }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSignIn={onSignIn} />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Welcome to Reborn 2 Human</h1>
        <p className="mt-4 text-gray-300">Your landing content goes here.</p>
      </main>
    </div>
  )
}

export default Home

