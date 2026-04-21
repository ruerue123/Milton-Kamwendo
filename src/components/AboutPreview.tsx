import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="py-section-sm md:py-section bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="/milton11.jpeg"
                alt="Milton Kamwendo"
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-gold px-8 py-6">
              <p className="font-serif font-bold text-3xl text-primary">20+</p>
              <p className="text-primary/70 text-[10px] uppercase tracking-[0.2em] font-semibold">
                Years of Impact
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              About Milton
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              A Catalyst for
              <br />
              Organizational Greatness
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Milton Kamwendo is a leading international transformational speaker,
              best-selling author, and strategy consultant. With decades of
              experience, he partners with forward-thinking leaders to navigate
              complex challenges and execute strategies that deliver results.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-10">
              His philosophy is rooted in{' '}
              <span className="text-gold font-medium">Acta non Verba</span> —
              deeds, not words — challenging leaders to multiply action, not
              rhetoric.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors group"
            >
              Read Full Story
              <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
