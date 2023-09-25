import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  publicDir: './website/public',
  // site: 'https://platic.wstone.uk',
  srcDir: './website',
})