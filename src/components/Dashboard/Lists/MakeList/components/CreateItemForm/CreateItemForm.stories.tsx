import { Meta } from '@storybook/react';
import { defaultListItems } from '../../../../../../constants/lists';

import CreateItemForm from './create-item-form';

export default {
  component: CreateItemForm,
  title: 'Components/Create Item Form',
  argTypes: {
    listItem: {
      description: 'Sample wishlist',
      control: 'object',
    },
    type: {
      description: 'Type of wishlist',
      options: ['item', 'money'],
      control: 'radio',
    },
  },
} as Meta;

const CreateItemFormTemplate = (args) => (
  <div style={{ padding: '4rem' }}>
    <CreateItemForm {...args} />
  </div>
);

export const Base = CreateItemFormTemplate.bind({});

Base.args = {
  type: 'item',
  listItem: defaultListItems[0],
};
