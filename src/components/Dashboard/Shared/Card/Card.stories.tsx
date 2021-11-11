import { Meta } from '@storybook/react';

import Card from './card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const CardTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '2rem' }}>
    <Card {...args}>Empty Card</Card>
  </div>
);

export const Base = CardTemplate.bind({});
