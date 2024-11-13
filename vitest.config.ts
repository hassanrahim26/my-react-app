import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts', // Ensure this path points to the correct location
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
