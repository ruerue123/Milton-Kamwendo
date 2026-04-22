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
            <div className="absolute -bottom-4 right-2 md:-bottom-6 md:right-8 bg-gold px-5 py-4 md:px-8 md:py-6">
              <p className="font-serif font-bold text-2xl md:text-3xl text-primary">20+</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
              Released to Release
              <br />
              the Greatness in You
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Milton Kamwendo is an international transformational speaker,
              best-selling author, strategy consultant, and leadership coach.
              His life purpose is to inspire people to release the greatness
              trapped inside them.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Growth never comes by accident. It is intentional and
              disciplined. Milton partners with leaders and teams who refuse
              to drift — who are ready to define the mission, do the work,
              and march forward with purpose, passion and persistence.
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
