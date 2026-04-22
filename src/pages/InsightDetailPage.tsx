import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { CTASection } from '../components/CTASection';
import { insights, WHATSAPP_CHANNEL_URL } from '../data/insights';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<strong key={key++} className="text-white font-semibold">{m[1]}</strong>);
    } else if (m[2] !== undefined) {
      parts.push(<em key={key++}>{m[2]}</em>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find((a) => a.slug === slug);

  useDocumentMeta(
    article ? article.title : 'Insight',
    article ? article.excerpt : undefined
  );

  if (!article) return <Navigate to="/insights" replace />;

  return (
    <PageTransition>
      <article className="pt-40 md:pt-48 pb-section-sm md:pb-section bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            to="/insights"
            className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 hover:text-gold transition-colors mb-10"
          >
            <ArrowLeftIcon className="mr-2 w-3.5 h-3.5" />
            All Insights
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em]">
                {article.category}
              </span>
              <span className="text-neutral-700 text-[11px]">&middot;</span>
              <span className="text-neutral-500 text-[11px]">{article.date}</span>
            </div>

            <h1 className="text-heading-sm md:text-heading font-serif font-bold text-white mb-10 leading-tight">
              {article.title}
            </h1>

            <div className="text-neutral-300 leading-relaxed text-lg space-y-6">
              {article.body.split(/\n{2,}/).map((para, i) => (
                <p key={i}>{renderInline(para)}</p>
              ))}
            </div>

            {article.sourceUrl && (
              <p className="mt-10 text-neutral-600 text-xs">
                Originally published at{' '}
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-4"
                >
                  {new URL(article.sourceUrl).hostname.replace(/^www\./, '')}
                </a>
              </p>
            )}

            <div className="mt-16 pt-10 border-t border-white/5">
              <p className="text-neutral-500 text-sm mb-4">
                Want insights like this every week?
              </p>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors"
              >
                Follow on WhatsApp &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <CTASection />
    </PageTransition>
  );
}
