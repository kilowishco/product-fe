import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { defaultLists } from '../../constants/lists';

import Wishlist from './wishlist';

export default {
  component: Wishlist,
  title: 'Pages/Wishlist',
  argTypes: {
    list: {
      description: 'Sample List of wishlists',
      control: 'object',
    },
    published: {
      description: 'Is wishlist Published or not?',
      control: 'boolean',
    },
    previewState: {
      description: 'Is wishlist in preview or not?',
      control: 'boolean',
    },
  },
} as Meta;

const WishlistTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)' }}>
    <Wishlist
      {...args}
      returnToList={action('onClickAction')}
      togglePublishState={action('onClickAction')}
    />
  </div>
);

export const Base = WishlistTemplate.bind({});

Base.args = {
  list: defaultLists[1],
  published: false,
  previewState: true,
};
