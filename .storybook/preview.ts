import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-styling';
import '@styles/globals.css';
import Image from 'next/image';

Image.propTypes = {
  unoptimized: undefined,
};

Image.defaultProps = {
  unoptimized: true,
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: { page: null },
    options: {
      storySort: {
        order: ['Colors', 'Icon', 'Core', 'Page', 'Dashboard', '*'],
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
