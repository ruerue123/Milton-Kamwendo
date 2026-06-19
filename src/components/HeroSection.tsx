import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SparklesIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type CTA = { label: string; to?: string; href?: string };

type TextSlide = {
  type: 'text';
  eyebrow: string;
  /** Two stacked headline lines; the second gets the gold shimmer. */
  line1: string;
  line2: string;
  subtitle: string;
  primary: CTA;
  secondary: CTA;
};

type BookSlide = {
  type: 'book';
  cover: string;
  badge: string;
  tag: string;
  line1: string;
  line2: string;
  subtitle: string;
  primary: CTA;
  secondary: CTA;
};

type Slide = TextSlide | BookSlide;

/** A single calm, cinematic background carries the whole hero; only the content
 *  rotates. Swapping busy event photos per slide made the hero feel messy. */
const HERO_BG = '/milton6.jpeg';

const slides: Slide[] = [
  {
    type: 'text',
    eyebrow: 'Inspiring Greatness · Strategy · Growth',
    line1: 'Stop Drifting.',
    line2: 'Start Advancing.',
    subtitle:
      'Greatness is not an accident. It is the result of intentional steps, persistent effort, and purpose-driven pursuit. Milton Kamwendo helps leaders and teams release the greatness trapped within them.',
    primary: { label: 'Book Milton', to: '/contact' },
    secondary: { label: 'Hunt for Greatness', to: '/speaking' },
  },
  {
    type: 'book',
    cover: '/books/itstime.png',
    badge: 'Launching in Days',
    tag: 'Soon an App',
    line1: 'The book becomes',
    line2: 'a daily practice.',
    subtitle:
      "It's Time to Unleash Your Greatness is becoming an app — built to move readers from pages to practice. Short prompts, daily disciplines, and bold challenges to help you stop drifting and start advancing.",
    primary: { label: 'Join the Waitlist', to: '/contact' },
    secondary: {
      label: 'Read the Book',
      href: 'https://www.amazon.com/gp/product/B0DKJZPXTZ/',
    },
  },
  {
    type: 'text',
    eyebrow: 'Workshop Facilitator · 25-Year Record',
    line1: 'Strategy That',
    line2: 'Moves the Needle.',
    subtitle:
      'A 25-year record of facilitation impact across 500+ clients in 30+ countries — strategy, innovation and team-building for the UN system, leading corporates, and civil society.',
    primary: { label: 'Work With Milton', to: '/consulting' },
    secondary: { label: 'See the Impact', to: '/about' },
  },
];

const ROTATE_MS = 6500;

/** Directional motion-blur push. Slides move horizontally and blur during the
 *  movement, settling sharp — the "whoosh" look. */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '60%' : '-60%',
    opacity: 0,
    filter: 'blur(14px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    filter: 'blur(14px)',
  }),
};

const CTA_BASE =
  'inline-flex items-center justify-center px-8 md:px-10 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300';

function CtaLink({ cta, className }: { cta: CTA; className: string }) {
  if (cta.href) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CTA_BASE} ${className}`}
      >
        {cta.label}
      </a>
    );
  }
  return (
    <Link to={cta.to!} className={`${CTA_BASE} ${className}`}>
      {cta.label}
      <ArrowRightIcon className="ml-2 w-4 h-4" />
    </Link>
  );
}

function CtaButtons({ primary, secondary }: { primary: CTA; secondary: CTA }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <CtaLink
        cta={primary}
        className="text-primary bg-gold hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,161,74,0.25)]"
      />
      <CtaLink
        cta={secondary}
        className="text-neutral-300 border border-neutral-700 hover:border-gold/40 hover:text-white"
      />
    </div>
  );
}

export function HeroSection() {
  const [[current, direction], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const paginate = useCallback((dir: number) => {
    setState(([c]) => [(c + dir + slides.length) % slides.length, dir]);
  }, []);

  const goTo = useCallback((index: number) => {
    setState(([c]) => [index, index > c ? 1 : -1]);
  }, []);

  // Auto-rotate, paused on hover/touch and under reduced-motion.
  useEffect(() => {
    if (paused) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const timer = setInterval(() => paginate(1), ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused, current, paginate]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) paginate(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen-dynamic flex items-center justify-center overflow-hidden bg-primary py-28 md:py-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Milton Kamwendo introduction"
    >
      {/* Single calm background — only the content rotates */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        {/* Vertical fade into the page + a left-side darken so text always
            rests on a calm area regardless of which content is showing. */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/60 to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/70"></div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Floating gold accents (desktop only) */}
      <div className="absolute top-1/4 left-[8%] w-px h-20 bg-gradient-to-b from-gold/20 to-transparent animate-float hidden md:block" />
      <div
        className="absolute bottom-1/3 right-[12%] w-px h-16 bg-gradient-to-b from-gold/15 to-transparent animate-float hidden md:block"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1],
                opacity: { duration: 0.25 },
              }}
              style={{ willChange: 'transform, filter, opacity' }}
            >
              {slide.type === 'text' ? (
                <div className="max-w-5xl mx-auto text-center">
                  <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.3em] mb-6 md:mb-8">
                    {slide.eyebrow}
                  </p>
                  <h1 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
                    <span className="block">{slide.line1}</span>
                    <span className="block gold-shimmer">{slide.line2}</span>
                  </h1>
                  <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10 md:mb-12">
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-center">
                    <CtaButtons primary={slide.primary} secondary={slide.secondary} />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                  {/* Book cover */}
                  <div className="relative flex justify-center lg:justify-end order-1 lg:order-none">
                    <div className="relative max-w-[200px] sm:max-w-[240px] lg:max-w-xs w-full">
                      <div className="absolute inset-0 bg-gold/15 blur-2xl scale-90" />
                      <img
                        src={slide.cover}
                        alt={`${slide.line1} ${slide.line2} — book cover`}
                        className="relative w-full h-auto border-l-4 border-gold/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
                      />
                      <div className="absolute -bottom-4 -right-2 md:-bottom-5 md:-right-5 bg-gold text-primary px-4 py-2.5 shadow-xl">
                        <p className="font-serif font-bold text-sm md:text-base leading-none">
                          {slide.tag}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 mb-6">
                      <SparklesIcon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                      <span className="text-gold text-[11px] font-semibold uppercase tracking-[0.2em]">
                        {slide.badge}
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white mb-5 md:mb-6 leading-[1.1]">
                      <span className="block">{slide.line1}</span>
                      <span className="block gold-shimmer">{slide.line2}</span>
                    </h1>
                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
                      {slide.subtitle}
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <CtaButtons primary={slide.primary} secondary={slide.secondary} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/40 backdrop-blur-sm border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 hover:bg-primary/60 transition-all duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/40 backdrop-blur-sm border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 hover:bg-primary/60 transition-all duration-300"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Slide indicators */}
          <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-11 px-1.5 flex items-center group"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current}
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ${
                    i === current
                      ? 'w-8 bg-gold'
                      : 'w-4 bg-white/20 group-hover:bg-white/40'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
