// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/porfolio-dev/',
  // reemplaza con el nombre exacto de tu repo
  integrations: [tailwind()],
});
