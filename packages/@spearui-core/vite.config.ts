import { defineConfig } from 'vite';
import * as path from 'path';
import dts from 'vite-plugin-dts';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'SpearUICore',
      formats: ['es', 'umd'],
      fileName: (format) => `spearui-core.${format}.js`,
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
