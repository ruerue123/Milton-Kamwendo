import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const books = [
  {
    title: 'Move The Needle',
    subtitle: 'Press to Your Greatness',
    cover: '/books/movetheneedle.png',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DGN68QZS/',
  },
  {
    title: 'Increase Your Worth',
    subtitle: 'Steps to Your Legacy',
    cover: '/books/increaseyourworth.png',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DJDGHC55/',
  },
  {
    title: 'Unlock The Next Level',
    subtitle: 'Keys to Your Breakthrough',
    cover: '/books/unlockthenextlevel.png',
    amazonUrl: 'https://www.amazon.com/stores/Milton-Kamwendo/author/B00JH3YS8Q',
  },
  {
    title: 'Dance and Pursue',
    subtitle: 'Live with Passion',
    cover: '/books/danceandpursue.png',
    amazonUrl: 'https://www.amazon.com/stores/Milton-Kamwendo/author/B00JH3YS8Q',
  },
  {
    title: 'Hunt for Greatness',
    subtitle: 'Volume One',
    cover: '/books/huntforgreatness.png',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DF5N3VCZ/',
  },
  {
    title: 'Hunt for Greatness',
    subtitle: 'Volume Two',
    cover: '/books/huntforgreatness2.png',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DG663CW9/',
  },
  {
    title: 'Hunt for Greatness',
    subtitle: 'Volume Three',
    cover: '/books/huntforgreatness3.png',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DGY1FKZS/',
  },
];

export function OtherBooksStrip() {
  return (
    <section className="py-section-sm md:py-section bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
              More Books by Milton
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Playbooks for Greatness
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-light transition-colors group self-start sm:self-end"
          >
            View All Books
            <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal scroll strip — mobile swipe, desktop grid feel */}
        <div className="-mx-6 lg:mx-0">
          <div
            className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 lg:scroll-px-0 px-6 lg:px-0 pb-6 lg:overflow-visible"
            style={{ scrollbarWidth: 'thin' }}
          >
            {books.map((book, i) => (
              <motion.a
                key={`${book.title}-${book.subtitle}`}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:flex-1 lg:w-auto snap-start"
              >
                <div className="relative aspect-[2/3] mb-4 overflow-hidden border-l-2 border-gold/30 bg-primary-light">
                  <img
                    src={book.cover}
                    alt={`${book.title} — ${book.subtitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif font-bold text-sm text-white leading-snug group-hover:text-gold transition-colors">
                  {book.title}
                </p>
                <p className="text-neutral-500 text-xs mt-1 italic">
                  {book.subtitle}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
