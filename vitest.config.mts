import { defineConfig, } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      all: true,
      include: [
        'src',
      ],
      thresholds: {
        100: true,
      },
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
