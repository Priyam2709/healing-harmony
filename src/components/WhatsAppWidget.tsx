"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappUrl =
    "https://wa.me/919214426091?text=" +
    encodeURIComponent("Namaste Dr. Priyanka, I would like to inquire about your online wellness sessions.");

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-emerald-100 text-xs font-semibold text-dark-green"
      >
        <img
          src="/images/dr-priyanka-srivastava.jpg"
          alt="Dr. Priyanka Srivastava"
          className="w-7 h-7 rounded-full object-cover border border-emerald-300"
        />
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with Dr. Priyanka</span>
        </div>
      </motion.div>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Priyanka on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-colors group cursor-pointer"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 group-hover:opacity-100" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>
    </aside>
  );
}
