import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FA]/90 backdrop-blur border-b border-[#192A56]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded bg-[#FFC107]" aria-hidden></span>
          <span className="font-extrabold tracking-tight text-lg">AuraVision</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:opacity-80">Features</a>
          <a href="#experts" className="hover:opacity-80">Our Experts</a>
          <a href="#how" className="hover:opacity-80">How It Works</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FFC107] text-[#192A56] font-medium shadow-sm hover:brightness-95 active:brightness-90 transition"
          >
            Chat with an Astrologer
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
