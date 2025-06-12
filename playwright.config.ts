import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  webServer: {
    command: 'pnpm build && pnpm start',
    port: 3000,
    reuseExistingServer: true,
  },
});

