import { Meta } from '@storybook/react';

import ListCard from './list-card';
import ListCardPlaceholder from './list-card-placeholder';

export default {
  component: ListCard,
  title: 'Components/ListCard',
  argTypes: {
    title: {
      description: 'Title in the ListCard',
      control: 'text',
    },
    description: {
      description: 'Description of the ListCard',
      control: 'text',
    },
    link: {
      description: 'Link of the ListCard',
      control: 'text',
    },
    image: {
      description: 'Header image of the ListCard',
      control: 'text',
    },
  },
} as Meta;

const ListCardTemplate = (args) => <ListCard {...args} />;

export const Base = ListCardTemplate.bind({});

Base.args = {
  title: '30 days celebration',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis justo... ',
  link: '/',
  image: '',
};

const ListCardPlaceholderTemplate = (args) => <ListCardPlaceholder {...args} />;

export const Placeholder = ListCardPlaceholderTemplate.bind({});
