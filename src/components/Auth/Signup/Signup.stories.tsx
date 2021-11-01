import { Meta } from '@storybook/react';

import Signup from './signup';

export default {
  component: Signup,
  title: 'Pages/Signup',
} as Meta;

const SignupTemplate = (args) => <Signup {...args} />;

export const Base = SignupTemplate.bind({});
