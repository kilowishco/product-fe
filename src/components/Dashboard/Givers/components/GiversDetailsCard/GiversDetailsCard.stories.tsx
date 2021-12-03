import { Meta } from '@storybook/react';
import { defaultGivers } from '../../../../../constants/list-givers';
import { defaultListItems } from '../../../../../constants/lists';

import GiversDetailsCard from './givers-details-card';

export default {
  component: GiversDetailsCard,
  title: 'Components/GiversDetailsCard',
  argTypes: {
    givers: {
      description: 'List of givers of a wishlist item',
      control: 'object',
    },
    listItem: {
      description: 'A wishlist item',
      control: 'object',
    },
  },
} as Meta;

const GiversDetailsCardTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-white)', padding: '2rem' }}>
    <GiversDetailsCard {...args} />
  </div>
);

export const Base = GiversDetailsCardTemplate.bind({});

Base.args = {
  givers: defaultGivers,
  listItem: defaultListItems[0],
};
