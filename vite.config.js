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
  // Needed for client-side routing (react-router-dom) with vite preview
  build: {
    rollupOptions: {}
  }
});
