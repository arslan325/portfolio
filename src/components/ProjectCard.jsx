import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, wide }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition-shadow duration-300 hover:shadow-2xl hover:shadow-ink/10 dark:hover:shadow-black/40 ${
        wide ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      {/* Screenshot panel */}
      <div
        className={`relative overflow-hidden ${wide ? 'h-72 md:h-auto md:min-h-[24rem] md:w-1/2' : 'h-64'}`}
        style={{ background: `linear-gradient(150deg, ${project.color}, ${project.color}cc 60%, ${project.color}88)` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:16px_16px]"
        />
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className={`absolute left-1/2 -translate-x-1/2 rounded-[1.6rem] border-[5px] border-black/85 shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-3 ${
            wide ? 'top-10 w-44 md:w-52' : 'top-8 w-36'
          }`}
        />
      </div>

      {/* Text */}
      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'md:justify-center md:p-10' : ''}`}>
        <p className="text-sm font-medium text-muted">{project.platform}</p>
        <h3 className={`mt-1 font-bold ${wide ? 'text-3xl' : 'text-2xl'}`}>{project.name}</h3>
        <p className="mt-1 font-medium text-primary">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        {project.highlight && (
          <p className="mt-4 rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary">
            {project.highlight}
          </p>
        )}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-4 !py-2"
              aria-label={`${link.label} for ${project.name} (opens in a new tab)`}
            >
              {link.label}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
