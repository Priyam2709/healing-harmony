"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarti S.",
    role: "Yoga Participant",
    text: "Dr. Priyanka's sessions have completely transformed my mornings. I feel more energetic and peaceful throughout the day. The online format is so convenient!",
  },
  {
    name: "Rohan M.",
    role: "Lifestyle Coaching Client",
    text: "The holistic approach to health is exactly what I needed. It's not just about diet; it's about changing my entire mindset. Highly recommended.",
  },
  {
    name: "Meera K.",
    role: "Naturopathy Patient",
    text: "I was struggling with stress and poor health. The naturopathy treatments and guidance helped me recover naturally. Healing Harmony is a blessing.",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-50 text-primary-pink mb-6"
          >
            <Quote className="w-8 h-8 fill-current" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-dark-green font-outfit mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real stories from people who have transformed their lives through our natural and holistic methods.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-light-green/30 p-8 rounded-3xl border border-primary-green/10 relative"
            >
              <div className="flex gap-1 text-accent-gold mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-lg font-outfit">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
