import { Meta } from '@storybook/react';

import WaitlistVerify from './waitlist-verify';

export default {
  component: WaitlistVerify,
  title: 'Pages/Waitlist Verify',
  argTypes: {
    email: {
      description: 'Email of user that just signed up for the waitlist',
      control: 'text',
    },
    verified: {
      description: 'Is user verified on the waitlist?',
      control: 'boolean',
    },
  },
} as Meta;

const WaitlistVerifyTemplate = (args) => <WaitlistVerify {...args} />;

export const NotVerified = WaitlistVerifyTemplate.bind({});

NotVerified.args = {
  email: 'adeola@kilowish.com',
  verified: false,
};

export const Verified = WaitlistVerifyTemplate.bind({});

Verified.args = {
  email: 'adeola@kilowish.com',
  verified: true,
};
