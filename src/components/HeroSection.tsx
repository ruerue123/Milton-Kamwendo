import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

type Slide = {
  image: string;
  eyebrow: string;
  /** Headline rendered as two stacked lines; the second line gets the gold shimmer. */
  line1: string;
  line2: string;
  subtitle: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
};

const slides: Slide[] = [
  {
    image: '/milton6.jpeg',
    eyebrow: 'Inspiring Greatness · Strategy · Growth',
    line1: 'Stop Drifting.',
    line2: 'Start Advancing.',
    subtitle:
      'Greatness is not an accident. It is the result of intentional steps, persistent effort, and purpose-driven pursuit. Milton Kamwendo helps leaders and teams release the greatness trapped within them.',
    primary: { label: 'Book Milton', to: '/contact' },
    secondary: { label: 'Hunt for Greatness', to: '/speaking' },
  },
  {
    image: '/milton9.jpeg',
    eyebrow: 'Workshop Facilitator · 25-Year Record',
    line1: 'Strategy That',
    line2: 'Moves the Needle.',
    subtitle:
      'A 25-year record of facilitation impact across 500+ clients in 30+ countries — strategy, innovation and team-building for the UN system, leading corporates, and civil society.',
    primary: { label: 'Work With Milton', to: '/consulting' },
    secondary: { label: 'See the Impact', to: '/about' },
  },
  {
    image: '/milton11.jpeg',
    eyebrow: 'Transformational Speaker · Best-Selling Author',
    line1: 'Release the',
    line2: 'Greatness in You.',
    subtitle:
      'Keynotes that shift mindsets, not just schedules. Milton motivates and inspires audiences to unleash their greatness — and gives them the playbook to act on it.',
    primary: { label: 'Book a Keynote', to: '/contact' },
    secondary: { label: 'Explore Topics', to: '/speaking' },
  },
];

const ROTATE_MS = 6500;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  // Auto-rotate, paused on hover/touch and when the user prefers reduced motion.
  useEffect(() => {
    if (paused) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      ROTATE_MS
    );
    return () => clearInterval(timer);
  }, [paused, current]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
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
      {/* Rotating background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary"></div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Floating gold accents (desktop only) */}
      <div className="absolute top-1/4 left-[8%] w-px h-20 bg-gradient-to-b from-gold/20 to-transparent animate-float hidden md:block" />
      <div
        className="absolute bottom-1/3 right-[12%] w-px h-16 bg-gradient-to-b from-gold/15 to-transparent animate-float hidden md:block"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={slide.primary.to}
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors duration-300"
              >
                {slide.primary.label}
              </Link>
              <Link
                to={slide.secondary.to}
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-300 border border-neutral-700 hover:border-gold/40 hover:text-white transition-all duration-300"
              >
                {slide.secondary.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
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
    </section>
  );
}
