import { Meta } from '@storybook/react';
import { defaultListItems } from '../../../constants/lists';

import ShareList from './share-list';

export default {
  component: ShareList,
  title: 'Components/Share List',
  argTypes: {
    listItem: {
      description: 'Sample wishlist item',
      control: 'object',
    },
  },
} as Meta;

const ShareListTemplate = (args) => <ShareList {...args} />;

export const Base = ShareListTemplate.bind({});

Base.args = {
  listItem: defaultListItems[0],
};
