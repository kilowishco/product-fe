import { Meta } from '@storybook/react';
import { defaultLists } from '../../../../constants/lists';

import ListsGrid from './lists-grid';

export default {
  component: ListsGrid,
  title: 'Components/ListsGrid',
  argTypes: {
    lists: {
      description: 'List of wishlists',
      control: 'object',
    },
  },
} as Meta;

const ListsGridTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '4rem 6rem' }}>
    <ListsGrid {...args} />
  </div>
);

export const Base = ListsGridTemplate.bind({});

Base.args = { lists: defaultLists };
