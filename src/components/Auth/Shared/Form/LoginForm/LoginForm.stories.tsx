import { Meta } from '@storybook/react';

import LoginForm from './login-form';

export default {
  component: LoginForm,
  title: 'Components/Login Form',
} as Meta;

const LoginFormTemplate = (args) => <LoginForm {...args} />;

export const Base = LoginFormTemplate.bind({});
