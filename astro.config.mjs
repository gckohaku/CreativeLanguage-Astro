import { defineConfig } from 'astro/config';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "static",
  outDir: "docs",
  site: "https://gckohaku.github.io/CreativeLanguageArchive",
});