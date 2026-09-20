import { GraduationCap } from 'lucide-react';
import education from '../data/education';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Education() {
  return (
    <section id="education" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading index={5} title="Education" description="Academic background." />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="card flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                <GraduationCap size={18} strokeWidth={1.75} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-ink light:text-ink-light">
                    {edu.degree}
                  </h3>
                  {edu.placeholder && <span className="tag border-accent/40 text-accent">placeholder</span>}
                </div>
                <p className="mt-1 text-sm text-ink-muted light:text-ink-light-muted">
                  {edu.institution} · {edu.location}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-muted/70">
                  <span>{edu.year}</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
