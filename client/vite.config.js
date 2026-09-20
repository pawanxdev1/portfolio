import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // When running `vercel dev` at the project root, it serves both the
      // client and the /api functions on one port, so this proxy is only
      // needed if you run the Vite dev server standalone against a separate
      // API host (set VITE_API_URL accordingly in that case).
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
