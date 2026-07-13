import React from 'react';
import type { Preview } from '@storybook/react';
import { dsTheme } from './theme';
import { CustomDocsPage } from './DocsPage';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'surface', value: '#F7F7FA' },
        { name: 'dark', value: '#1A1A22' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    docs: {
      theme: dsTheme,
      page: CustomDocsPage,
      toc: {
        title: 'On this page',
        headingSelector: 'h2, h3',
      },
    },
    options: {
      storySort: {
        order: [
          'Get Started',
          ['Introduction', 'Installation', 'Agent access (MCP)', 'Versioning', 'Changelog'],
          'Foundations',
          ['Colour', 'Spacing', 'Radius', 'Typography'],
          'Components',
          ['Button', 'StatusChip'],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
