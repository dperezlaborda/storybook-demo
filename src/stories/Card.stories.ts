
import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',  // Nombre que aparecerá en Storybook
  component: Card,
  parameters: {
    layout: 'centered', // Opcional: Esto centra el componente en Storybook
  },
  argTypes: {
    title: { control: 'text' },  // Control de texto para el título
    content: { control: 'text' }, // Control de texto para el contenido
    backgroundColor: { control: 'color' },  // Control de color para el fondo
  },
  args: {
    title: 'Card Title', // Valor por defecto para el título
    content: 'This is some content inside the card.', // Valor por defecto para el contenido
    backgroundColor: 'lightblue', // Valor por defecto para el color de fondo
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Card Title',
        content: 'This is the default content of the card.',
    },
};