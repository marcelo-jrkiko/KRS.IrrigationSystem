import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      resolvers: [BootstrapVueNextResolver()],
      dts: false,
    }),

    /* {
      ...checker({
        typescript: true,
        vueTsc: true,
        eslint: {
          lintCommand:
            'eslint . --cache --cache-location ./node_modules/.vite/vite-plugin-eslint', // for example, lint .ts & .tsx
        },
        overlay: {
          initialIsOpen: false,
        },
      }),
      apply: 'serve',
    }, */
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
    port: 8200,
  },
  // Build Options
  // https://vitejs.dev/config/build-options.html
  build: {
    // Build Target
    // https://vitejs.dev/config/build-options.html#build-target
    target: 'esnext',
    // Minify option
    // https://vitejs.dev/config/build-options.html#build-minify
    minify: 'esbuild',
    // Rollup Options
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      // @ts-ignore
      output: {
        manualChunks: {
          // Split external library from transpiled code.
          vue: ['vue', 'vue-router', 'pinia', 'pinia-plugin-persistedstate'],
        },
      },
    },
  },
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
});
