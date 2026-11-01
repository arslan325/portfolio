import { motion } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import PhoneShowcase from './PhoneShowcase';

// One orchestrated entrance: text lines arrive in sequence, then the phone.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
      {/* Subtle dotted grid in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgb(var(--color-line))_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {profile.available && (
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-muted"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              {profile.availability}
            </motion.p>
          )}

          <motion.p variants={item} className="mt-8 text-base font-semibold text-primary sm:text-lg">
            {profile.name}, {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-[2.5rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[3.6rem] xl:text-[4.2rem] 2xl:text-[4.8rem]"
          >
            {profile.headline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted 2xl:max-w-2xl">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              See my work
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className="btn-ghost">
                <Download size={16} />
                Download CV
              </a>
            )}
          </motion.div>

          <motion.dl variants={item} className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.p variants={item} className="mt-6 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={15} />
            {profile.location}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneShowcase />
        </motion.div>
      </div>
    </section>
  );
}
