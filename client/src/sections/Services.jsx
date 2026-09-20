import {
  Layers,
  ServerCog,
  Network,
  MonitorSmartphone,
  Database,
  Plug,
  ShieldCheck,
} from 'lucide-react';
import profile from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const ICONS = [Layers, ServerCog, Network, MonitorSmartphone, Database, Plug, ShieldCheck];

export default function Services() {
  return (
    <section id="services" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          index={7}
          title="What I Do"
          description="The core areas I focus on across a full stack build."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.services.map((service, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.06}>
              <div className="card h-full p-5">
                <Icon size={20} strokeWidth={1.5} className="text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-ink light:text-ink-light">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted light:text-ink-light-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
