import skills from '../data/skills';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { cn } from '../utils/cn';

const LEVEL_STYLES = {
  Core: 'text-accent border-accent/40',
  Working: 'text-accent2 border-accent2/40',
  Familiar: 'text-ink-muted border-border light:text-ink-light-muted light:border-border-light',
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32 light:border-border-light">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            index={2}
            title="Technical Skills"
            description="Grouped by area, with an honest read on depth — not arbitrary percentages."
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-muted/80 light:text-ink-light-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-md border bg-surface px-3 py-1.5 text-[13px]',
                      'light:bg-surface-light',
                      LEVEL_STYLES[skill.level]
                    )}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-5 font-mono text-[11px] text-ink-muted/70">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" /> Core
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent2" /> Working
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink-muted" /> Familiar
          </span>
        </Reveal>
      </div>
    </section>
  );
}
