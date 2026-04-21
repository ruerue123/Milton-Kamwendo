import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { TargetIcon, UsersIcon, CompassIcon, BarChartIcon } from 'lucide-react';

const services = [
  {
    icon: CompassIcon,
    title: 'Strategy Consulting',
    description:
      'Navigate complexity with clear, executable strategies. Milton partners with leadership teams to design roadmaps that turn vision into measurable outcomes.',
  },
  {
    icon: UsersIcon,
    title: 'Workshop Facilitation',
    description:
      'Interactive, results-driven sessions designed to align teams, resolve strategic tensions, and build a shared commitment to execution.',
  },
  {
    icon: TargetIcon,
    title: 'Executive Coaching',
    description:
      'One-on-one strategic partnership for senior leaders. Clarify vision, overcome blind spots, and maximize leadership impact at the highest levels.',
  },
  {
    icon: BarChartIcon,
    title: 'Organizational Development',
    description:
      'Build resilient cultures that attract top talent, sustain high performance, and adapt to change with confidence and speed.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description:
      "Deep-dive into your organization's challenges, goals, and culture to understand the real landscape.",
  },
  {
    step: '02',
    title: 'Diagnosis',
    description:
      'Identify the root causes, hidden patterns, and strategic opportunities that others miss.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Co-create a tailored strategy and action plan with clear milestones and accountability structures.',
  },
  {
    step: '04',
    title: 'Delivery',
    description:
      'Facilitate implementation with hands-on guidance, coaching, and iterative refinement until results are achieved.',
  },
];

export function ConsultingPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Consulting & Workshops"
        title="Strategy That Moves"
        subtitle="From boardroom to breakthrough — Milton partners with organizations to turn strategic intent into decisive action."
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
        headline="Let's Build Your Strategy"
        subtext="Ready to move from intention to execution? Start the conversation today."
        buttonText="Start a Conversation"
      />
    </PageTransition>
  );
}
