import experience from '../data/experience';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

function formatRange(start, end) {
  return `${start} — ${end}`;
}

export default function Experience() {
  return (
    <section id="experience" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading index={3} title="Experience" description="My professional path so far." />
      </Reveal>

      <ol className="relative border-l border-border pl-8 light:border-border-light">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="relative mb-12 last:mb-0">
            <Reveal delay={i * 0.06}>
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-accent light:border-canvas-light" />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-ink light:text-ink-light">
                  {job.position}
                </h3>
                {job.placeholder && <span className="tag border-accent/40 text-accent">placeholder</span>}
              </div>

              <p className="mt-1 text-sm text-ink-muted light:text-ink-light-muted">
                {job.company} · {job.location}
              </p>
              <p className="mt-0.5 font-mono text-xs text-ink-muted/70">
                {formatRange(job.startDate, job.endDate)}
              </p>

              <p className="mt-3 max-w-prose text-[14px] leading-relaxed text-ink-muted light:text-ink-light-muted">
                {job.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {job.responsibilities.map((r, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-[14px] leading-relaxed text-ink-muted light:text-ink-light-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted/60" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
