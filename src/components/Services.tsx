"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartHandshake,
  Activity,
  Brain,
  Sparkles,
  Leaf,
  Utensils,
  SunMedium,
  Smile,
  ArrowRight,
  Check,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: "mind" | "body" | "lifestyle" | "all";
  tagline: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "emotional-healing",
    title: "Emotional Healing & Chakra Balance",
    category: "mind",
    tagline: "Release suppressed tension, heal emotional wounds, and restore inner equilibrium.",
    description:
      "Deeply transformative sessions combining guided visualization, breathwork, and subconscious release to alleviate emotional heaviness, anxiety, and trauma.",
    benefits: ["Release emotional blockages", "Inner peace & mental clarity", "Chakra alignment & spiritual grounding"],
    icon: HeartHandshake,
    accentColor: "bg-pink-50 text-primary-pink border-pink-100",
    badge: "Core Speciality",
  },
  {
    id: "yoga-aerobics",
    title: "Live Online Yoga & Aerobics",
    category: "body",
    tagline: "Invigorating daily virtual batches for flexibility, core strength, and stamina.",
    description:
      "Interactive group and 1-on-1 virtual sessions over Zoom. Includes traditional Hatha/Vinyasa asanas, energizing aerobics, and therapeutic stretching tailored for all ages.",
    benefits: ["Improve flexibility & posture", "Cardio endurance & weight balance", "Daily guided live corrections"],
    icon: Activity,
    accentColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    badge: "Daily Zoom Batches",
  },
  {
    id: "life-counselling",
    title: "Confidential Life & Personal Counselling",
    category: "mind",
    tagline: "A compassionate, safe space to untangle personal, work, and relationship challenges.",
    description:
      "One-on-one confidential discussions over Google Meet/Zoom to help you navigate life transitions, combat burnout, overcome loneliness, and build unshakeable self-confidence.",
    benefits: ["100% confidential & non-judgmental", "Actionable coping mechanisms", "Clarity in decision-making"],
    icon: Smile,
    accentColor: "bg-blue-50 text-blue-700 border-blue-100",
    badge: "Private 1-on-1",
  },
  {
    id: "mindset-coaching",
    title: "Negative Mindset to Positive (Mindshift)",
    category: "mind",
    tagline: "Rewire negative thought loops into constructive, empowering daily beliefs.",
    description:
      "Learn cognitive reframing and mindfulness tools to break free from overthinking, self-doubt, and persistent pessimism, replacing them with joy, purpose, and focus.",
    benefits: ["Break cycles of overthinking", "Cultivate self-worth & resilience", "Daily gratitude & mindfulness routines"],
    icon: Brain,
    accentColor: "bg-purple-50 text-purple-700 border-purple-100",
    badge: "Life-Changing",
  },
  {
    id: "naturopathy",
    title: "Naturopathy & Natural Healing Remedies",
    category: "body",
    tagline: "Stimulate your body's inherent healing intelligence through nature.",
    description:
      "Holistic assessments using traditional natural health principles, detox techniques, herbal wisdom, and hydrotherapy tips to address root causes instead of temporary fixes.",
    benefits: ["Drug-free natural healing", "Gentle detox & gut reset", "Chronic pain & acidity relief"],
    icon: Leaf,
    accentColor: "bg-lime-50 text-lime-800 border-lime-100",
    badge: "Holistic Health",
  },
  {
    id: "diet-nutrition",
    title: "Customized Diet Charts & Recipes",
    category: "lifestyle",
    tagline: "Wholesome, delicious, and culturally aligned nutrition plans for your lifestyle.",
    description:
      "Tailored nutritional guidance designed for your exact health goals, metabolic type, and dietary preferences. No starvation or complicated diets—pure nourishing vitality.",
    benefits: ["Personalized weekly diet charts", "Easy healthy Indian recipes", "Energy & digestion optimization"],
    icon: Utensils,
    accentColor: "bg-amber-50 text-amber-800 border-amber-100",
    badge: "Personalized",
  },
  {
    id: "lifestyle-coaching",
    title: "Lifestyle & Sleep Improvement Coaching",
    category: "lifestyle",
    tagline: "Transform your daily rhythm for sustained vitality, calm, and restful sleep.",
    description:
      "Step-by-step guidance on structuring your morning routines, managing screen time, resolving insomnia naturally, and creating an organized, stress-resilient lifestyle.",
    benefits: ["Overcome insomnia naturally", "High sustained daily energy", "Healthy sustainable habits"],
    icon: SunMedium,
    accentColor: "bg-orange-50 text-orange-800 border-orange-100",
    badge: "Sustainable Habit",
  },
  {
    id: "beauty-wellness",
    title: "Holistic Self-Care & Beauty Tips",
    category: "lifestyle",
    tagline: "Radiate natural beauty from within using organic, skin-loving holistic rituals.",
    description:
      "Learn natural beauty practices, Ayurvedic skincare remedies, facial exercises, and relaxation tips that nourish your skin, hair, and posture without toxic cosmetics.",
    benefits: ["Chemical-free beauty routines", "Facial yoga & relaxation", "Glow through internal health"],
    icon: Sparkles,
    accentColor: "bg-rose-50 text-rose-700 border-rose-100",
    badge: "Self-Care",
  },
];

const categoryTabs = [
  { id: "all", label: "All Services" },
  { id: "mind", label: "Mind & Healing" },
  { id: "body", label: "Body & Movement" },
  { id: "lifestyle", label: "Lifestyle & Nutrition" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  const handleSelectService = (serviceTitle: string) => {
    // Dispatch custom event so Contact form auto-selects this service
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-service", { detail: serviceTitle })
      );
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light-green text-primary-green font-semibold text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary-pink" />
            Holistic Services Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark-green mb-4 leading-tight"
          >
            Empowering Your <span className="text-primary-pink">Mind</span>,{" "}
            <span className="text-primary-green">Body</span> &amp; Soul
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Choose from our specialized online wellness offerings. Every program is delivered 1-on-1 or in intimate group batches via Zoom and Google Meet.
          </motion.p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-primary-green text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Decorative corner aura */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-light-green to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500" />

                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${service.accentColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-outfit text-dark-green mb-2 group-hover:text-primary-pink transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-500 text-xs italic mb-4">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Key Benefits List */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-dark-green font-medium">
                          <Check className="w-3.5 h-3.5 text-primary-green flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <button
                    onClick={() => handleSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-light-green text-dark-green font-bold text-xs hover:bg-primary-green hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group-hover:shadow"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global Online Session Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-dark-green via-emerald-900 to-dark-green text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              Customized Wellness Bundles
            </div>
            <h3 className="text-2xl font-bold font-outfit">
              Need a personalized blend of Yoga + Counselling + Naturopathy?
            </h3>
            <p className="text-gray-300 text-sm mt-1 max-w-xl">
              Dr. Priyanka custom designs private multi-week healing plans tailored exactly to your body type and emotional state.
            </p>
          </div>
          <button
            onClick={() => handleSelectService("Custom Integrated Healing Plan")}
            className="px-8 py-3.5 rounded-full bg-primary-pink hover:bg-pink-600 text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl flex-shrink-0 cursor-pointer"
          >
            Inquire for Custom Plan
          </button>
        </div>

      </div>
    </section>
  );
}
