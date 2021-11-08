import { Meta } from '@storybook/react';

import Card from './card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const CardTemplate = (args) => <Card {...args}>Empty Card</Card>;

export const Base = CardTemplate.bind({});
