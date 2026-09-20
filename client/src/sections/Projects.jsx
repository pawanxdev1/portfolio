import { useMemo, useState } from 'react';
import projects, { projectCategories } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { cn } from '../utils/cn';

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filtered = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32 light:border-border-light">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            index={4}
            title="Projects"
            description="A selection of projects. Entries marked “placeholder” are examples to be replaced with real work."
          />
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'rounded-md border px-3.5 py-1.5 text-[13px] font-medium transition-colors',
                category === cat
                  ? 'border-accent/50 bg-accent/10 text-accent'
                  : 'border-border text-ink-muted hover:text-ink light:border-border-light light:text-ink-light-muted light:hover:text-ink-light'
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) * 0.05}>
              <ProjectCard project={project} onViewDetails={setActiveProject} />
            </Reveal>
          ))}
        </div>

        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    </section>
  );
}
