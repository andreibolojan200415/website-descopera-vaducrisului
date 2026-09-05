// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://andreibolojan200415.github.io/website-descopera-vaducrisului/',
  base: '/website-descopera-vaducrisului/',
  vite: {
    plugins: [tailwindcss()]
  }
});