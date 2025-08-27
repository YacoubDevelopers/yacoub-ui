import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      const tailwindcss = (await import('@tailwindcss/vite')).default
      return mergeConfig(config, {
        plugins: [tailwindcss()],
      })
    }
    return config
  },
}
export default config
