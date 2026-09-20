import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeBtnRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="card relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-border p-5 light:border-border-light">
              <h3 id="project-modal-title" className="text-lg font-semibold text-ink light:text-ink-light">
                {project.title}
              </h3>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:text-accent light:border-border-light"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-6 p-5">
              {project.placeholder && (
                <p className="tag inline-flex border-accent/40 text-accent">
                  placeholder project — replace with real details
                </p>
              )}

              <div>
                <h4 className="mb-1.5 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
                  Overview
                </h4>
                <p className="text-[14px] leading-relaxed text-ink-muted light:text-ink-light-muted">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="mb-1.5 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
                  Problem Solved
                </h4>
                <p className="text-[14px] leading-relaxed text-ink-muted light:text-ink-light-muted">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[14px] leading-relaxed text-ink-muted light:text-ink-light-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Github size={15} /> View Code
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                ) : null}
                <Link to={`/projects/${project.id}`} className="btn-primary" onClick={onClose}>
                  Open Full Page
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
