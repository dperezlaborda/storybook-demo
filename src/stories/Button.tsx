import React from 'react';
import './button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  // borderColor?: string; //EJEMPLO DE AGREGAR UN PROP
  label: string;
  onClick?: () => void;
  borderColor?: string; //EJEMPLO DE AGREGAR UN PROP
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  // borderColor, //EJEMPLO DE AGREGAR UN PROP
  borderColor,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, borderWidth: '2px', borderStyle: 'solid', borderColor }}
      {...props}
    >
      {label}
    </button>
  );
};
