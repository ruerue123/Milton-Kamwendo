import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { TargetIcon, UsersIcon, CompassIcon, BarChartIcon } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const services = [
  {
    icon: CompassIcon,
    title: 'Strategy Consulting',
    description:
      'Define the mission. Name the battle. Choose the ground. Milton works alongside leadership teams to turn strategy into daily disciplines instead of forgotten slide decks.',
  },
  {
    icon: UsersIcon,
    title: 'Workshop Facilitation',
    description:
      'Hands-on sessions that forge mission clarity and team alignment. Your people leave with a shared playbook — and the courage to use it on Monday morning.',
  },
  {
    icon: TargetIcon,
    title: 'Executive Coaching',
    description:
      'A thinking partner for senior leaders. Clarify purpose, confront blind spots, and build the personal disciplines that separate leaders who drift from leaders who advance.',
  },
  {
    icon: BarChartIcon,
    title: 'Organisational Development',
    description:
      'Build a culture that refuses to play small. Hire the right soldiers, build the right squad, and create the structure that lets growth become inevitable.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      "Study the terrain. Listen to the people. Understand the real challenges — not just the ones on the org chart.",
  },
  {
    step: '02',
    title: 'Diagnose',
    description:
      'Name the root causes. Spot the patterns others miss. Decide where the real leverage lives.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Co-create the playbook — the mission, the milestones, and the daily disciplines that will carry the team through.',
  },
  {
    step: '04',
    title: 'Deliver',
    description:
      'Stay in the fight. Coach through the messy middle. Adjust the method when the terrain changes, but hold the mission.',
  },
];

export function ConsultingPage() {
  useDocumentMeta(
    'Consulting & Workshops',
    'Strategy consulting, executive coaching, and workshop facilitation. Milton partners with leadership teams to turn strategic intent into measurable outcomes.'
  );
  return (
    <PageTransition>
      <PageHero
        eyebrow="Consulting & Workshops"
        title="Strategy That Moves"
        subtitle="The world does not reward plans. It rewards action. Milton helps leadership teams close the gap between intention and execution."
        backgroundImage="/milton9.jpeg"
      />

      {/* Services */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-20">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Services
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white">
              How Milton Partners With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary p-8 md:p-12"
              >
                <service.icon className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              The Process
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white">
              From Insight to Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center md:text-left"
              >
                <span className="text-gold/30 font-serif text-5xl font-bold">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Stop Planning. Start Advancing."
        subtext="If your team has been drifting, circling, or stuck between intention and execution — start the conversation. Milton will help you name the next right move."
        buttonText="Start a Conversation"
      />
    </PageTransition>
  );
}
