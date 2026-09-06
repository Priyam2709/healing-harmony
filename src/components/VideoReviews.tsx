"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Sparkles, CheckCircle2, MessageSquareQuote } from "lucide-react";
import VideoModal from "./VideoModal";

interface VideoReview {
  id: string;
  clientName: string;
  roleOrLocation: string;
  serviceCategory: string;
  categoryTag: "all" | "healing" | "yoga" | "counselling" | "naturopathy";
  quote: string;
  duration: string;
  rating: number;
  thumbnail: string;
  videoUrl: string;
  sessionMode: string;
}

const videoReviews: VideoReview[] = [
  {
    id: "review-1",
    clientName: "Aarti Sharma",
    roleOrLocation: "Delhi NCR • Online Zoom Client",
    serviceCategory: "Emotional Healing & Mindset",
    categoryTag: "healing",
    quote: "After months of feeling overwhelmed and restless, Dr. Priyanka's chakra and emotional healing sessions helped me discover profound inner stillness and emotional freedom.",
    duration: "3:45",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    sessionMode: "1-on-1 Zoom Session",
  },
  {
    id: "review-2",
    clientName: "Rohan & Shalini Mehta",
    roleOrLocation: "Mumbai • Regular Morning Batch",
    serviceCategory: "Yoga & Aerobics Sessions",
    categoryTag: "yoga",
    quote: "The virtual yoga batch feels like a personalized private studio in our living room. My chronic posture issues and stiff neck vanished within three weeks.",
    duration: "2:30",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    sessionMode: "Daily Live Zoom Batch",
  },
  {
    id: "review-3",
    clientName: "Priya Nair",
    roleOrLocation: "Bengaluru • Tech Professional",
    serviceCategory: "Confidential Life Counselling",
    categoryTag: "counselling",
    quote: "She holds a completely safe, compassionate space without any judgment. Her guidance helped me navigate corporate burnout and rediscover confidence.",
    duration: "4:15",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    sessionMode: "Google Meet Private Call",
  },
  {
    id: "review-4",
    clientName: "Meera Kapur",
    roleOrLocation: "Jaipur • Homemaker",
    serviceCategory: "Naturopathy & Diet Therapy",
    categoryTag: "naturopathy",
    quote: "Her natural remedies and personalized diet chart fixed my gut issues and daily fatigue naturally without dependency on medicines. Highly recommended!",
    duration: "3:10",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    sessionMode: "Google Meet Consultation",
  },
  {
    id: "review-5",
    clientName: "Vikram Joshi",
    roleOrLocation: "Dubai, UAE • International Client",
    serviceCategory: "Negative Mindset to Positive",
    categoryTag: "healing",
    quote: "Living abroad with high stress, her online sessions were a lifeline. She taught me practical cognitive shifts that reshaped how I view every challenge.",
    duration: "3:55",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    sessionMode: "International Zoom Consultation",
  },
  {
    id: "review-6",
    clientName: "Sunita & Ananya",
    roleOrLocation: "Lucknow • Mother & Daughter",
    serviceCategory: "Holistic Health & Yoga",
    categoryTag: "yoga",
    quote: "We exercise and meditate together every morning on Dr. Priyanka's Zoom call. It has not only improved our flexibility but deepened our bond.",
    duration: "2:45",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    sessionMode: "Live Online Family Session",
  },
];

const filterCategories = [
  { id: "all", label: "All Reviews" },
  { id: "healing", label: "Emotional Healing" },
  { id: "yoga", label: "Yoga & Aerobics" },
  { id: "counselling", label: "Life Counselling" },
  { id: "naturopathy", label: "Naturopathy & Diet" },
];

export default function VideoReviews() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<VideoReview | null>(null);

  const filteredReviews =
    activeFilter === "all"
      ? videoReviews
      : videoReviews.filter((r) => r.categoryTag === activeFilter);

  return (
    <section id="video-reviews" className="py-24 bg-light-green/40 relative overflow-hidden">
      {/* Decorative Aura Backgrounds */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-primary-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary-pink font-semibold text-sm mb-4 shadow-sm border border-pink-100"
          >
            <Sparkles className="w-4 h-4 text-primary-pink" />
            Client Video Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark-green mb-4 leading-tight"
          >
            Real Experiences, <span className="text-primary-pink">Real Transformations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Watch former clients share their heartfelt journeys of overcoming anxiety, pain, and stress through Dr. Priyanka&apos;s online holistic sessions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-dark-green text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Video Preview / Poster */}
                <div
                  onClick={() => setSelectedVideo(review)}
                  className="relative aspect-video w-full overflow-hidden cursor-pointer bg-neutral-900"
                >
                  <img
                    src={review.thumbnail}
                    alt={`${review.clientName} review`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-dark-green group-hover:bg-primary-pink group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-semibold">
                    {review.duration}
                  </span>

                  {/* Service Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-dark-green text-xs font-semibold shadow-sm">
                    {review.serviceCategory}
                  </span>
                </div>

                {/* Content & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 font-medium ml-1.5">
                        Verified Review
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  {/* Client Metadata */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-dark-green text-base">
                        {review.clientName}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {review.roleOrLocation}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedVideo(review)}
                      className="text-xs font-bold text-primary-pink hover:text-dark-green flex items-center gap-1 transition-colors"
                    >
                      Watch Video →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Assurance */}
        <div className="mt-12 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary-green" />
          <span>All client video reviews recorded after successful online Zoom & Google Meet wellness programs.</span>
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl || ""}
        title={selectedVideo ? `${selectedVideo.clientName} - Client Experience Video` : ""}
        subtitle={selectedVideo ? `${selectedVideo.serviceCategory} • ${selectedVideo.sessionMode}` : ""}
        clientName={selectedVideo?.clientName}
      />
    </section>
  );
}
