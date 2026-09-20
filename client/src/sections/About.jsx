import { Code2, Database, ServerCog, Layers } from 'lucide-react';
import profile from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const ICONS = [Code2, ServerCog, Layers, Database];

export default function About() {
  return (
    <section id="about" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          index={1}
          title="About"
          description="A quick summary of how I work and what I focus on as a developer."
        />
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5">
          {profile.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="max-w-prose text-[15px] leading-relaxed text-ink-muted light:text-ink-light-muted"
            >
              {p}
            </p>
          ))}

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink light:text-ink-light">
                  {stat.value}
                  {stat.placeholder && (
                    <span className="ml-1 align-top font-mono text-[10px] text-ink-muted/60">*</span>
                  )}
                </dd>
                <p className="mt-1 text-xs text-ink-muted light:text-ink-light-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
          {profile.stats.some((s) => s.placeholder) && (
            <p className="pt-1 font-mono text-[11px] text-ink-muted/60">
              * placeholder value — update in src/data/profile.js
            </p>
          )}
        </Reveal>

        <Reveal delay={0.08} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {profile.about.highlights.map((h, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={h.title} className="card p-5">
                <Icon size={20} strokeWidth={1.5} className="text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-ink light:text-ink-light">
                  {h.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted light:text-ink-light-muted">
                  {h.description}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
