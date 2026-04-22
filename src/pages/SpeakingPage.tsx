import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const keynoteTopics = [
  {
    title: 'Leadership in the Age of Disruption',
    description:
      'How to lead with clarity, conviction, and courage when everything around you is shifting.',
    outcomes: [
      'Develop adaptive leadership frameworks',
      'Navigate ambiguity with confidence',
      'Build trust in times of change',
    ],
  },
  {
    title: 'The Greatness Imperative',
    description:
      'Why playing small is the greatest risk — and how to unlock the dormant potential in your organization.',
    outcomes: [
      'Shift from survival to significance mindset',
      'Identify and remove organizational ceilings',
      'Create a culture of bold execution',
    ],
  },
  {
    title: 'Strategy That Moves',
    description:
      'Bridging the gap between strategic vision and tangible execution — because ideas without action are merely philosophy.',
    outcomes: [
      'Turn strategy into daily disciplines',
      'Align teams around measurable goals',
      'Build execution accountability systems',
    ],
  },
  {
    title: 'Resilience & The Art of Comeback',
    description:
      'How to transform setbacks into strategic advantages and build organizations that thrive through adversity.',
    outcomes: [
      'Develop organizational resilience',
      'Lead through crisis with composure',
      'Turn challenges into competitive advantages',
    ],
  },
];

const transformationPoints = [
  'Your audience will leave with a shifted mindset — not just inspiration, but a framework for action.',
  'Every keynote is customized to your industry, challenges, and organizational goals.',
  "Milton's approach combines strategic depth with storytelling that resonates long after the event.",
  'Attendees receive practical tools they can implement immediately.',
];

export function SpeakingPage() {
  useDocumentMeta(
    'Keynote Speaking',
    'Milton Kamwendo delivers high-impact keynotes on leadership, strategy, and transformation — shifting mindsets and moving audiences to decisive action.'
  );
  return (
    <PageTransition>
      <PageHero
        eyebrow="Speaking"
        title="Keynotes That Move Audiences"
        subtitle="Milton does not come to entertain. He comes to shift the mindset in the room — and send people home with a framework, a challenge, and the courage to act."
        backgroundImage="/milton6.jpeg"
      />

      {/* Keynote Topics */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-20">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Keynote Topics
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white">
              Signature Presentations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {keynoteTopics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary p-8 md:p-12"
              >
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-4">
                  {topic.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {topic.description}
                </p>
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                    Key Outcomes
                  </p>
                  {topic.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Transformation */}
      <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              The Difference
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white">
              What Makes Milton's Keynotes Different
            </h2>
          </div>

          <div className="space-y-8">
            {transformationPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-8 h-[1px] bg-gold mt-3 flex-shrink-0"></div>
                <p className="text-neutral-300 text-base leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection
        headline="Book Milton for Your Next Event"
        subtext="Corporate conference, leadership summit, executive retreat, or church platform — Milton shows up prepared to move the room."
        buttonText="Book a Keynote"
      />
    </PageTransition>
  );
}
