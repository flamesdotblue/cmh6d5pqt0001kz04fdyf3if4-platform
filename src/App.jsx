import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LandingSections from './components/LandingSections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#192A56] font-inter scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
