import { Meta } from '@storybook/react';
import { defaultLists } from '../../../../constants/lists';

import WishlistComponent from './wishlist-component';

export default {
  component: WishlistComponent,
  title: 'Components/WishlistComponent',
  argTypes: {
    list: {
      description: 'Sample List of wishlists',
      control: 'object',
    },
  },
} as Meta;

const WishlistComponentTemplate = (args) => <WishlistComponent {...args} />;

export const Base = WishlistComponentTemplate.bind({});

Base.args = {
  list: defaultLists[2],
};
