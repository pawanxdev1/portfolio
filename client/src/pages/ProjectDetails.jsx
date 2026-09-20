import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import projects from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container-content py-20 sm:py-28">
      <Link
        to="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent light:text-ink-light-muted"
      >
        <ArrowLeft size={15} />
        Back to Projects
      </Link>

      {project.placeholder && (
        <p className="tag mb-4 inline-flex border-accent/40 text-accent">
          placeholder project — replace with real details in src/data/projects.js
        </p>
      )}

      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl light:text-ink-light">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
              Overview
            </h2>
            <p className="max-w-prose text-[15px] leading-relaxed text-ink-muted light:text-ink-light-muted">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
              Problem Solved
            </h2>
            <p className="max-w-prose text-[15px] leading-relaxed text-ink-muted light:text-ink-light-muted">
              {project.problem}
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-muted/80">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[15px] leading-relaxed text-ink-muted light:text-ink-light-muted"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card h-fit space-y-4 p-5">
          <div className="flex h-40 items-center justify-center rounded-md border border-border bg-surface-2 light:border-border-light light:bg-surface-light-2">
            {project.image ? (
              <img src={project.image} alt={`${project.title} preview`} className="h-full w-full rounded-md object-cover" />
            ) : (
              <span className="font-mono text-xs text-ink-muted/50">preview image not set</span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary justify-center">
                <Github size={15} /> View Code
              </a>
            ) : (
              <p className="text-center text-xs text-ink-muted/60">GitHub link not set</p>
            )}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary justify-center">
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
