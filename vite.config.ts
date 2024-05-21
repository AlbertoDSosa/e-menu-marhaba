import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  resolve: {
    alias: [
      {
        find: 'hooks',
        replacement: resolve(__dirname, './src/hooks')
      },
      {
        find: 'definitions',
        replacement: resolve(__dirname, './src/definitions')
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, './src/utils')
      },
      {
        find: 'components',
        replacement: resolve(__dirname, './src/components')
      },
      {
        find: 'pages',
        replacement: resolve(__dirname, './src/pages')
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets')
      },
      {
        find: 'theme',
        replacement: resolve(__dirname, './src/theme')
      }
    ]
  }
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setupTests.ts'
  // }
});
