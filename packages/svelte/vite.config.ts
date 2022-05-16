import * as path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'A11yUISvelte',
      fileName: (format) => `a11yui-svelte.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
});
