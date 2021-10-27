import { Meta } from '@storybook/react';

import AuthSwitch from './auth-switch';

export default {
  component: AuthSwitch,
  title: 'Components/Auth Switch',
  argTypes: {
    loginState: {
      description: 'Is user signed up or not',
      control: 'boolean',
    },
  },
} as Meta;

const AuthSwitchTemplate = (args) => <AuthSwitch {...args} />;

export const Base = AuthSwitchTemplate.bind({});

Base.args = {
  loginState: false,
};
