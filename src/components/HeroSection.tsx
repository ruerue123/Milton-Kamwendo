import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src="/milton6.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary"></div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Floating gold accents */}
      <div className="absolute top-1/4 left-[8%] w-px h-20 bg-gradient-to-b from-gold/20 to-transparent animate-float hidden md:block" />
      <div
        className="absolute bottom-1/3 right-[12%] w-px h-16 bg-gradient-to-b from-gold/15 to-transparent animate-float hidden md:block"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/3 right-[6%] w-10 h-px bg-gradient-to-r from-gold/20 to-transparent animate-float hidden md:block"
        style={{ animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-[11px] font-semibold uppercase tracking-[0.3em] mb-8"
        >
          Inspiring Greatness &middot; Strategy &middot; Growth
        </motion.p>

        {/* Floating gold diamond accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="w-2 h-2 bg-gold/40 rotate-45 animate-pulse-gold" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8"
        >
          <motion.span
            className="block overflow-hidden"
          >
            <motion.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Stop Drifting.
            </motion.span>
          </motion.span>
          <motion.span
            className="block overflow-hidden"
          >
            <motion.span
              className="block gold-shimmer"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Start Advancing.
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10 md:mb-12"
        >
          Greatness is not an accident. It is the result of intentional steps,
          persistent effort, and purpose-driven pursuit. Milton Kamwendo helps
          leaders and teams release the greatness trapped within them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300"
            >
              Book Milton
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/speaking"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-300 border border-neutral-700 hover:border-gold/40 hover:text-white transition-all duration-300"
            >
              Hunt for Greatness
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent mx-auto"
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </section>
  );
}
