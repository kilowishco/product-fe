import { Meta } from '@storybook/react';
import { defaultLists } from '../../../constants/lists';

import ShareList from './share-list';

export default {
  component: ShareList,
  title: 'Components/Share List',
  argTypes: {
    list: {
      description: 'Sample wishlist',
      control: 'object',
    },
  },
} as Meta;

const ShareListTemplate = (args) => <ShareList {...args} />;

export const Base = ShareListTemplate.bind({});

Base.args = {
  list: defaultLists[0],
};
