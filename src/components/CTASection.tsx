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
  headline = 'Bring Milton to Your Organisation',
  subtext = 'Transform your next event, strategy session, or leadership programme with a keynote that moves people to action.',
  buttonText = 'Book Milton',
  buttonLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative py-section-sm md:py-section overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/milton-proffessional.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white mb-6"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-lg leading-relaxed font-light mb-12"
        >
          {subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to={buttonLink}
            className="inline-flex items-center justify-center px-12 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
