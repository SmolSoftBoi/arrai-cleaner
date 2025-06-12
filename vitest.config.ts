import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    include: ['**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: path.resolve(__dirname, 'test/setup.ts'),
  },
});

