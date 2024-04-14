import type { Preview } from '@storybook/react';
import {
  DefaultDarkThemes,
  DefaultLightThemes,
} from '../src/ScopeProvider/tokens';
export const checkDark = () =>
  window.window.matchMedia('(prefers-color-scheme: dark)').matches;
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    theme: checkDark() ? DefaultLightThemes : DefaultDarkThemes,
  },
};

export default preview;
