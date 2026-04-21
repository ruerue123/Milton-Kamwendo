import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';

const products = [
  {
    title: 'Move The Needle!',
    subtitle: 'Press to Your Greatness',
    description:
      'A powerful guide to pushing past limitations and pressing toward your greatness.',
    category: 'Improvement Series',
    coverImage: '/ Books/movetheneedle.png',
    badge: 'Bestseller',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DGN68QZS/',
  },
  {
    title: 'Increase Your Worth',
    subtitle: 'Steps to Your Legacy',
    description:
      'Discover the steps to building a lasting legacy by increasing your personal and professional worth.',
    category: 'Improvement Series',
    coverImage: '/ Books/increaseyourworth.png',
    badge: null,
    amazonUrl: 'https://www.amazon.com/gp/product/B0DJDGHC55/',
  },
  {
    title: 'Unlock The Next Level',
    subtitle: 'Keys to Your Breakthrough',
    description:
      'Practical keys and insights to break through barriers and reach new heights of success.',
    category: 'Improvement Series',
    coverImage: '/ Books/unlockthenextlevel.png',
    badge: null,
    amazonUrl: 'https://www.amazon.com/stores/Milton-Kamwendo/author/B00JH3YS8Q',
  },
  {
    title: 'Dance and Pursue Your Dreams',
    subtitle: 'Live with Passion',
    description:
      'An inspiring call to pursue your dreams with energy, passion, and determination.',
    category: 'Improvement Series',
    coverImage: '/ Books/danceandpursue.png',
    badge: 'New',
    amazonUrl: 'https://www.amazon.com/stores/Milton-Kamwendo/author/B00JH3YS8Q',
  },
  {
    title: 'Hunt for Greatness',
    subtitle: 'Volume One',
    description:
      'Begin your journey to discovering and pursuing the greatness within you.',
    category: 'Hunt for Greatness Series',
    coverImage: '/ Books/huntforgreatness.png',
    badge: null,
    amazonUrl: 'https://www.amazon.com/gp/product/B0DF5N3VCZ/',
  },
  {
    title: 'Hunt for Greatness',
    subtitle: 'Volume Two',
    description:
      'Deeper insights, bolder strategies, and more powerful frameworks for transformation.',
    category: 'Hunt for Greatness Series',
    coverImage: '/ Books/huntforgreatness2.png',
    badge: null,
    amazonUrl: 'https://www.amazon.com/gp/product/B0DG663CW9/',
  },
  {
    title: 'Hunt for Greatness',
    subtitle: 'Volume Three',
    description:
      'Advanced principles for sustaining greatness and leaving a lasting impact.',
    category: 'Hunt for Greatness Series',
    coverImage: '/ Books/huntforgreatness3.png',
    badge: null,
    amazonUrl: 'https://www.amazon.com/gp/product/B0DGY1FKZS/',
  },
  {
    title: "It's Time to Unleash Your Greatness",
    subtitle: 'Your Moment is Now',
    description:
      'A bold declaration that your time is now. Stop waiting and start unleashing the greatness within.',
    category: 'Improvement Series',
    coverImage: '/ Books/itstime.png',
    badge: 'Popular',
    amazonUrl: 'https://www.amazon.com/gp/product/B0DKJZPXTZ/',
  },
];

const categories = ['All', 'Improvement Series', 'Hunt for Greatness Series'];

export function ShopSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-section-sm md:py-section bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            Publications
          </p>
          <h2 className="text-heading-sm md:text-heading font-serif font-bold text-white mb-4">
            Books by Milton Kamwendo
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Transformational books designed to unlock your potential, build your
            legacy, and guide you on the path to greatness.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-5 py-2 border transition-all duration-300 ${
                activeCategory === category
                  ? 'border-gold text-gold'
                  : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.a
              key={`${product.title}-${product.subtitle}`}
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group block"
            >
              <div className="border border-white/5 hover:border-gold/20 transition-all duration-500 h-full flex flex-col bg-primary-light">
                {/* Book Cover */}
                <div className="relative p-6 pb-0">
                  {product.badge && (
                    <span className="absolute top-3 right-3 text-gold text-[10px] font-semibold uppercase tracking-[0.15em] z-10">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.coverImage}
                    alt={`${product.title} - ${product.subtitle}`}
                    className="w-full aspect-[2/3] object-cover border-l-2 border-gold/30 transform transition-all duration-500 group-hover:-translate-y-1"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                    {product.category}
                  </p>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                    {product.title}
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.15em] text-gold group-hover:text-gold-light transition-colors">
                    Buy on Amazon
                    <ArrowUpRightIcon className="ml-1.5 w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border border-white/5 p-8 md:p-12 text-center bg-primary-light"
        >
          <h4 className="text-heading-sm font-serif font-bold text-white mb-4">
            Also Available at Innov8 Bookshop
          </h4>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Find Milton Kamwendo's complete collection at Innov8 Bookshop and
            other leading retailers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.amazon.com/stores/Milton-Kamwendo/author/B00JH3YS8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-primary bg-gold hover:bg-gold-light transition-colors"
            >
              View All on Amazon
            </a>
            <a
              href="#/contact"
              className="px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-neutral-300 border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              Bulk Orders
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
