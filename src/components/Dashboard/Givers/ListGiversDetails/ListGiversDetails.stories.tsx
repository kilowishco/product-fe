import { Meta } from '@storybook/react';
import { defaultLists } from '../../../../constants/lists';

import ListGiversDetails from './list-givers-details';

export default {
  component: ListGiversDetails,
  title: 'Components/ListGiversDetails',
  argTypes: {
    list: {
      description: 'A wishlist',
      control: 'object',
    },
  },
} as Meta;

const ListGiversDetailsTemplate = (args) => <ListGiversDetails {...args} />;

export const Base = ListGiversDetailsTemplate.bind({});

Base.args = {
  list: defaultLists[1],
};
