import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { CTASection } from '../components/CTASection';
import { SectorBreakdown } from '../components/SectorBreakdown';
import { ArrowRightIcon } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const achievements = [
  { value: 25, suffix: '', label: 'Year Record' },
  { value: 10, suffix: '+', label: 'Books Published' },
  { value: 30, suffix: '+', label: 'Countries' },
  { value: 500, suffix: '+', label: 'Clients Served' },
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

function StatItem({ stat, delay }: { stat: typeof achievements[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="text-center"
    >
      <p className="font-serif font-bold text-3xl text-white mb-1">
        {count}{stat.suffix}
      </p>
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
        {stat.label}
      </p>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <section className="py-12 bg-primary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((stat, i) => (
            <StatItem key={i} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  useDocumentMeta(
    'About',
    'Milton Kamwendo is a workshop facilitator, strategy & innovation consultant, transformational speaker, and best-selling author with a 25-year record of facilitation impact across more than 500 clients worldwide.'
  );
  return (
    <PageTransition>
      {/* Opening Statement */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-30 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/milton6.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-15 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-8"
          >
            About Milton Kamwendo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-display-sm lg:text-display font-serif font-bold text-white mb-6 md:mb-8 leading-[1.15] md:leading-[1.05]"
          >
            Inspiring the Greatness
            <br />
            Trapped Inside You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light"
          >
            Milton is a workshop facilitator, strategy &amp; innovation
            consultant, transformational speaker, and best-selling author with a
            25-year record of facilitation impact. His life purpose is to
            motivate and inspire people to unleash their greatness.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />


      {/* Story Section */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative">
                <img
                  src="/milton11.jpeg"
                  alt="Milton Kamwendo"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary to-transparent"></div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
                The Journey
              </p>
              <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white mb-10">
                A Mission to Release Greatness
              </h2>

              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  Milton Kamwendo is an accomplished, high-energy in-person,
                  online and hybrid workshop facilitator, strategy development
                  consultant and motivating team-builder with a 25-year record
                  of facilitation impact. He connects easily with his audience,
                  stimulates total participation, and produces content-rich,
                  client-tailored interventions with productive outcomes.
                </p>
                <p>
                  In 2003 he founded his consultancy firm, <em className="text-white not-italic">Insignia
                  Strategy Consulting / Innov8 Consultoria</em>. Since then he has
                  developed training workshops, facilitated staff retreats,
                  team-building sessions, strategy and planning workshops and
                  capacity-strengthening interventions for more than 500 clients
                  across the Private Sector, the United Nations Development
                  System, and Civil Society.
                </p>
                <p>
                  He has facilitated high-level dialogues, symposia and meetings
                  for Governments, Inter-Parliamentary bodies and United Nations
                  agencies, and delivered keynote and motivational addresses at
                  conferences and events across more than 30 countries.
                </p>
                <p>
                  A weekly columnist for <em className="text-white not-italic">The Sunday
                  Mail</em> and the author of more than 10 books — including the
                  <em className="not-italic"> Hunt for Greatness</em> series and the
                  <em className="not-italic"> Improvement Series</em> — Milton writes
                  and speaks from one conviction: growth never comes by accident.
                  It is intentional. It is disciplined. It is forged in the heat
                  of challenge.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors group"
                >
                  Work With Milton
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sector breakdown — who Milton serves */}
      <SectorBreakdown />

      {/* Philosophy */}
      <section className="py-section-sm md:py-section bg-primary border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-8">
              Core Conviction
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white italic mb-8 leading-snug md:leading-tight">
              "Greatness is not a gentle stroll in a garden.<br className="hidden md:block" />
              It is a march across a battlefield."
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light">
              Growth never comes by accident. It is forged in discipline, in
              courage, in sacrifice — and in the refusal to internalise
              failure. Every leader Milton works with is challenged to stop
              drifting and start advancing. To stop wishing and start winning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
                Beyond the Stage
              </p>
              <h2 className="text-heading-sm font-serif font-bold text-white mb-6">
                The Person Behind the Platform
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  Beyond the boardrooms and stages, Milton is a voracious
                  reader, a student of strategy, and a writer who genuinely
                  believes every person carries the seed of something
                  extraordinary — waiting to be released.
                </p>
                <p>
                  He writes prolifically because ideas change lives when they
                  are made accessible. His WhatsApp channel, weekly column,
                  and growing library of books all serve one purpose: to put
                  simple, practical playbooks for growth into the hands of
                  people ready to use them.
                </p>
                <p>
                  Milton is married to Florence and is the father of three
                  children — Mukundi, Munangi and Muvaki.
                </p>
                <p className="text-gold font-serif italic pt-2">
                  Committed to your greatness.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/milton8.jpeg"
                alt="Milton Kamwendo"
                className="w-full aspect-square object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
