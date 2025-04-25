import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

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
  // tags: ['!autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },  // PROP:  cambia su color dependiendo de la interacción
    label: { control: 'text' }, // PROP:  cambia su texto dependiendo de la interacción
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), label: 'Click me' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    // label: 'Button', //FIGURA EL PROP POR DEFAULT 'CLICK ME'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Grande',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Test: Story = {
  args: {
    primary: false,
    label: "Button"
  }
};

export const Error: Story = {
  args: {
    primary: true,
    label: "Button",
    backgroundColor: "red"
  }
};
