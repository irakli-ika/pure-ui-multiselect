// rollup.config.js
import { defineConfig } from 'rollup';
import path from 'path';

export default defineConfig([
  // ESM Build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/pure-ui-multiselect.mjs',
      format: 'es'
    }
  },

  // UMD Build (for CDN <script> usage)
  {
    input: 'src/index.js',
    output: {
      file: 'dist/pure-ui-multiselect.umd.js',
      format: 'umd',
      name: 'MultiSelect'
    }
  }
]);
