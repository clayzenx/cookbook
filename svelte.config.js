import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $lib: resolve('./src/lib'),
          $components: resolve('./src/lib/components'),
          $utils: resolve('./src/lib/utils'),
          $assets: resolve('./src/lib/assets'),
          $store: resolve('./src/store')
        },
      },
    },
  }
};

export default config;
