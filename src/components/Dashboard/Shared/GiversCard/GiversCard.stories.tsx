import { Meta } from '@storybook/react';

import GiversCard from './givers-card';

export default {
  component: GiversCard,
  title: 'Components/GiversCard',
  argTypes: {
    title: {
      description: 'Title of the event',
      control: 'text',
    },
    checked: {
      description: 'Number of givers that have picked something',
      control: 'number',
    },
    size: {
      description: 'Number of givers',
      control: 'number',
    },
    secret_checked: {
      description: 'Number of secret givers',
      control: 'number',
    },
    image: {
      description: 'Header image of the event',
      control: 'text',
    },
  },
} as Meta;

const GiversCardTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '2rem' }}>
    <GiversCard {...args} />
  </div>
);

export const Base = GiversCardTemplate.bind({});

Base.args = {
  title: '30 days celebration',
  checked: 20,
  size: 5,
  secret_checked: 2,
  image: '',
};
