import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  headline = 'Ready to Move the Needle?',
  subtext = 'Bring Milton to your next conference, boardroom, or leadership programme. Book a keynote, a strategy session, or a workshop that moves people from intention to action.',
  buttonText = 'Book Milton',
  buttonLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative py-section-sm md:py-section overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="/milton1.png"
          alt=""
          className="w-full h-full object-cover opacity-20 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse-gold"></div>

      {/* Floating gold accents */}
      <div className="absolute top-1/4 left-[10%] w-px h-16 bg-gradient-to-b from-gold/20 to-transparent animate-float hidden md:block" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/3 right-[15%] w-px h-12 bg-gradient-to-b from-gold/15 to-transparent animate-float hidden md:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-[8%] w-8 h-px bg-gradient-to-r from-gold/20 to-transparent animate-float hidden md:block" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white mb-6 leading-[1.15] md:leading-[1.1]"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base md:text-lg leading-relaxed font-light mb-10 md:mb-12"
        >
          {subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center px-8 sm:px-12 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300 hover:shadow-[0_0_30px_rgba(201,161,74,0.25)]"
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
