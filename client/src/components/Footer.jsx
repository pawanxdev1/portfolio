import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../data/profile';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-border light:border-border-light">
      <div className="container-content flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-sm font-semibold text-ink light:text-ink-light">
            {profile.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted light:text-ink-light-muted">
            {profile.role} building scalable web applications with Java, Spring Boot and React.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <div className="border-t border-border py-5 light:border-border-light">
        <p className="container-content text-center font-mono text-xs text-ink-muted/70">
          © {year} {profile.name}. Built with React.
        </p>
      </div>
    </footer>
  );
}
