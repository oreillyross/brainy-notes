import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import type { UserConfig as ViteUserConfigInterface } from 'vitest/config';
import svgrPlugin from 'vite-plugin-svgr';

const vitestConfig: ViteUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom"
  }
}

/// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  test: vitestConfig.test
});
