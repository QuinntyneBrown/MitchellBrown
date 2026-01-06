/// <reference types="vitest" />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    angular({
      tsconfig: resolve(__dirname, 'tsconfig.spec.json'),
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, './projects/mitchell-brown/src/test-setup.ts')],
    include: ['projects/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', '**/e2e/**'],
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    } as any,
    server: {
      deps: {
        inline: ['@angular/**'],
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '**/test-setup.ts',
        '**/*.spec.ts',
        '**/*.stories.ts',
        '**/main.ts',
        '**/index.ts',
      ],
    },
  },
  define: {
    'import.meta.vitest': undefined,
  },
});
