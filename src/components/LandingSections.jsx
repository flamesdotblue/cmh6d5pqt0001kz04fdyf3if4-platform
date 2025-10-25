import React from 'react'
import { User, Search, MessageSquare, Video, Shield, Lock, BadgeCheck, Star } from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      icon: <User className="w-6 h-6" />, title: 'Create Your Profile', text: 'Sign up in seconds and tell us your birth details to get personalized insights.'
    },
    {
      icon: <Search className="w-6 h-6" />, title: 'Choose Your Expert', text: 'Browse our list of certified and rigorously vetted astrologers. Read reviews and find your perfect match.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />, title: 'Begin Your Consultation', text: 'Connect instantly via chat, voice, or video. Get the guidance you need, right when you need it.'
    },
  ]

  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Start Your Journey in Three Simple Steps.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl bg-white border border-[#192A56]/10 p-6 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-full bg-[#FFC107]/20 text-[#192A56] flex items-center justify-center">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-[#192A56]/75 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertsCarousel() {
  const experts = [
    { name: 'Ananya Sharma', spec: 'Vedic Astrology, Numerology', rating: 4.9, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Rahul Mehta', spec: 'KP Astrology, Tarot', rating: 4.8, img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Priya Kapoor', spec: 'Vedic, Relationship Guidance', rating: 5.0, img: 'https://images.unsplash.com/photo-1541214113241-7f4bfaad5d8c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Arjun Rao', spec: 'Financial Astrology', rating: 4.7, img: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sana Qureshi', spec: 'Horary, Career', rating: 4.9, img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=400&auto=format&fit=crop' },
  ]

  return (
    <section id="experts" className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Meet Our Top-Rated Experts.</h2>
        <div className="mt-8 overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-5 snap-x snap-mandatory">
            {experts.map((e, idx) => (
              <article key={idx} className="snap-start shrink-0 w-[260px] bg-white border border-[#192A56]/10 rounded-xl shadow-sm overflow-hidden hover:shadow transition">
                <div className="h-40 w-full bg-gray-100">
                  <img src={e.img} alt={e.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{e.name}</h3>
                    <span className="inline-flex items-center gap-1 text-sm"><Star className="w-4 h-4 text-[#FFC107]" />{e.rating.toFixed(1)}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#192A56]/70">{e.spec}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#192A56] bg-[#FFC107]/25 px-2 py-1 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5" /> Verified Expert
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { icon: <Lock className="w-6 h-6" />, title: '100% Private & Confidential', text: 'All your conversations are end-to-end encrypted. Your privacy is our top priority.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Rigorous Vetting Process', text: 'Every expert on AuraVision undergoes a strict screening process to ensure authenticity and expertise.' },
    { icon: <Video className="w-6 h-6" />, title: 'Transparent Per-Minute Billing', text: 'No hidden fees. You see the cost upfront and are only charged for the time you use.' },
  ]

  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">A Platform Built for Trust and Privacy.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="rounded-xl bg-white border border-[#192A56]/10 p-6 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-full bg-[#FFC107]/20 text-[#192A56] flex items-center justify-center">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-[#192A56]/75 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="download" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px]" viewBox="0 0 700 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#192A56">
            <path d="M20 160 L120 120 L220 150 L320 110 L420 150 L520 120 L620 160" />
            <circle cx="120" cy="120" r="3" fill="#192A56" />
            <circle cx="320" cy="110" r="3" fill="#192A56" />
            <circle cx="520" cy="120" r="3" fill="#192A56" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Find Your Path?</h2>
        <p className="mt-3 text-[#192A56]/80">Download AuraVision today and connect with an expert who can help you navigate life's biggest questions.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-[#FFC107] text-[#192A56] px-5 py-3 font-medium shadow-sm hover:brightness-95">Download on the App Store</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-md border border-[#192A56]/10 bg-white text-[#192A56] px-5 py-3 font-medium shadow-sm hover:shadow">Get it on Google Play</a>
        </div>
      </div>
    </section>
  )
}

function LandingSections() {
  return (
    <div>
      <HowItWorks />
      <ExpertsCarousel />
      <Features />
      <FinalCTA />
    </div>
  )
}

export default LandingSections
