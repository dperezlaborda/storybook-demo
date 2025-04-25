import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'La Nación',
    brandUrl: 'https://www.lanacion.com.ar/',
    brandImage: '/logo.png',
    brandTarget: '_self',
  }),
});