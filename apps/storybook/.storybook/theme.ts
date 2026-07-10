import { create } from '@storybook/theming/create';

// Matches the mockup: light theme, sharp typography, subtle greys, green accent.
export const dsTheme = create({
  base: 'light',

  brandTitle: 'Design System  |  quynhaliyara/rn-ds',
  brandUrl: '/',
  brandTarget: '_self',

  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
  fontCode: '"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace',

  // Green accent (mockup uses lime/spring green for the selected state).
  colorPrimary: '#5FA82D',
  colorSecondary: '#5FA82D',

  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#F7F7FA',
  appBorderColor: '#EEEEF2',
  appBorderRadius: 6,

  textColor: '#1A1A22',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#8A8A96',

  barTextColor: '#8A8A96',
  barHoverColor: '#1A1A22',
  barSelectedColor: '#5FA82D',
  barBg: '#FFFFFF',

  inputBg: '#F7F7FA',
  inputBorder: '#EEEEF2',
  inputTextColor: '#1A1A22',
  inputBorderRadius: 6,

  booleanBg: '#EEEEF2',
  booleanSelectedBg: '#5FA82D',
});
