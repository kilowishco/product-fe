import { Meta } from '@storybook/react';

import ListItem from './list-item';
import ListItemPlaceholder from './list-item-placeholder';

export default {
  component: ListItem,
  title: 'Components/ListItem',
  argTypes: {
    type: {
      description: 'Type of wishlist item',
      options: ['item', 'cash'],
      control: 'radio',
    },
    title: {
      description: 'Title of the wishlist item',
      control: 'text',
    },
    description: {
      description: 'Description of the wishlist item',
      control: 'text',
    },
    link: {
      description: 'Link of the wishlist item',
      control: 'text',
    },
    image: {
      description: 'Header image of the wishlist item',
      control: 'text',
    },
  },
} as Meta;

const ListItemTemplate = (args) => (
  <div style={{ padding: '2rem' }}>
    <ListItem {...args} />
  </div>
);

export const Base = ListItemTemplate.bind({});

Base.args = {
  type: 'item',
  title: '30 days celebration',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis justo... ',
  link: '/',
  image: '',
};

const ListItemPlaceholderTemplate = (args) => (
  <div style={{ padding: '2rem' }}>
    <ListItemPlaceholder {...args} />
  </div>
);

export const Placeholder = ListItemPlaceholderTemplate.bind({});
