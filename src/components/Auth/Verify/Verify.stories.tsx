import { Meta } from '@storybook/react';

import Verify from './verify';

export default {
  component: Verify,
  title: 'Pages/Email Verify',
  argTypes: {
    email: {
      description: 'Email of user that just signed up',
      control: 'text',
    },
  },
} as Meta;

const VerifyTemplate = (args) => <Verify {...args} />;

export const Base = VerifyTemplate.bind({});

Base.args = {
  email: 'adeola@kilowish.com',
};
