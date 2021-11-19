import { Meta } from '@storybook/react';
import { defaultListItems } from '../../../../constants/lists';

import MakeList from './make-list';

export default {
  component: MakeList,
  title: 'Components/Make List',
  argTypes: {
    listItems: {
      description: 'Sample List of wishlists',
      control: 'object',
    },
  },
} as Meta;

const MakeListTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '4rem 6rem' }}>
    <MakeList {...args} />
  </div>
);

export const Base = MakeListTemplate.bind({});

Base.args = {
  listItems: defaultListItems,
};
