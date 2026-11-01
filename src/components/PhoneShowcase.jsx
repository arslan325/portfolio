import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';

const screens = projects.filter((p) => p.showInHero);
const INTERVAL = 3600;

// The phone in the hero. It cycles through the projects marked showInHero.
export default function PhoneShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const current = screens[index];

  useEffect(() => {
    if (paused || reduceMotion || screens.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % screens.length), INTERVAL);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  if (!current) return null;

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Glow behind the phone takes the color of the current app */}
      <motion.div
        aria-hidden="true"
        className="absolute top-10 h-72 w-72 rounded-full opacity-50 blur-3xl sm:h-96 sm:w-96 dark:opacity-40"
        animate={{ backgroundColor: current.color }}
        transition={{ duration: 0.8 }}
      />
      <div aria-hidden="true" className="absolute top-24 h-[22rem] w-[22rem] rounded-full border border-line sm:h-[28rem] sm:w-[28rem]" />

      {/* Phone frame */}
      <div className="relative z-10 w-[240px] rounded-[2.8rem] 2xl:w-[300px] bg-ink p-[10px] shadow-2xl shadow-ink/30 ring-1 ring-ink/10 sm:w-[270px] dark:bg-[#1b2940] dark:shadow-black/50">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] bg-black">
          <AnimatePresence initial={false}>
            <motion.img
              key={current.id}
              src={current.image}
              alt={`${current.name} app screen`}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, y: 40, scale: 1.04 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>

      {/* Caption + picker */}
      <div className="relative z-10 mt-6 w-full max-w-xs text-center" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-display text-lg font-semibold">{current.name}</p>
            <p className="text-sm text-muted">{current.highlight || current.tagline}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Choose app screen">
          {screens.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${s.name}`}
              onClick={() => setIndex(i)}
              className="group grid h-6 place-items-center px-0.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-primary' : 'w-1.5 bg-line group-hover:bg-muted'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
