import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { ArrowRightIcon } from 'lucide-react';

const categories = ['All', 'Leadership', 'Strategy', 'Growth'];

const articles = [
  {
    category: 'Leadership',
    title: 'The Cost of Playing Small in Leadership',
    excerpt:
      'Most leaders fail not because they lack talent, but because they lack the courage to act at the scale their position demands.',
    date: 'March 2026',
  },
  {
    category: 'Strategy',
    title: 'Why Most Strategies Fail Before They Begin',
    excerpt:
      'The gap between strategy and execution is not a skills problem — it is a courage problem. Here is how to close it.',
    date: 'February 2026',
  },
  {
    category: 'Growth',
    title: 'Acta Non Verba: The Philosophy of Doing',
    excerpt:
      'Words are cheap. Intentions are everywhere. What separates the great from the good is a relentless bias toward action.',
    date: 'January 2026',
  },
  {
    category: 'Leadership',
    title: 'Building Teams That Execute Under Pressure',
    excerpt:
      'High-performance teams are not born — they are forged. The key lies in alignment, trust, and a shared commitment to outcomes.',
    date: 'December 2025',
  },
  {
    category: 'Strategy',
    title: 'The Discipline of Strategic Resilience',
    excerpt:
      'Resilience is not about bouncing back. It is about building the capacity to move forward through adversity with clarity.',
    date: 'November 2025',
  },
  {
    category: 'Growth',
    title: 'Unlocking the Greatness Within Your Organization',
    excerpt:
      'Every organization has dormant potential. The question is: do you have the leadership to unlock it?',
    date: 'October 2025',
  },
];

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Insights"
        title="Thinking That Moves"
        subtitle="Ideas, frameworks, and perspectives on leadership, strategy, and the discipline of greatness."
        backgroundImage="/milton11.jpeg"
      />

      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-5 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-gold text-gold'
                    : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {filtered.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-primary p-8 md:p-10 group cursor-pointer hover:bg-primary-light transition-colors duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">
                    {article.category}
                  </span>
                  <span className="text-neutral-700 text-[10px]">&middot;</span>
                  <span className="text-neutral-600 text-[10px]">{article.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500 group-hover:text-gold transition-colors">
                  Read
                  <ArrowRightIcon className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
