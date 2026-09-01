import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages uses a repository subpath; other hosts continue using the site root.
  base: process.env.GITHUB_ACTIONS ? '/Personal_Web/' : '/',
});
