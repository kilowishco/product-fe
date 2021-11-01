import { Meta } from '@storybook/react';

import Login from './login';

export default {
  component: Login,
  title: 'Pages/Login',
} as Meta;

const LoginTemplate = (args) => <Login {...args} />;

export const Base = LoginTemplate.bind({});
