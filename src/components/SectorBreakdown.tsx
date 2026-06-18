import React from 'react';
import { motion } from 'framer-motion';

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

export function SectorBreakdown() {
  return (
    <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4"
          >
            Who Milton Serves
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight"
          >
            Impact Across Three Sectors
          </motion.h2>
        </div>

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
