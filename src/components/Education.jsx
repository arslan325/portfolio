import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/education';
import { site } from '../data/site';
import Section from './Section';

export default function Education() {
  const { title, intro } = site.sections.education;

  return (
    <Section id="education" title={title} intro={intro}>
      <ol className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {education.map((e) => (
          <li
            key={e.degree}
            className={`relative flex flex-col overflow-hidden rounded-card border bg-surface p-7 sm:p-9 ${
              e.current ? 'border-primary/40 shadow-xl shadow-primary/10' : 'border-line'
            }`}
          >
            {e.current && (
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
            )}

            <div className="flex items-start justify-between gap-4">
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                  e.current ? 'bg-primary text-on-primary' : 'bg-primary/10 text-primary'
                }`}
              >
                <GraduationCap size={24} />
              </span>
              {e.current ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  In progress
                </span>
              ) : (
                e.grade && (
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
                    {e.grade}
                  </span>
                )
              )}
            </div>

            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{e.degree}</h3>
            <p className="mt-2 text-lg font-medium text-primary">{e.school}</p>

            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="font-semibold text-ink">{e.period}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} />
                {e.location}
              </span>
            </p>

            {e.description && <p className="mt-5 leading-relaxed text-muted">{e.description}</p>}

            {e.coursework?.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold">Relevant coursework</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <li key={c} className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm font-medium">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
