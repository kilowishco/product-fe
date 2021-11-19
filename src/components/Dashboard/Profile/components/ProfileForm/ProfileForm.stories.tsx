import { Meta } from '@storybook/react';
import { defaultProfile } from '../../../../../constants/user-profile';

import ProfileForm from './profile-form';

export default {
  component: ProfileForm,
  title: 'Components/Profile Form',
  argTypes: {
    profile: {
      description: 'Sample user profile',
      control: 'object',
    },
  },
} as Meta;

const ProfileFormTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '4rem' }}>
    <ProfileForm {...args} />
  </div>
);

export const Base = ProfileFormTemplate.bind({});

Base.args = {
  profile: defaultProfile,
};
