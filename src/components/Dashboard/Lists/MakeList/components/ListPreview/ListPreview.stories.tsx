import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { defaultLists } from '../../../../../../constants/lists';

import ListPreview from './list-preview';

export default {
  component: ListPreview,
  title: 'Components/List Preview',
  argTypes: {
    list: {
      description: 'Sample List of wishlists',
      control: 'object',
    },
  },
} as Meta;

const ListPreviewTemplate = (args) => (
  <ListPreview {...args} returnToList={action('onClickAction')} />
);

export const Base = ListPreviewTemplate.bind({});

Base.args = {
  list: defaultLists[1],
};
