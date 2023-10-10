import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  publicDir: 'frontend/public',
  entry: {
    main: 'src/main.jsx',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3333,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
});
