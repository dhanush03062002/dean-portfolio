import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    open: false
  },
  preview: {
    port: 3000,
    host: true,
    open: false
  },
  build: {
    // Raise warning threshold to 600 kB (we're splitting so individual chunks will be smaller)
    chunkSizeWarningLimit: 600,
    // Minify with esbuild (default) — fast and effective
    minify: 'esbuild',
    // Target modern browsers — smaller output, no legacy polyfills
    target: 'es2020',
    rollupOptions: {
      output: {
        // ── Manual chunk splitting ──────────────────────────────────────
        // Each chunk is cached independently by the browser.
        // User only re-downloads a chunk when THAT chunk changes.
        manualChunks(id) {
          // React core — almost never changes → long cache lifetime
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // React Router — changes rarely
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // Framer Motion — large animation library, cache separately
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          // Lucide icons — cache separately
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
          // Lenis smooth scroll
          if (id.includes('node_modules/lenis')) {
            return 'vendor-lenis';
          }
          // Lazy-loaded page chunks (ProjectsPage, ProjectDetailPage)
          // These are already split by dynamic import() in App.jsx
        },
      },
    },
  },
});
