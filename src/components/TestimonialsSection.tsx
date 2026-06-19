import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const testimonials = [
  {
    quote:
      'I would recommend Milton at any time to anyone serious about taking business and personal life to the next level. He connects with people at different levels and brings out the best in them. His presentations are well thought out, researched and eloquently delivered.',
    name: 'LinkedIn Recommendation',
    title: 'Business Leader',
  },
  {
    quote:
      'There are trainers and there are trainers — Milton falls in the latter category. He facilitates with great enthusiasm that comes from deep within. Through his thought-provoking questions, he brings participants out of their comfort zones.',
    name: 'LinkedIn Recommendation',
    title: 'Workshop Participant',
  },
  {
    quote:
      'Milton is one of the best success coaches I have ever come across. He is a prolific speaker and a great workshop facilitator. I am greatly impressed with his commitment to excellence, integrity and extremely good results.',
    name: 'LinkedIn Recommendation',
    title: 'Client',
  },
  {
    quote:
      'I have been privileged to witness Milton rise from small beginnings to becoming a highly sought-after international trainer, motivator and strategist.',
    name: 'LinkedIn Recommendation',
    title: 'Colleague',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
  };

  return (
    <section className="py-12 md:py-16 bg-primary-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
            Impact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            What Leaders Say
          </h2>
        </div>

        <div
          className="relative max-w-4xl mx-auto flex items-center gap-2 sm:gap-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-live="polite"
        >
          {/* Prev */}
          <button
            onClick={prev}
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 hover:bg-white/5 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Quote */}
          <div className="relative flex-1 min-h-[180px] sm:min-h-[150px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center w-full"
              >
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6 font-light italic">
                  "{testimonials[current].quote}"
                </p>
                <p className="text-white text-sm font-semibold">{testimonials[current].name}</p>
                <p className="text-neutral-500 text-xs mt-0.5">{testimonials[current].title}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 hover:bg-white/5 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="h-11 px-1 flex items-center group"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-gold w-6'
                    : 'bg-neutral-700 group-hover:bg-neutral-500 w-2'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
