import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { CTASection } from '../components/CTASection';
import { ArrowRightIcon } from 'lucide-react';

const achievements = [
  { value: '20+', label: 'Years Experience' },
  { value: '8+', label: 'Books Published' },
  { value: '30+', label: 'Countries' },
  { value: '500+', label: 'Keynotes' },
];

export function AboutPage() {
  return (
    <PageTransition>
      {/* Opening Statement */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-30 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/milton-speaking.jpeg"
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
            className="text-display-sm md:text-display font-serif font-bold text-white mb-8"
          >
            A Life Dedicated to
            <br />
            Unlocking Greatness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light"
          >
            Milton Kamwendo delivers transformation through thought, strategy, and action.
            For over two decades, he has been at the forefront of leadership development,
            organizational strategy, and human potential.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-serif font-bold text-3xl text-white mb-1">{stat.value}</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="relative">
                <img
                  src="/milton-outdoor.jpeg"
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
                From Vision to Execution
              </h2>

              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  Milton Kamwendo is a leading international transformational and
                  motivational speaker, best-selling author, and accomplished workshop
                  facilitator. With decades of experience, he has dedicated his life to
                  unlocking human potential and driving organizational excellence.
                </p>
                <p>
                  As a cutting-edge strategy, team-building, and organization development
                  consultant, Milton partners with forward-thinking leaders to navigate
                  complex challenges, foster resilient cultures, and execute strategies
                  that deliver measurable results.
                </p>
                <p>
                  He has worked with Fortune 500 companies, government agencies, and
                  non-profit organizations across the globe, bringing a unique blend of
                  strategic insight and motivational power that leaves lasting impact.
                </p>
                <p>
                  His philosophy is rooted in the principle of <em className="text-gold not-italic font-medium">Acta
                  non Verba</em> — deeds, not words. He challenges leaders and teams to
                  move beyond rhetoric, urging them to not just multiply words, but to
                  multiply action.
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

      {/* Philosophy */}
      <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-8">
              Core Philosophy
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic mb-8">
              "Acta non Verba"
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light">
              True greatness is forged in the crucible of execution, not in the comfort
              of intention. Milton challenges every leader he works with to close the gap
              between knowing and doing — because the world doesn't reward plans. It
              rewards action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                  Beyond the boardrooms and stages, Milton is a voracious reader, a deep
                  thinker, and someone who genuinely believes that every person carries
                  within them the seed of something extraordinary.
                </p>
                <p>
                  He writes prolifically — with over eight published books that have
                  reached readers across Africa and beyond — not for fame, but because
                  he believes ideas have the power to change lives when they are
                  accessible.
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
                src="/milton2-casual.jpeg"
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
