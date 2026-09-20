import { useEffect, useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import profile from '../data/profile';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const goToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-canvas/90 backdrop-blur light:border-border-light light:bg-canvas-light/90'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => goToSection('home')}
          className="font-display text-[15px] font-semibold tracking-tight text-ink light:text-ink-light"
        >
          <span className="text-accent">&lt;</span>
          {profile.name}
          <span className="text-accent">/&gt;</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goToSection(link.id)}
                className={cn(
                  'rounded px-3 py-2 text-[13px] font-medium transition-colors',
                  activeId === link.id
                    ? 'text-accent'
                    : 'text-ink-muted hover:text-ink light:text-ink-light-muted light:hover:text-ink-light'
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-[13px]
              font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent
              light:border-border-light light:text-ink-light light:hover:border-accent light:hover:text-accent-dim"
          >
            <FileDown size={14} strokeWidth={1.75} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink
              light:border-border-light light:text-ink-light"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-canvas px-6 pb-6 pt-2 lg:hidden light:border-border-light light:bg-canvas-light">
          <ul className="flex flex-col gap-1 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goToSection(link.id)}
                  className={cn(
                    'w-full rounded px-2 py-3 text-left text-[15px] font-medium',
                    activeId === link.id ? 'text-accent' : 'text-ink light:text-ink-light'
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-md border border-border py-3
              text-sm font-medium text-ink light:border-border-light light:text-ink-light"
          >
            <FileDown size={14} strokeWidth={1.75} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
