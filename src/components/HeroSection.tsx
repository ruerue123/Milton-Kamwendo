import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/milton-speaking.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary"></div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-[11px] font-semibold uppercase tracking-[0.3em] mb-8"
        >
          Leadership &middot; Strategy &middot; Transformation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.05] mb-8"
        >
          You Were Not Born
          <br />
          <span className="text-gold">to Play Small</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12"
        >
          Milton Kamwendo delivers transformation through thought, strategy, and
          action — empowering leaders and organizations to achieve greatness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300"
          >
            Book Milton
          </Link>
          <Link
            to="/speaking"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            Explore Speaking
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-neutral-600 to-transparent mx-auto"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </section>
  );
}
