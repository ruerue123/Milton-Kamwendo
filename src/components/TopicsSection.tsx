import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const topics = [
  {
    number: '01',
    title: 'Hunt for Greatness',
    description:
      'Why playing small is the greatest risk — and the disciplines that pull greatness out of hiding.',
  },
  {
    number: '02',
    title: 'Move the Needle',
    description:
      'Small changes lead to great destinations. The steps that turn intention into measurable impact.',
  },
  {
    number: '03',
    title: 'Think Like a Soldier',
    description:
      'Mission clarity, discipline, resilience, and the victory mindset that forges leaders under fire.',
  },
  {
    number: '04',
    title: 'Unlock the Next Level',
    description:
      'How teams break through invisible ceilings by refusing to drift and committing to the climb.',
  },
  {
    number: '05',
    title: 'Communicate for Greatness',
    description:
      'Every time you communicate you are auditioning for leadership. Speak, listen, and lead like it.',
  },
  {
    number: '06',
    title: 'Strategy That Moves',
    description:
      'Closing the gap between knowing and doing — because the world does not reward plans, it rewards action.',
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white leading-tight">
              The Playbooks Milton Teaches
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
