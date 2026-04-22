import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const services = [
  {
    title: 'Keynote Speaking',
    description:
      'Keynotes that shift mindsets, not just schedules. Audiences leave with a framework, a challenge, and the courage to act.',
    link: '/speaking',
    image: '/milton5.jpg',
  },
  {
    title: 'Strategy & Consulting',
    description:
      'Close the gap between strategy and execution. Milton partners with leadership teams to turn vision into daily disciplines.',
    link: '/consulting',
    image: '/milton9.jpeg',
  },
  {
    title: 'Workshops & Facilitation',
    description:
      'Hands-on sessions that build mission clarity, forge team alignment, and equip people to march forward together.',
    link: '/consulting',
    image: '/milton10.jpeg',
  },
];

export function ServicesSection() {
  return (
    <section className="py-section-sm md:py-section bg-primary-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4"
          >
            How Milton Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white leading-tight"
          >
            Three Ways to Work Together
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Link
                to={service.link}
                className="group block h-full bg-primary border border-white/5 hover:border-gold/30 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,161,74,0.08)]"
              >
                {/* Image */}
                <div className="relative h-56 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-8">
                  <h3 className="font-serif text-2xl md:text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gold group-hover:text-gold-light transition-colors">
                    Learn More
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
