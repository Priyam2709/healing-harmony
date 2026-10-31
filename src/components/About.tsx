"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Play, Sparkles } from "lucide-react";
import VideoModal from "./VideoModal";

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-light-green relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-pink rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-black">
                <img 
                  src="/images/dr-priyanka-srivastava.jpg" 
                  alt="Dr. Priyanka Srivastava - Yog n Naturopathy Expert & Holistic Health Coach" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-black/20 to-transparent" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-pink text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-pink-600 transition-all duration-300">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-300 text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Riverbank Solo Practice
                  </div>
                  <h4 className="font-outfit text-xl font-bold">
                    Watch Dr. Priyanka in Action
                  </h4>
                  <p className="text-xs text-gray-200 mt-0.5">
                    Click to play her serene solo yogic flow by the riverbank
                  </p>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 glass p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-white/60">
                <div className="text-primary-pink font-outfit font-bold text-base mb-1">Our Objective</div>
                <p className="text-xs text-dark-green font-medium">
                  &ldquo;We don&apos;t just heal diseases, we heal your entire life.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-primary-green font-semibold text-sm mb-6 shadow-sm">
              Who is this for?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-green font-outfit mb-6 leading-tight">
              For anyone seeking <span className="text-primary-pink">health</span>, <span className="text-primary-green">peace</span>, and <span className="text-accent-gold">energy</span>.
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Healing Harmony Wellness Club is designed for women, children, and people of all ages who want to embrace a healthier lifestyle. <strong>Dr. Priyanka Srivastava</strong>, a dedicated <strong>Yog n Naturopathy Expert &amp; Holistic Health Coach</strong>, brings years of experience in natural therapies and holistic healing.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "We balance your Mind, Body, and Soul.",
                "We provide you with a better and healthy lifestyle.",
                "100% natural therapies and lifestyle coaching."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-green w-6 h-6 flex-shrink-0" />
                  <span className="text-dark-green font-medium text-lg">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-white bg-primary-pink rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-pink-600 transition-all transform hover:-translate-y-1"
              >
                Join Today &amp; Bring Change
              </a>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white text-dark-green hover:text-primary-pink rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-primary-pink" />
                <span>Watch Riverbank Flow</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal for Riverbank Yoga */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="/videos/dr-priyanka-riverbank-yoga.mp4"
        title="Dr. Priyanka Srivastava — Solo Yogic Flow by the Riverbank"
        subtitle="Holistic Asana Alignment & Serene Nature Meditation"
        clientName="Dr. Priyanka Srivastava"
      />
    </section>
  );
}
