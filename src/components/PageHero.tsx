import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  backgroundImage = '/milton-speaking.jpeg',
}: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-30 bg-primary overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover opacity-15 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary"></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display-sm md:text-display font-serif font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
