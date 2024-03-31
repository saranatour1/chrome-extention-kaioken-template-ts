import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import kaioken from 'vite-plugin-kaioken'
import manifest from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      hmr: { port: 5173 },
    },
    plugins: [crx({ manifest }), kaioken()],
  }
})
