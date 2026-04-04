import React from 'react';
import { motion } from 'framer-motion';

const featuredIn = [
  'Ventureburn',
  'Yahoo! Finance',
  'Zawya',
  'Sharjah Investment Forum',
  'BBC',
  'Bloomberg',
];

export function LogoStrip() {
  return (
    <section className="py-10 md:py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600 text-center mb-8"
        >
          As Featured In
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-6"
        >
          {featuredIn.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-neutral-500 text-lg md:text-xl font-bold tracking-wide hover:text-white/80 transition-colors duration-300 cursor-default whitespace-nowrap"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
