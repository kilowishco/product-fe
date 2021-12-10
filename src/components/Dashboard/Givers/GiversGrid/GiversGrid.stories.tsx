import { Meta } from '@storybook/react';
import { defaultLists } from '../../../../constants/lists';

import GiversGrid from './givers-grid';

export default {
  component: GiversGrid,
  title: 'Components/GiversGrid',
  argTypes: {
    lists: {
      description: 'List of wishlists',
      control: 'object',
    },
  },
} as Meta;

const GiversGridTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '2rem' }}>
    <GiversGrid {...args} />
  </div>
);

export const Base = GiversGridTemplate.bind({});

Base.args = { lists: defaultLists };
