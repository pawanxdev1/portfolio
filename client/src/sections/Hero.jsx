import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import profile from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';

const TERMINAL_LINES = [
  { key: 'role', text: `role: "${profile.role}"` },
  { key: 'stack', text: `stack: [${profile.roleTagline.split(' · ').map((s) => `"${s}"`).join(', ')}]` },
  { key: 'status', text: `status: "${profile.availability}"` },
];

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-20 sm:pt-28">
      {/* subtle grid backdrop, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-ink opacity-[0.05] light:text-ink-light"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-content grid gap-14 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 light:border-border-light"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-[11px] text-ink-muted light:text-ink-light-muted">
              {profile.availability}
            </span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-accent">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl light:text-ink-light"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 text-xl font-medium text-ink-muted sm:text-2xl light:text-ink-light-muted"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-muted light:text-ink-light-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={scrollToProjects} className="btn-primary">
              View My Projects
            </button>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <FileDown size={15} strokeWidth={1.75} />
              Download Resume
            </a>
            <button onClick={scrollToContact} className="btn-secondary">
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
            >
              <Github size={19} strokeWidth={1.75} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
            >
              <Linkedin size={19} strokeWidth={1.75} />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-accent light:text-ink-light-muted"
            >
              <Mail size={19} strokeWidth={1.75} />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3 light:border-border-light">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3 font-mono text-[11px] text-ink-muted/70">profile.json</span>
            </div>
            <div className="space-y-2 px-5 py-6 font-mono text-[13px] leading-relaxed">
              <p className="text-ink-muted">{'{'}</p>
              {TERMINAL_LINES.map((line, i) => (
                <p key={line.key} className="pl-4 text-ink light:text-ink-light">
                  <span className="text-accent2">{line.text}</span>
                  {i < TERMINAL_LINES.length - 1 ? ',' : ''}
                </p>
              ))}
              <p className="text-ink-muted">
                {'}'}
                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent align-middle" />
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
          />
        </motion.div>
      </motion.div>

      <motion.button
        variants={item}
        initial="hidden"
        animate="show"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-muted/60 hover:text-accent sm:block"
      >
        <ArrowDown size={18} className={reduced ? '' : 'animate-bounce'} />
      </motion.button>
    </section>
  );
}
