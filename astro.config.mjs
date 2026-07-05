// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // 本番URLを設定してください (例: "https://yourname.github.io")
  site: "https://nyuun.com",

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
  },

  adapter: cloudflare(),
});