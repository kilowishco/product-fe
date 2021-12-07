import { Meta } from '@storybook/react';
import { defaultListItems } from '../../../../constants/lists';

import WishlistItem from './wishlist-item';

export default {
  component: WishlistItem,
  title: 'Components/WishlistItem',
  argTypes: {
    listItems: {
      description: 'Sample List items of wishlists',
      control: 'object',
    },
  },
} as Meta;

const WishlistItemTemplate = (args) => (
  <div style={{ padding: '2rem' }}>
    <WishlistItem {...args} />
  </div>
);

export const Base = WishlistItemTemplate.bind({});

Base.args = {
  listItem: defaultListItems[1],
};
