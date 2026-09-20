import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border
        text-ink-muted transition-colors hover:border-accent/60 hover:text-accent
        light:border-border-light light:text-ink-light-muted light:hover:border-accent light:hover:text-accent-dim"
    >
      {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
    </button>
  );
}
