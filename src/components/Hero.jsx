import React from 'react'
import { Apple, Play } from 'lucide-react'

function StoreButtons() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      <a
        href="#download"
        aria-label="Download on the App Store"
        className="group inline-flex items-center gap-3 rounded-md border border-[#192A56]/10 bg-white px-4 py-3 shadow-sm hover:shadow transition"
      >
        <Apple className="w-6 h-6 text-[#192A56]" />
        <div className="leading-tight text-left">
          <div className="text-[10px] uppercase tracking-wide text-[#192A56]/70">Download on the</div>
          <div className="text-sm font-semibold text-[#192A56]">App Store</div>
        </div>
      </a>
      <a
        href="#download"
        aria-label="Get it on Google Play"
        className="group inline-flex items-center gap-3 rounded-md border border-[#192A56]/10 bg-white px-4 py-3 shadow-sm hover:shadow transition"
      >
        <Play className="w-6 h-6 text-[#192A56]" />
        <div className="leading-tight text-left">
          <div className="text-[10px] uppercase tracking-wide text-[#192A56]/70">GET IT ON</div>
          <div className="text-sm font-semibold text-[#192A56]">Google Play</div>
        </div>
      </a>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg className="absolute -top-24 -right-20 w-[580px]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#192A56">
            <path d="M20 120 L140 60 L260 140 L380 80 L500 140" />
            <circle cx="140" cy="60" r="3" fill="#192A56" />
            <circle cx="260" cy="140" r="3" fill="#192A56" />
            <circle cx="380" cy="80" r="3" fill="#192A56" />
            <circle cx="500" cy="140" r="3" fill="#192A56" />
          </g>
        </svg>
        <svg className="absolute -bottom-20 -left-24 w-[520px]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#192A56">
            <path d="M40 440 L160 380 L280 460 L400 360 L520 420" />
            <circle cx="160" cy="380" r="3" fill="#192A56" />
            <circle cx="280" cy="460" r="3" fill="#192A56" />
            <circle cx="400" cy="360" r="3" fill="#192A56" />
            <circle cx="520" cy="420" r="3" fill="#192A56" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Find Clarity and Guidance from Vetted Astrologers.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#192A56]/80 max-w-xl">
              Connect instantly with trusted experts through live chat, voice, and video calls. Your first 5 minutes are on us.
            </p>
            <StoreButtons />
            <div className="mt-6 flex items-center gap-3 text-sm text-[#192A56]/70">
              <div className="flex -space-x-2">
                <img alt="user1" className="w-8 h-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=80&auto=format&fit=crop" />
                <img alt="user2" className="w-8 h-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=80&auto=format&fit=crop" />
                <img alt="user3" className="w-8 h-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=80&auto=format&fit=crop" />
              </div>
              <span>Trusted by 50,000+ users</span>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md md:max-w-lg aspect-[10/20] sm:aspect-[10/18] bg-white rounded-3xl border border-[#192A56]/10 shadow-lg overflow-hidden">
              <div className="h-10 bg-[#F8F9FA] border-b border-[#192A56]/10 flex items-center justify-center text-xs text-[#192A56]/60">AuraVision App Preview</div>
              <div className="p-5 space-y-4">
                <div className="h-32 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#192A56]/10 flex items-center justify-center text-[#192A56]/50">Secure Chat</div>
                <div className="h-32 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#192A56]/10 flex items-center justify-center text-[#192A56]/50">Expert Profiles</div>
                <div className="h-24 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#192A56]/10 flex items-center justify-center text-[#192A56]/50">Call & Video</div>
              </div>
            </div>
            <div className="absolute -z-10 right-[-20%] top-[-10%] w-64 h-64 rounded-full bg-[#FFC107] opacity-20 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-b border-[#192A56]/10 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] tracking-[0.18em] font-medium text-[#192A56]/60">TRUSTED BY THOUSANDS</div>
          <div className="flex items-center gap-8 opacity-70">
            <div className="h-6 flex items-center font-semibold">TechCrunch</div>
            <div className="h-6 flex items-center font-semibold">YourStory</div>
            <div className="h-6 flex items-center font-semibold">Forbes</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
