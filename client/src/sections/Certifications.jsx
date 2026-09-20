import { Award, ExternalLink } from 'lucide-react';
import certifications from '../data/certifications';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border py-24 sm:py-32 light:border-border-light"
    >
      <div className="container-content">
        <Reveal>
          <SectionHeading
            index={6}
            title="Certifications"
            description="Professional certifications and credentials."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card flex h-full flex-col p-5">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Award size={18} strokeWidth={1.75} />
                  </div>
                  {cert.placeholder && <span className="tag border-accent/40 text-accent">placeholder</span>}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-ink light:text-ink-light">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-ink-muted light:text-ink-light-muted">{cert.issuer}</p>

                <div className="mt-3 flex flex-1 flex-col gap-1 font-mono text-xs text-ink-muted/70">
                  <span>Issued {cert.date}</span>
                  {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-soft"
                  >
                    Verify Credential <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
