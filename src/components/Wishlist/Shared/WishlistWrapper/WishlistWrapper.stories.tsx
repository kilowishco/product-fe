import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { defaultLists } from '../../../../constants/lists';

import WishlistWrapper from './wishlist-wrapper';

export default {
  component: WishlistWrapper,
  title: 'Components/WishlistWrapper',
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

const WishlistWrapperTemplate = (args) => (
  <WishlistWrapper
    {...args}
    returnToList={action('onClickAction')}
    togglePublishState={action('onClickAction')}
  />
);

export const Base = WishlistWrapperTemplate.bind({});

Base.args = {
  list: defaultLists[1],
  published: false,
  previewState: true,
};
