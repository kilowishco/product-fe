import { Meta } from '@storybook/react';

import WishCard from './wish-card';

export default {
  component: WishCard,
  title: 'Components/Wish Card',
  argTypes: {
    type: {
      description: 'The type of the wish card',
      options: ['Birthdays'],
      control: 'radio',
    },
  },
} as Meta;

const WishCardTemplate = (args) => <WishCard {...args} />;

export const Base = WishCardTemplate.bind({});

Base.args = {
  type: 'Birthdays',
};
