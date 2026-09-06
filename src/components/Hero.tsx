"use client";

import { motion } from "framer-motion";
import { Sparkles, CalendarCheck, MessageCircle, Video, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Decorative Gradient Auras */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-light-green via-white to-light-pink/30 -z-10" />
      <div className="absolute top-10 right-[-5%] w-[450px] h-[450px] bg-primary-pink/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[550px] h-[550px] bg-primary-green/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-primary-green text-xs sm:text-sm font-bold mb-6 border border-emerald-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-pink" />
              <span>Holistic Health for Mind • Body • Soul</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold text-dark-green leading-[1.15] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform Your Life with{" "}
            <span className="text-primary-pink underline decoration-pink-300 decoration-wavy underline-offset-8">
              Emotional Healing
            </span>
            , Yoga &amp; Counselling
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Embrace sustainable wellness, release emotional stress, and revitalize your health naturally with <strong>Dr. Priyanka Saxena</strong>. All consultations and daily batches conducted 100% online globally via <strong>Zoom &amp; Google Meet</strong>.
          </motion.p>
          
          {/* Action CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary-green text-white rounded-full font-bold text-sm sm:text-base hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book Online Session</span>
            </a>

            <a
              href="https://wa.me/918400805288"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-emerald-600 text-white rounded-full font-bold text-sm sm:text-base hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp (8400805288)</span>
            </a>
          </motion.div>

          {/* Social Proof Strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-1 text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>5.0 Rating by 300+ Transformed Online Clients</span>
            <span className="hidden sm:inline">•</span>
            <a href="#video-reviews" className="text-primary-pink underline font-bold hover:text-dark-green">
              Watch Video Stories
            </a>
          </div>
        </div>

        {/* Visual Showcase Card */}
        <motion.div 
          className="flex-1 w-full max-w-md lg:max-w-none relative z-10"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-square max-w-[440px] mx-auto rounded-3xl p-4 border-4 border-white/60 shadow-2xl glass">
            {/* Visual Image */}
            <div className="absolute inset-0 m-4 rounded-2xl overflow-hidden bg-gradient-to-tr from-light-pink to-light-green">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Holistic Yoga & Meditation" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-emerald-300 font-bold mb-1">
                  Founder &amp; Holistic Healer
                </div>
                <h3 className="font-outfit text-2xl font-bold">
                  Dr. Priyanka Saxena
                </h3>
                <p className="text-xs text-gray-200 mt-1">
                  Specialist in Emotional Release, Asana Therapy &amp; Mindset Transformation
                </p>
              </div>
            </div>
            
            {/* Top Floating Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-pink-100"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            >
              <div className="text-primary-pink font-bold text-lg leading-tight">100%</div>
              <div className="text-[11px] text-gray-600 font-semibold">Natural &amp; Drug-Free</div>
            </motion.div>
            
            {/* Bottom Floating Platform Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <div className="text-dark-green font-bold text-sm">Live Video Sessions</div>
                <div className="text-xs text-gray-500 font-medium">Zoom &amp; Google Meet Online</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
