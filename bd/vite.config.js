import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BD/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true,
  },
});
