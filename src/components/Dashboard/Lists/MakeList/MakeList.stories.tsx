import { Meta } from '@storybook/react';
import { defaultLists } from '../../../../constants/lists';

import MakeList from './make-list';

export default {
  component: MakeList,
  title: 'Components/Make List',
  argTypes: {
    list: {
      description: 'Sample Wishlist',
      control: 'object',
    },
  },
} as Meta;

const MakeListTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '2rem' }}>
    <MakeList {...args} />
  </div>
);

export const Base = MakeListTemplate.bind({});

Base.args = {
  list: defaultLists[1],
};
