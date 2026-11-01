import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { projectFilters, projects } from '../data/projects';
import { site } from '../data/site';
import Section from './Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const { title, intro } = site.sections.projects;

  // Only show filters that have at least one project.
  const filters = projectFilters.filter(
    (f) => f === 'All' || projects.some((p) => p.categories.includes(f))
  );

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <Section id="projects" title={title} intro={intro}>
      <LayoutGroup>
        <div className="-mx-5 mb-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="group" aria-label="Filter projects" className="flex w-max gap-2 rounded-full border border-line bg-surface p-1.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f ? 'text-on-primary' : 'text-muted hover:text-ink'
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} projects
        </p>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} wide={p.featured && filter === 'All'} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </Section>
  );
}
