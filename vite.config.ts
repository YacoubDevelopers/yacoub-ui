/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      copyDtsFiles: false,
      cleanVueFileName: true,
      clearPureImport: false,
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'YacoubUI',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@headlessui/vue', 'lucide-vue-next', 'tailwindcss'],
      output: {
        exports: 'named',
        interop: 'default',
        globals: {
          vue: 'Vue',
          '@headlessui/vue': 'HeadlessUI',
          'lucide-vue-next': 'LucideVue',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
})
