import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fallenlineage.org',
  trailingSlash: 'never',
  integrations: [sitemap()]
});
