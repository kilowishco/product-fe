import { Meta } from '@storybook/react';

import MakeList from './make-list';

export default {
  component: MakeList,
  title: 'Components/Make List',
} as Meta;

const MakeListTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '4rem 6rem' }}>
    <MakeList {...args} />
  </div>
);

export const Base = MakeListTemplate.bind({});
