import { defineConfig } from 'vite';
import * as path from 'path';
import preact from '@preact/preset-vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
    preact(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'A11yUIPreact',
      formats: ['es', 'umd'],
      fileName: (format) => `a11yui-preact.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['@a11yui/core', 'preact'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          '@a11yui/core': 'A11yUI',
          preact: 'Preact',
        },
      },
    },
  },
});
