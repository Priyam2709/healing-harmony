"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star, Sparkles, CheckCircle2, Heart, Users, MessageSquareQuote } from "lucide-react";
import VideoModal from "./VideoModal";

interface RealReview {
  id: string;
  clientName: string;
  roleOrLocation: string;
  serviceCategory: string;
  quote: string;
  duration: string;
  rating: number;
  thumbnail: string;
  videoUrl: string;
  sessionMode: string;
}

const realReview: RealReview = {
  id: "review-club-members",
  clientName: "Healing Harmony Club Members",
  roleOrLocation: "Live Virtual Morning Batch",
  serviceCategory: "Online Wellness Club Experience",
  quote:
    "A heartfelt thank you to Dr. Priyanka Srivastava for her warm encouragement, morning motivation, and transformative wellness guidance that keeps us energized, flexible, and positive every day.",
  duration: "Live Testimonial",
  rating: 5,
  thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
  videoUrl: "/videos/club-members-thank-you.mp4",
  sessionMode: "Live Online Zoom & Google Meet Batch",
};

export default function VideoReviews() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="video-reviews" className="py-24 bg-light-green/40 relative overflow-hidden">
      {/* Decorative Aura Backgrounds */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-primary-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary-pink font-semibold text-sm mb-4 shadow-sm border border-pink-100"
          >
            <Sparkles className="w-4 h-4 text-primary-pink" />
            <span>Real Member Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark-green mb-4 leading-tight"
          >
            Words of Gratitude from <span className="text-primary-pink">Our Club Members</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Listen to participants of Dr. Priyanka Srivastava&apos;s daily wellness sessions share their heartfelt appreciation for her personalized care and inspiring guidance.
          </motion.p>
        </div>

        {/* Featured Real Review Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group"
        >
          {/* Video Preview Box */}
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden cursor-pointer bg-neutral-900 flex-shrink-0"
          >
            <img
              src={realReview.thumbnail}
              alt="Healing Harmony Club Members Testimonial"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-pink text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-pink-600 transition-all duration-300">
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                Club Members
              </span>
            </div>

            {/* Duration Badge */}
            <span className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent-gold" />
              {realReview.duration}
            </span>
          </div>

          {/* Testimonial Content */}
          <div className="p-8 sm:p-10 md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Star Rating Strip */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(realReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                ))}
                <span className="text-xs font-bold text-dark-green ml-2 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Verified Member Review
                </span>
              </div>

              {/* Service Tag */}
              <div className="text-xs font-bold text-primary-pink uppercase tracking-wider mb-3">
                {realReview.serviceCategory}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <MessageSquareQuote className="w-10 h-10 text-pink-100 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed relative z-10">
                  &ldquo;{realReview.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Footer with Client Info & Action */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold font-outfit text-dark-green text-lg">
                  {realReview.clientName}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {realReview.roleOrLocation}
                </p>
              </div>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-green hover:bg-emerald-700 text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Video Review</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Assurance */}
        <div className="mt-12 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary-green" />
          <span>Real feedback recorded directly by participants of Healing Harmony Wellness Club.</span>
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={realReview.videoUrl}
        title="Healing Harmony Club Members — Heartfelt Gratitude to Dr. Priyanka"
        subtitle="Live Online Daily Morning Batch Review"
        clientName="Healing Harmony Club Members"
      />
    </section>
  );
}