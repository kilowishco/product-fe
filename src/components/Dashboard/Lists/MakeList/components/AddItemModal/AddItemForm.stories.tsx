import { Meta } from '@storybook/react';
import { defaultListItems } from '../../../../../../constants/lists';

import AddItemModal from './add-item-modal';

export default {
  component: AddItemModal,
  title: 'Components/Add Item Modal',
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

const AddItemModalTemplate = (args) => <AddItemModal {...args} />;

export const Base = AddItemModalTemplate.bind({});

Base.args = {
  type: 'item',
  listItem: defaultListItems[0],
};
