"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Video, Users, Clock, MonitorCheck, Sparkles } from "lucide-react";
import VideoModal from "./VideoModal";

interface SessionVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  platform: "Zoom" | "Google Meet";
  format: "Group Live Batch" | "1-on-1 Private Session";
  description: string;
  thumbnail: string;
  videoUrl: string;
}

const sessionVideos: SessionVideo[] = [
  {
    id: "session-riverbank",
    title: "Nature & Soul: Solo Riverbank Yogic Flow",
    category: "Solo Nature Flow",
    duration: "Master Practice",
    platform: "Zoom",
    format: "1-on-1 Private Session",
    description: "Dr. Priyanka Srivastava practicing traditional grounding asanas in pristine nature by the riverbank. Demonstrating breath synchronization, flexibility, and meditative flow.",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/dr-priyanka-riverbank-yoga.mp4",
  },
  {
    id: "session-1",
    title: "Bollywood Beats Yoga & Rhythmic Asana Flow",
    category: "Bollywood Yoga & Aerobics",
    duration: "Live Session Clip",
    platform: "Zoom",
    format: "Group Live Batch",
    description: "Daily energizing virtual batch combining traditional asanas, spine mobility, and cardio stamina set to upbeat Bollywood tunes.",
    thumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/bollywood-yoga-session-1.mp4",
  },
  {
    id: "session-2",
    title: "High-Energy Bollywood Aerobics & Full Body Fitness",
    category: "Bollywood Aerobics & Stamina",
    duration: "Live Session Clip",
    platform: "Zoom",
    format: "Group Live Batch",
    description: "Fun, high-stamina cardio aerobics and dynamic stretches synchronized to Bollywood beats, suitable for women and all age groups.",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/bollywood-yoga-session-2.mp4",
  },
  {
    id: "session-3",
    title: "Rhythmic Yoga Postures & Mindful Cool-Down",
    category: "Rhythmic Yoga & Pranayama",
    duration: "Live Session Clip",
    platform: "Google Meet",
    format: "Group Live Batch",
    description: "Harmonizing flexibility, core posture, and breath regulation with uplifting melodies to leave you refreshed all day.",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/bollywood-yoga-session-3.mp4",
  },
  {
    id: "session-4",
    title: "Cardio Dance Yoga & Dynamic Core Conditioning",
    category: "Bollywood Fitness Fusion",
    duration: "Live Session Clip",
    platform: "Zoom",
    format: "Group Live Batch",
    description: "Interactive live routine integrating energetic Bollywood dance steps with holistic yogic muscle toning and warmups.",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/bollywood-yoga-session-4.mp4",
  },
  {
    id: "session-5",
    title: "Morning Bollywood Groove & Spine Flexibility Batch",
    category: "Morning Mobility & Yoga",
    duration: "Live Session Clip",
    platform: "Zoom",
    format: "Group Live Batch",
    description: "Gentle morning joint activations and rhythmic movement to popular music, tailored for building daily consistency.",
    thumbnail: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/bollywood-yoga-session-5.mp4",
  },
];

export default function SessionGallery() {
  const [selectedSession, setSelectedSession] = useState<SessionVideo | null>(null);

  return (
    <section id="sessions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light-green text-dark-green font-semibold text-sm mb-4">
              <Video className="w-4 h-4 text-primary-green" />
              Live Online Experience
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark-green mb-4 leading-tight">
              A Glimpse Into <span className="text-primary-green">Our Live Sessions</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Explore short clips from our real live online sessions. All programs are conducted seamlessly from the comfort of your home via Zoom and Google Meet.
            </p>
          </div>

          {/* Badge & Quick Stats */}
          <div className="bg-light-green/50 p-4 rounded-2xl border border-primary-green/15 flex items-center gap-4 self-start md:self-auto">
            <div className="w-12 h-12 rounded-xl bg-dark-green text-white flex items-center justify-center">
              <MonitorCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary-green">
                100% Online Global Access
              </div>
              <div className="text-sm font-semibold text-dark-green">
                Zoom & Google Meet Ready
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessionVideos.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-primary-green/30 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Thumbnail with interactive hover */}
              <div
                onClick={() => setSelectedSession(session)}
                className="relative aspect-video w-full overflow-hidden cursor-pointer bg-black"
              >
                <img
                  src={session.thumbnail}
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Platform & Format Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                    <Video className="w-3 h-3 text-emerald-400" />
                    Via {session.platform}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-dark-green text-xs font-semibold shadow-sm">
                    {session.format}
                  </span>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {session.duration}
                </span>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-green text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-primary-pink transition-all duration-300">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-primary-pink uppercase tracking-wider mb-2">
                    {session.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-dark-green mb-3 group-hover:text-primary-green transition-colors">
                    {session.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {session.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                    Preview Available
                  </span>
                  <button
                    onClick={() => setSelectedSession(session)}
                    className="text-sm font-bold text-dark-green group-hover:text-primary-pink flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Play Session Clip <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedSession)}
        onClose={() => setSelectedSession(null)}
        videoUrl={selectedSession?.videoUrl || ""}
        title={selectedSession?.title || ""}
        subtitle={selectedSession ? `${selectedSession.format} • ${selectedSession.platform}` : ""}
      />
    </section>
  );
}
