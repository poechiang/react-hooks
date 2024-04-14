import type { Meta, StoryObj } from '@storybook/react';
import { Text as TextComponent } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Text',
  component: TextComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      defaultValue: 'inherit',
      description: 'The color of the Text.',
      control: { type: 'color' },
    },
    fontSize: {
      defaultValue: 'inherit',
      description: 'The font size of the text.',
      control: { type: 'string' },
    },
    role: {
      defaultValue: 'span',
      description: 'The role of the text.',
      control: { type: 'select' },
      options: ['span', 'title', 'label'],
    },
    level: {
      defaultValue: 4,
      description: 'The title level of the Text as [title] role.',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    semi: {
      defaultValue: true,
      description: 'whether the text is semi or not when has label role.',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof TextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    color: 'red',
    fontSize: 16,
    children: 'color text',
  },
};

export const Label: Story = {
  args: {
    role: 'label',
    fontSize: 16,
    children: 'lebel',
    semi: true,
  },
};
export const Title: Story = {
  args: {
    role: 'title',
    level: 1,
    children: 'h1 title',
  },
};
