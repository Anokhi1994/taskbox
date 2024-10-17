/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Story location based on your example
  stories: ['../src/components/**/*.stories.@(js|jsx)'],

  // Serve static files from the public directory
  staticDirs: ['../public'],

  addons: [// Enable linking between stories
  '@storybook/addon-links', // Includes controls, actions, docs, and more
  '@storybook/addon-essentials', // Adds support for interaction testing
  '@storybook/addon-interactions', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;
