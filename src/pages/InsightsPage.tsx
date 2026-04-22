import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { insights, WHATSAPP_CHANNEL_URL } from '../data/insights';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const categories = ['All', 'Leadership', 'Strategy', 'Growth'] as const;

export function InsightsPage() {
  useDocumentMeta(
    'Insights',
    'Weekly inspiration, next-level thinking, and simple actions that move you from ideas to impact — from Milton Kamwendo.'
  );
  const [activeCategory, setActiveCategory] =
    React.useState<(typeof categories)[number]>('All');

  const filtered =
    activeCategory === 'All'
      ? insights
      : insights.filter((a) => a.category === activeCategory);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Insights"
        title="Thinking That Moves"
        subtitle="Leadership insights, encouragement, and practical playbooks for visible growth. Weekly inspiration that moves you from ideas to impact."
        backgroundImage="/milton11.jpeg"
      />

      {/* WhatsApp channel primary CTA */}
      <section className="py-section-sm bg-primary border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-gold/20 bg-primary-light p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="flex items-start gap-4 md:gap-8">
              <div className="hidden md:flex w-12 h-12 border border-gold/30 items-center justify-center flex-shrink-0">
                <MessageCircleIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
                  Follow Live
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                  Get Milton's insights as they land on WhatsApp.
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                  Weekly inspiration, next-level thinking, and simple actions
                  that move you from ideas to impact. Join the channel on
                  WhatsApp for the full feed — archived highlights appear below.
                </p>
                <a
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300"
                >
                  Follow on WhatsApp
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Archive
            </p>
            <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white">
              Selected Posts
            </h2>
          </div>

          {insights.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="flex flex-wrap gap-3 mb-12">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                {filtered.map((article, i) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-primary group hover:bg-primary-light transition-colors duration-500"
                  >
                    <Link
                      to={`/insights/${article.slug}`}
                      className="block p-8 md:p-10 h-full"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">
                          {article.category}
                        </span>
                        <span className="text-neutral-700 text-[10px]">&middot;</span>
                        <span className="text-neutral-600 text-[10px]">
                          {article.date}
                        </span>
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
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

function EmptyState() {
  return (
    <div className="border border-white/5 p-12 md:p-16 text-center bg-primary-light">
      <p className="text-neutral-500 leading-relaxed max-w-lg mx-auto">
        Archived posts will appear here as they are curated from the WhatsApp
        channel. In the meantime, follow the channel above to receive insights
        as they are published.
      </p>
    </div>
  );
}
