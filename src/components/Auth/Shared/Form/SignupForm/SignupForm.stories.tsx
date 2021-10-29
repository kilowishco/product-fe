import { Meta } from '@storybook/react';

import SignupForm from './signup-form';

export default {
  component: SignupForm,
  title: 'Components/Signup Form',
} as Meta;

const SignupFormTemplate = (args) => <SignupForm {...args} />;

export const Base = SignupFormTemplate.bind({});
