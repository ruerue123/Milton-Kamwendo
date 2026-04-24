import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SparklesIcon, ArrowRightIcon } from 'lucide-react';

export function FeaturedAppBanner() {
  return (
    <section className="relative py-section-sm md:py-section bg-primary-light border-y border-white/5 overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Floating gold accents */}
      <div
        className="absolute top-1/4 right-[8%] w-px h-20 bg-gradient-to-b from-gold/20 to-transparent animate-float hidden md:block"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/4 left-[6%] w-12 h-px bg-gradient-to-r from-gold/20 to-transparent animate-float hidden md:block"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book cover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm w-full">
              {/* Soft glow behind cover */}
              <div className="absolute inset-0 bg-gold/10 blur-2xl scale-90" />

              <motion.img
                src="/books/itstime.png"
                alt="It's Time to Unleash Your Greatness — book cover"
                className="relative w-full h-auto border-l-4 border-gold/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              />

              {/* "Now an app" floating tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-gold text-primary px-5 py-3 shadow-xl"
              >
                <p className="font-serif font-bold text-sm md:text-base leading-none">
                  Soon an App
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Launching pill */}
            <div className="inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 mb-6">
              <SparklesIcon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
              <span className="text-gold text-[11px] font-semibold uppercase tracking-[0.2em]">
                Launching in Days
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white mb-6 leading-[1.1]">
              The book becomes
              <br />
              <span className="gold-shimmer">a daily practice.</span>
            </h2>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              <em className="text-white not-italic font-medium">It's Time to
              Unleash Your Greatness</em> is becoming an app — built to move
              readers from pages to practice. Short prompts, daily
              disciplines, and bold challenges to help you stop drifting and
              start advancing.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed mb-10 max-w-xl">
              Be the first to know when it drops. Join the waitlist and you
              will get early access the day the app goes live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300 hover:shadow-[0_0_30px_rgba(201,161,74,0.25)]"
                >
                  Join the Waitlist
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://www.amazon.com/gp/product/B0DKJZPXTZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-neutral-300 border border-neutral-700 hover:border-gold/40 hover:text-white transition-all duration-300"
                >
                  Read the Book
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
