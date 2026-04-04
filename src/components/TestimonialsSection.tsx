import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Milton's ability to shift the mindset of our executive team was nothing short of remarkable. His philosophy became our new operational standard.",
    name: 'Sarah Jenkins',
    title: 'CEO, Global Tech Innovations',
  },
  {
    quote:
      "The most impactful strategic facilitation we have ever experienced. Milton doesn't just talk — he guides you to actionable, measurable outcomes.",
    name: 'David Chen',
    title: 'Director of Operations, Pan-African Logistics',
  },
  {
    quote:
      "A masterclass in leadership and resilience. Milton's keynote left our entire organization energized and ready to tackle the challenges ahead.",
    name: 'Elena Rodriguez',
    title: 'VP of Human Resources, Financial Solutions Inc.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            Impact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white">
            What Leaders Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-primary p-8 md:p-10"
            >
              <div className="w-8 h-[2px] bg-gold mb-8"></div>
              <p className="text-neutral-300 text-lg leading-relaxed mb-10 font-light">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-neutral-500 text-xs mt-1">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
