import { defineConfig, } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      100: true,
      all: true,
      src: [
        'src',
      ],
    },
    exclude: [
      'build',
      'dev-build',
      'node_modules',
      'website',
    ],
    globals: true,
    mockReset: true,
    restoreMocks: true,
    watch: false,
  },
});
