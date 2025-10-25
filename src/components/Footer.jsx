import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-[#192A56]/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded bg-[#FFC107]" aria-hidden></span>
            <span className="font-semibold text-lg">AuraVision</span>
          </div>
          <p className="mt-3 text-sm text-[#192A56]/75 max-w-xs">Our mission is to make trusted, personalized astrology guidance accessible to everyone—anytime, anywhere.</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-[#192A56]/80">
            <li><a href="#" className="hover:opacity-80">About Us</a></li>
            <li><a href="#" className="hover:opacity-80">Careers</a></li>
            <li><a href="#" className="hover:opacity-80">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Support</div>
          <ul className="space-y-2 text-sm text-[#192A56]/80">
            <li><a href="#" className="hover:opacity-80">FAQ</a></li>
            <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
            <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Follow Us</div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#F8F9FA] border border-[#192A56]/10 flex items-center justify-center hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.4-4.11 11.63-11.63 11.63-2.313 0-4.46-.67-6.266-1.82.324.038.636.05.972.05a8.23 8.23 0 0 0 5.1-1.757 4.116 4.116 0 0 1-3.842-2.852c.25.038.5.063.763.063.362 0 .724-.05 1.062-.138A4.108 4.108 0 0 1 2.8 9.54v-.05c.549.3 1.186.487 1.86.512A4.102 4.102 0 0 1 2.79 7.04c0-.762.2-1.463.55-2.072a11.678 11.678 0 0 0 8.474 4.3 4.625 4.625 0 0 1-.1-.94 4.108 4.108 0 0 1 7.11-2.81 8.1 8.1 0 0 0 2.607-.997 4.124 4.124 0 0 1-1.806 2.27 8.216 8.216 0 0 0 2.368-.636 8.845 8.845 0 0 1-2.36 2.142z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#F8F9FA] border border-[#192A56]/10 flex items-center justify-center hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.657 0 3 1.343 3 3v10c0 1.657-1.343 3-3 3H7c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#F8F9FA] border border-[#192A56]/10 flex items-center justify-center hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3h14zM8.34 18v-7.2H6V18h2.34zM7.17 9.74c.74 0 1.2-.5 1.2-1.12-.01-.64-.46-1.13-1.18-1.13S6 7.98 6 8.62c0 .62.47 1.12 1.16 1.12h.01zM18 18v-4.02c0-2.15-1.15-3.16-2.68-3.16-1.23 0-1.78.68-2.09 1.16V10.8H11c.03.66 0 7.2 0 7.2h2.24v-4.02c0-.21.02-.42.08-.57.17-.42.55-.86 1.2-.86.85 0 1.19.65 1.19 1.62V18H18z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#192A56]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-[#192A56]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} AuraVision. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">Security</a>
            <a href="#" className="hover:opacity-80">Status</a>
            <a href="#" className="hover:opacity-80">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
