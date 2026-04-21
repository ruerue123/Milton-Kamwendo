import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/milton5.jpg', alt: 'Milton Kamwendo speaking on stage' },
  { src: '/milton1.png', alt: 'Milton Kamwendo professional portrait' },
  { src: '/milton11.jpeg', alt: 'Milton Kamwendo speaking to audience' },
  { src: '/milton8.jpeg', alt: 'Milton Kamwendo speaking passionately' },
];

export function ImageStrip() {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
