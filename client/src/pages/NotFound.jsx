import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink light:text-ink-light">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink-muted light:text-ink-light-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
