"use client";

import { Leaf, MessageCircle, Video } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-primary-pink h-8 w-8" />
              <span className="font-outfit text-2xl font-bold">
                Healing Harmony
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-sm leading-relaxed">
              Holistic Health for Mind • Body • Soul. Led by Dr. Priyanka Saxena. Offering online emotional healing, yoga, life counselling, and naturopathy globally via Zoom and Google Meet.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-pink transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-pink transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-pink transition-colors">
                <TwitterIcon />
              </a>
              <a
                href="https://wa.me/918400805288"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-base font-bold font-outfit mb-4 text-emerald-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Specialized Services</a></li>
              <li><a href="#video-reviews" className="text-gray-300 hover:text-white transition-colors">Client Video Stories</a></li>
              <li><a href="#sessions" className="text-gray-300 hover:text-white transition-colors">Live Session Previews</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Dr. Priyanka</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Book Online Session</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-base font-bold font-outfit mb-4 text-emerald-400">Online Consultations</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Dr. Priyanka Saxena</span>
              </li>
              <li className="flex items-center gap-2">
                <Video className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Live via Zoom &amp; Google Meet</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/918400805288" className="hover:text-emerald-300 underline font-semibold">
                  WhatsApp: +91 8400805288
                </a>
              </li>
              <li className="text-xs text-gray-400 pt-2">
                Available worldwide across all time zones with pre-booked slots.
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Healing Harmony Wellness Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
