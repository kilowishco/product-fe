import { Meta } from '@storybook/react';
import { defaultProfile } from '../../../constants/user-profile';

import Profile from './profile';

export default {
  component: Profile,
  title: 'Pages/Profile',
  argTypes: {
    profile: {
      description: 'Sample user profile',
      control: 'object',
    },
  },
} as Meta;

const ProfileTemplate = (args) => <Profile {...args} />;

export const Base = ProfileTemplate.bind({});

Base.args = {
  profile: defaultProfile,
};
