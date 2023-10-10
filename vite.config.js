import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path when served in production (e.g., "/my-app/").
  base: "/",

  publicDir: "frontend/public",

  // Define the entry point of your application.
  entry: {
    main: "src/main.jsx",
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // Add this line to include _redirects
        _redirects: resolve(__dirname, "_redirects"),
      },
    },
  },

  // Configure the development server options.
  server: {
    port: 3333,
    open: true,
  },

  // Configure how Vite handles imports and resolves files.
  resolve: {
    alias: {
      // Create aliases for commonly used paths.
      "@": "/src",
    },
  },

  // Configure plugins for Vite.
  plugins: [react()],
});
