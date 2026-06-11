import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="py-section-sm md:py-section bg-primary-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif font-bold text-white leading-tight">
            What Leaders Say
          </h2>
        </div>

        <div
          className="relative max-w-3xl mx-auto min-h-[280px] md:min-h-[240px] flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-live="polite"
        >
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
              <div className="w-8 h-[2px] bg-gold mx-auto mb-8 animate-shimmer" style={{ background: 'linear-gradient(110deg, #C9A14A 0%, #D4B064 40%, #F5E6B8 50%, #D4B064 60%, #C9A14A 100%)', backgroundSize: '200% 100%' }} />
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10 font-light italic">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="text-white text-sm font-semibold">{testimonials[current].name}</p>
                <p className="text-neutral-500 text-xs mt-1">{testimonials[current].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="w-11 h-11 flex items-center justify-center group"
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
