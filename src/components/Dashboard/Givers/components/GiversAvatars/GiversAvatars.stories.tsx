import { Meta } from '@storybook/react';
import { defaultGivers } from '../../../../../constants/list-givers';

import GiversAvatars from './givers-avatars';

export default {
  component: GiversAvatars,
  title: 'Components/GiversAvatars',
  argTypes: {
    givers: {
      description: 'List of givers',
      control: 'object',
    },
  },
} as Meta;

const GiversAvatarsTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-white)', padding: '2rem' }}>
    <GiversAvatars {...args} />
  </div>
);

export const Base = GiversAvatarsTemplate.bind({});

Base.args = {
  givers: defaultGivers,
};
