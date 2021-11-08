import { Meta } from '@storybook/react';

import ListCard from './list-card';
import ListCardPlaceholder from './list-card-placeholder';

export default {
  component: ListCard,
  title: 'Components/ListCard',
  argTypes: {
    text: {
      description: 'Text in the ListCard',
      control: 'text',
    },
  },
} as Meta;

const ListCardTemplate = (args) => <ListCard {...args} />;

export const Base = ListCardTemplate.bind({});

Base.args = {
  text: 'or',
};

const ListCardPlaceholderTemplate = (args) => <ListCardPlaceholder {...args} />;

export const Placeholder = ListCardPlaceholderTemplate.bind({});
