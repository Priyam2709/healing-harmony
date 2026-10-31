"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Play, Sparkles, MapPin, Users, HeartHandshake } from "lucide-react";
import VideoModal from "./VideoModal";

interface EventItem {
  id: string;
  title: string;
  category: string;
  organizer: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  highlights: string[];
}

const organizedEvents: EventItem[] = [
  {
    id: "event-1",
    title: "Community Yoga & Mindful Living Gathering",
    category: "Community Wellness Event",
    organizer: "Organized by Dr. Priyanka Srivastava",
    description:
      "A vibrant wellness event organized by Dr. Priyanka Srivastava, bringing women and families together for synchronized yoga asanas, natural healing awareness, and mindful community bonding.",
    thumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/dr-priyanka-event-1.mp4",
    highlights: ["Group Yogic Movement", "Health Awareness Talks", "Interactive Q&A Session"],
  },
  {
    id: "event-2",
    title: "Holistic Health & Natural Wellness Workshop",
    category: "Health Camp & Workshop",
    organizer: "Organized by Dr. Priyanka Srivastava",
    description:
      "Interactive workshop and wellness camp organized by Dr. Priyanka Srivastava focusing on stress-free living, naturopathy tips, emotional balance, and drug-free health habits.",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "/videos/dr-priyanka-event-2.mp4",
    highlights: ["Stress Relief Techniques", "Diet & Naturopathy Advice", "Community Mindset Coaching"],
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-white via-light-green/30 to-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-[-5%] w-96 h-96 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-primary-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light-green text-dark-green font-semibold text-sm mb-4 border border-emerald-100 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-primary-pink" />
            <span>Community Impact &amp; Outreach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark-green mb-4 leading-tight"
          >
            Events &amp; Workshops <span className="text-primary-pink">Organized by Dr. Priyanka</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Beyond daily virtual sessions, Dr. Priyanka Srivastava regularly hosts transformative public camps, corporate workshops, and community wellness gatherings to inspire sustainable health.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {organizedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Video Thumbnail with Hover Overlay */}
              <div
                onClick={() => setSelectedEvent(event)}
                className="relative aspect-video w-full overflow-hidden cursor-pointer bg-black"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-black/30 to-transparent" />

                {/* Organizer Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-300 text-xs font-bold border border-white/10 flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                    {event.organizer}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-pink text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-pink-600 transition-all duration-300">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-dark-green text-xs font-semibold">
                  {event.category}
                </span>
              </div>

              {/* Event Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-dark-green mb-3 group-hover:text-primary-pink transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Highlight Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-light-green text-dark-green text-xs font-medium border border-primary-green/15"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="text-sm font-bold text-primary-pink hover:text-dark-green flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Watch Event Clip <Play className="w-3.5 h-3.5 fill-current" />
                  </button>

                  <a
                    href="https://wa.me/919214426091?text=Namaste%20Dr.%20Priyanka,%20I%20would%20like%20to%20inquire%20about%20organizing%20or%20joining%20your%20next%20wellness%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-dark-green flex items-center gap-1 underline"
                  >
                    Inquire on WhatsApp →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate / Community Invitation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-dark-green text-white max-w-4xl mx-auto shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-xl sm:text-2xl text-white">
                Want Dr. Priyanka to Organize an Event for Your Group?
              </h4>
              <p className="text-emerald-200 text-xs sm:text-sm mt-1">
                Available for corporate wellness days, school seminars, and residential society yoga camps.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919214426091?text=Namaste%20Dr.%20Priyanka,%20we%20would%20like%20to%20invite%20you%20to%20conduct%20a%20wellness%20workshop/event%20for%20our%20organization."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-primary-pink hover:bg-pink-600 text-white font-bold text-sm rounded-full transition-all shadow-md whitespace-nowrap cursor-pointer transform hover:-translate-y-0.5"
          >
            Invite Dr. Priyanka
          </a>
        </motion.div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(null)}
        videoUrl={selectedEvent?.videoUrl || ""}
        title={selectedEvent?.title || ""}
        subtitle={selectedEvent?.organizer || ""}
        clientName="Dr. Priyanka Srivastava Event"
      />
    </section>
  );
}