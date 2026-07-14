import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v4.0.0',
    docs: {
      description: {
        component:
          'Named type roles from `design.md`. Pick a role and the fontSize / lineHeight / weight / tracking / textTransform come from `@rn-ds/tokens/typography.role.*`. Colour defaults per role and can be overridden with any colour token.',
      },
    },
  },
  args: {
    role: 'body',
    children: 'The quick brown fox jumps over the lazy dog',
  },
  argTypes: {
    role: {
      control: 'select',
      options: [
        'headline',
        'title',
        'cardTitle',
        'section',
        'subtitle',
        'body',
        'label',
        'dense',
        'caption',
        'tab',
        'eyebrow',
        'cta',
      ],
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'ink',
        'inkBody',
        'inkMuted',
        'inkPlaceholder',
        'green',
        'blue',
        'red',
        'amber',
      ],
    },
    size: {
      control: 'select',
      options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    weight: {
      control: 'select',
      options: [undefined, 'regular', 'medium', 'semibold', 'bold'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Body: Story = {};

export const Headline: Story = {
  args: { role: 'headline', children: 'Good morning, Suhandi' },
};

export const Title: Story = {
  args: { role: 'title', children: 'Rojak Farm' },
};

export const Eyebrow: Story = {
  args: { role: 'eyebrow', children: 'Order · SO-24815' },
};

export const CardTitle: Story = {
  args: { role: 'cardTitle', children: 'Dewi Lestari' },
};

export const AllRoles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <Text role="headline">Headline · greeting</Text>
      <Text role="title">Title · farm name</Text>
      <Text role="cardTitle">Card title · farmer on a card</Text>
      <Text role="section">Section · heading</Text>
      <Text role="subtitle">Subtitle · supporting line</Text>
      <Text role="body">Body · the default reading size</Text>
      <Text role="label">Label · card subtitle</Text>
      <Text role="dense">Dense · compact meta row</Text>
      <Text role="caption">Caption · metadata</Text>
      <Text role="tab">Tab</Text>
      <Text role="eyebrow">Eyebrow · category tag</Text>
      <Text role="cta">CTA · action label</Text>
    </div>
  ),
};

export const ColorOverride: Story = {
  args: { role: 'cta', color: 'green', children: 'Start service' },
};

export const SizeOverride: Story = {
  args: { role: 'body', size: 'lg', children: '`role="body"` at `size="lg"` — 18px' },
  parameters: {
    docs: {
      description: {
        story:
          "Pass `size` (a `typography.size` token) to override the role's fontSize. Everything else — lineHeight, weight, tracking — stays from the role.",
      },
    },
  },
};

export const WeightOverride: Story = {
  args: { role: 'body', weight: 'bold', children: '`role="body"` at `weight="bold"`' },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `weight` (a `typography.weight` token) to override the role\'s fontWeight. For off-scale weights or sizes, use the `style` prop as an escape hatch — e.g. `style={{ fontSize: 12.5 }}` for `.rqc-slot`.',
      },
    },
  },
};
