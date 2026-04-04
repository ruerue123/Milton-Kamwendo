import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/milton-speaking.jpeg', alt: 'Milton Kamwendo speaking on stage' },
  { src: '/milton-proffessional.jpeg', alt: 'Milton Kamwendo professional portrait' },
  { src: '/milton-outdoor.jpeg', alt: 'Milton Kamwendo outdoors' },
  { src: '/milton2-casual.jpeg', alt: 'Milton Kamwendo casual portrait' },
];

export function ImageStrip() {
  return (
    <section className="bg-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4"
      >
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
