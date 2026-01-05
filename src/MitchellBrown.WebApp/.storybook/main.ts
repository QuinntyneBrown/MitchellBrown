import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../projects/mitchell-brown-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true
  },
};

export default config;
