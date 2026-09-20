/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#12151A',
          light: '#F6F5F1',
        },
        surface: {
          DEFAULT: '#1B2027',
          2: '#232A34',
          light: '#FFFFFF',
          'light-2': '#EFEDE6',
        },
        border: {
          DEFAULT: '#2C333F',
          light: '#DEDAD0',
        },
        ink: {
          DEFAULT: '#ECEAE5',
          muted: '#8D94A1',
          light: '#1A1D22',
          'light-muted': '#5B6270',
        },
        accent: {
          DEFAULT: '#D4A954',
          soft: '#E8C784',
          dim: '#8A6E3A',
        },
        accent2: {
          DEFAULT: '#5FA8D3',
          soft: '#8FC3E3',
        },
        success: '#6FBF8B',
        danger: '#E07A6B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.03), 0 12px 24px -12px rgba(0,0,0,0.5)',
        'card-light': '0 1px 0 rgba(0,0,0,0.02), 0 12px 24px -14px rgba(20,20,20,0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // Enables `light:text-ink-light` etc. Pairs with darkMode: 'class',
      // where the root <html> element carries either .dark or .light.
      addVariant('light', ':is(.light &)');
    },
  ],
};
