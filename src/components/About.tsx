"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
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
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop" 
                  alt="Lotus Flower representing Mind Body Soul" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 md:-right-12 glass p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="text-primary-pink font-outfit font-bold text-lg mb-2">Our Objective</div>
                <p className="text-sm text-dark-green font-medium">
                  "We don't just heal diseases, we heal your entire life."
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

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-white bg-primary-pink rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-pink-600 transition-all transform hover:-translate-y-1"
            >
              Join Today & Bring Change
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
