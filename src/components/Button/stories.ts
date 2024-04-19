import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DefaultLightThemes } from '../ScopeProvider/tokens';
import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      defaultValue: 'default',
      description: 'The type of the button.',
      control: { type: 'select' },
      options: ['default', 'primary', 'danger'],
    },
    size: {
      defaultValue: 'medium',
      description: 'The size of the button.',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    htmlType: {
      defaultValue: 'button',
      description: 'The role of the button.',
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Default Button',
    theme: DefaultLightThemes,
  },
};
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    children: 'Danger Button',
  },
};

export const Large: Story = {
  args: {
    htmlType: 'button',
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
