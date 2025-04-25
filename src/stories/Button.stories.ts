import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
//configuracion global
const meta = {
  title: 'Example/Button', // Nombre que figura en la barra lateral
  component: Button, //se asigna el componente
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  tags: ['autodocs'], // se puede usar para generar documentación automáticamente
  // tags: ['!autodocs'],
  argTypes: { // define las propiedades (props) de tu componente y cómo son controladas en la interfaz de Storybook
    backgroundColor: { control: 'color' },  // PROP:  cambia su color dependiendo de la interacción
    label: { control: 'text' }, // PROP:  cambia su texto dependiendo de la interacción
    borderColor: { control: 'color' },
  },
  args: { onClick: action('🔥 ¡Botón clickeado!'), label: 'Click me' }, //definen los valores iniciales de las props
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    label: 'Grande Button',
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
    label: "PRUEBA"
  }
};

//este botón ya dispara correctamente el evento de GTM
export const ConTracking: Story = {
  args: {
    primary: true,
    label: "Button",
    backgroundColor: "blue",
    onClick: () => {
      console.log('📊 Evento de tracking ejecutado');

      // Simulación de evento a GTM
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'boton_custom_click',
        category: 'CTA Storybook',
        label: 'Trackeame',
      });

      console.log('📤 Enviado a dataLayer:', window.dataLayer[window.dataLayer.length - 1]);
    },
  }
}

export const Error: Story = {
  args: {
    label: "Error",
    primary: true,
    backgroundColor: "red",
    size: "large"
  }
};