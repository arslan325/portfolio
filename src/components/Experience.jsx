import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { experience, visibleHighlights } from '../data/experience';
import { site } from '../data/site';
import Section from './Section';

function Role({ job, isCurrent }) {
  const [open, setOpen] = useState(false);
  const shown = job.highlights.slice(0, visibleHighlights);
  const extra = job.highlights.slice(visibleHighlights);

  return (
    <li className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
      {/* timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg ${
          isCurrent ? 'bg-primary ring-4 ring-primary/20' : 'bg-muted/60'
        }`}
      />

      <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6">
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">
            {job.url ? (
              <a href={job.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                {job.company}
                <ExternalLink size={16} className="opacity-50" />
              </a>
            ) : (
              job.company
            )}
          </h3>
          <p className="font-medium text-primary">{job.role}</p>
        </div>
        <div className="text-sm text-muted md:text-right">
          <p className="font-medium text-ink">{job.period}</p>
          <p>{job.location}</p>
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-muted">{job.summary}</p>

      <ul className="mt-4 max-w-2xl space-y-2.5">
        {shown.map((h) => (
          <li key={h} className="flex gap-3">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
        <AnimatePresence initial={false}>
          {open &&
            extra.map((h, i) => (
              <motion.li
                key={h}
                className="flex gap-3 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto', transition: { delay: i * 0.04 } }}
                exit={{ opacity: 0, height: 0 }}
              >
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {extra.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1 rounded-full text-sm font-semibold text-primary hover:underline"
        >
          {open ? 'Show fewer' : `Show all ${job.highlights.length} points`}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>
      )}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {job.tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Experience() {
  const { title, intro } = site.sections.experience;
  return (
    <Section id="experience" title={title} intro={intro} className="bg-surface">
      <ol className="relative ml-1.5 border-l border-line">
        {experience.map((job, i) => (
          <Role key={job.company} job={job} isCurrent={i === 0} />
        ))}
      </ol>
    </Section>
  );
}
