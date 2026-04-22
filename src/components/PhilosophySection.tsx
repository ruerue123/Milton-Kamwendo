import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const statements = [
  'Growth never comes by accident. It is intentional and disciplined.',
  'You cannot talk yourself out of situations you behave yourself into.',
  'Greatness is not a gentle stroll in a garden. It is a march across a battlefield.',
  'Small changes lead to great destinations.',
  'Courage is not the absence of fear. Courage is mastery over fear.',
];

export function PhilosophySection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? statements.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === statements.length - 1 ? 0 : c + 1));
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c === statements.length - 1 ? 0 : c + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-section-sm md:py-section bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-16 text-center">
          Philosophy
        </p>

        {/* Slider */}
        <div className="relative min-h-[220px] md:min-h-[240px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white/90 leading-snug md:leading-tight text-center italic w-full px-2"
            >
              "{statements[current]}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-14">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/10 hover:border-gold/40 flex items-center justify-center text-neutral-500 hover:text-gold transition-all duration-300"
            aria-label="Previous quote"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            {statements.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[2px] transition-all duration-500 cursor-pointer ${
                  i === current
                    ? 'w-8 bg-gold'
                    : 'w-4 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-white/10 hover:border-gold/40 flex items-center justify-center text-neutral-500 hover:text-gold transition-all duration-300"
            aria-label="Next quote"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
