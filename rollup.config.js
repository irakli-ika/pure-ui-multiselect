// rollup.config.js
import { defineConfig } from 'rollup';
import path from 'path';

export default defineConfig([
  // CommonJS builder (Node.js or older module systems)
  {
    input: 'src/index.js',
    output: {
      file: 'dist/pure-ui-multiselect.cjs.js',
      format: 'cjs'
    }
  },

  // ESM Build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/pure-ui-multiselect.esm.js',
      format: 'esm'
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
