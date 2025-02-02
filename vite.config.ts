import { defineConfig } from 'vite'
import path from 'path'
import { copySync } from 'fs-extra/esm';
import { dirname } from 'path';
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img';
import Icons from 'unplugin-icons/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  resolve: {
    alias: {
      '$lib': path.resolve('./src/lib/'),
      '$api': path.resolve('/src/routes/api/'),
      '$img': path.resolve('/img/'),
    },
  },

  server: {
		fs: {
			allow: ['site'], // Verzeichnis erlauben
		},
	},

  plugins: [
    enhancedImages(),
    sveltekit(),
    ViteYaml(),
    Icons({
      compiler: 'svelte',
    })
  ]
})