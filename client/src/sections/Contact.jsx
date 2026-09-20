import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import profile from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { submitContactForm } from '../services/api';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' });

  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const onSubmit = async (values) => {
    setStatus(null);
    try {
      const res = await submitContactForm(values);
      setStatus({ type: 'success', message: res.message || 'Message sent successfully.' });
      reset();
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        'Something went wrong while sending your message. Please try again or email me directly.';
      setStatus({ type: 'error', message });
    }
  };

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32 light:border-border-light">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            index={8}
            title="Contact"
            description="Have an opportunity or a question? Send a message and I'll get back to you."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-5">
            <a
              href={profile.socials.email}
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-accent light:text-ink-light-muted"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Mail size={16} strokeWidth={1.75} />
              </span>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-ink-muted light:text-ink-light-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Phone size={16} strokeWidth={1.75} />
              </span>
              {profile.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-muted light:text-ink-light-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                <MapPin size={16} strokeWidth={1.75} />
              </span>
              {profile.location}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full rounded-md border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink
                      outline-none transition-colors focus:border-accent
                      light:border-border-light light:bg-canvas-light light:text-ink-light"
                    {...register('name', {
                      required: 'Name is required.',
                      minLength: { value: 2, message: 'Name must be at least 2 characters.' },
                    })}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-danger">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full rounded-md border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink
                      outline-none transition-colors focus:border-accent
                      light:border-border-light light:bg-canvas-light light:text-ink-light"
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' },
                    })}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-danger">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className="w-full rounded-md border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink
                    outline-none transition-colors focus:border-accent
                    light:border-border-light light:bg-canvas-light light:text-ink-light"
                  {...register('subject', {
                    required: 'Subject is required.',
                    minLength: { value: 3, message: 'Subject must be at least 3 characters.' },
                  })}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-danger">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full resize-none rounded-md border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink
                    outline-none transition-colors focus:border-accent
                    light:border-border-light light:bg-canvas-light light:text-ink-light"
                  {...register('message', {
                    required: 'Message is required.',
                    minLength: { value: 20, message: 'Message must be at least 20 characters.' },
                  })}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-danger">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center sm:w-auto">
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status && (
                <div
                  role="status"
                  className={`flex items-start gap-2 rounded-md border p-3 text-[13px] leading-relaxed ${
                    status.type === 'success'
                      ? 'border-success/30 bg-success/10 text-success'
                      : 'border-danger/30 bg-danger/10 text-danger'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  )}
                  {status.message}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
