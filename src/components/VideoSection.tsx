import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-section-sm md:py-section bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              See Milton in Action
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Experience the Impact
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md">
              Watch how Milton transforms audiences with keynotes that combine
              strategic depth, powerful storytelling, and a relentless call to action.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="/milton2.jpeg"
                alt="Milton Kamwendo"
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-gold/30"
              />
              <div>
                <p className="text-white font-semibold text-sm">Milton Kamwendo</p>
                <p className="text-neutral-500 text-xs">Speaker · Author · Strategist</p>
              </div>
            </div>
          </motion.div>

          {/* Video side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-video bg-primary-mid border border-white/5 overflow-hidden group cursor-pointer"
          >
            <img
              src="/milton11.jpeg"
              alt="Milton Kamwendo speaking"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-gold/60 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-300 bg-primary/30 backdrop-blur-sm">
                <PlayIcon className="w-8 h-8 text-gold ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white/60 text-sm">Featured Keynote</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
