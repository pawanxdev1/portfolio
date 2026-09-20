import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ProjectCard({ project, onViewDetails }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="card group flex flex-col overflow-hidden"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-surface-2 light:border-border-light light:bg-surface-light-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-ink-muted/50">preview image not set</span>
        )}
        {project.placeholder && (
          <span className="absolute right-3 top-3 tag border-accent/40 text-accent">placeholder</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink light:text-ink-light">{project.title}</h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-muted light:text-ink-light-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1 text-[13px] font-medium text-accent hover:text-accent-soft"
          >
            View Details
            <ArrowUpRight size={14} />
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-ink-muted hover:text-accent light:text-ink-light-muted"
              >
                <Github size={16} strokeWidth={1.75} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-ink-muted hover:text-accent light:text-ink-light-muted"
              >
                <ExternalLink size={16} strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
