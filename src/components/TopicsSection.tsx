import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const topics = [
  {
    number: '01',
    title: 'Leadership Excellence',
    description: 'Navigating complexity with clarity, courage, and conviction.',
  },
  {
    number: '02',
    title: 'Innovation & Strategic Thinking',
    description: 'Designing future-proof strategies that drive organizational growth.',
  },
  {
    number: '03',
    title: 'Personal Mastery',
    description: 'Unlocking potential, overcoming limitations, and stepping into greatness.',
  },
  {
    number: '04',
    title: 'Organizational Transformation',
    description: 'Building resilient cultures that sustain high performance.',
  },
  {
    number: '05',
    title: 'Team Alignment',
    description: 'Forging unbreakable bonds and aligning talent toward a powerful vision.',
  },
  {
    number: '06',
    title: 'Resilience & Execution',
    description: 'Cultivating the discipline to move from intention to measurable impact.',
  },
];

export function TopicsSection() {
  return (
    <section className="relative py-section-sm md:py-section overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/milton11.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-primary/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Signature Topics
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white">
              What Milton Speaks On
            </h2>
          </div>
          <Link
            to="/speaking"
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors"
          >
            View All Topics &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-primary p-8 md:p-10 group hover:bg-primary-light transition-colors duration-500"
            >
              <span className="text-gold/30 font-serif text-5xl font-bold">
                {topic.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-4 mb-3">
                {topic.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
