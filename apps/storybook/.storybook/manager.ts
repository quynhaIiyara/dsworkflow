import { addons } from '@storybook/manager-api';
import { dsTheme } from './theme';

addons.setConfig({
  theme: dsTheme,
  sidebar: {
    showRoots: true,
    // Render sidebar labels as plain text (no icons attached inside the label).
    renderLabel: ({ name }) => name,
  },
  toolbar: {
    'storybook/background': { hidden: true },
    'storybook/viewport': { hidden: true },
    'storybook/measure': { hidden: true },
    'storybook/outline': { hidden: true },
  },
  enableShortcuts: true,
  showToolbar: false,
});
