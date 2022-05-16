import { defineConfig } from 'vite';
import * as path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'A11yUIUtils',
      formats: ['es', 'umd'],
      fileName: (format) => `a11yui-utils.${format}.js`,
    },
  },
});
