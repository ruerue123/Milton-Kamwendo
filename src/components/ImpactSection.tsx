import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 25, suffix: '', label: 'Year Record', sub: 'of facilitation impact' },
  { value: 500, suffix: '+', label: 'Clients Served', sub: 'across three sectors' },
  { value: 30, suffix: '+', label: 'Countries', sub: 'on four continents' },
  { value: 10, suffix: '+', label: 'Books Published', sub: 'plus a weekly column' },
];

const sectors = [
  {
    title: 'United Nations System',
    body:
      'FAO, UNDP, UNICEF, UN Women, WFP, UNFPA, UNHCR, WHO, UNOPS and UN Country Teams across Africa — from high-level dialogues to regional retreats.',
  },
  {
    title: 'Private Sector',
    body:
      'Seed Co, ZHL Group, ART Corporation, TSL Limited, AFC Holdings, Zamtel, Old Mutual, Econet, Delta, Stanbic, CBZ and many more — group and business-unit strategy.',
  },
  {
    title: 'Civil Society & Government',
    body:
      'Plan International, HIVOS, ICRC, Search for Common Ground, ECOWAS, ECOSOC and national institutions — strategy, dialogue and team-building.',
  },
];

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

function StatItem({ stat, delay }: { stat: typeof stats[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="text-center"
    >
      <p className="font-serif font-bold text-4xl md:text-5xl text-gold mb-2">
        {count}
        {stat.suffix}
      </p>
      <p className="text-white text-[12px] font-semibold uppercase tracking-[0.2em] mb-1">
        {stat.label}
      </p>
      <p className="text-neutral-500 text-xs">{stat.sub}</p>
    </motion.div>
  );
}

export function ImpactSection() {
  return (
    <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4"
          >
            Impact at a Glance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white leading-tight"
          >
            A Record That Moves the Needle
          </motion.h2>
        </div>

        {/* Headline stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Sector breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-primary-light p-8 md:p-10"
            >
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                {sector.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {sector.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
