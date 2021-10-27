import { Meta } from '@storybook/react';

import JoinWaitlist from './join-waitlist';

export default {
  component: JoinWaitlist,
  title: 'Components/Join Waitlist',
} as Meta;

const JoinWaitlistTemplate = (args) => <JoinWaitlist {...args} />;

export const Base = JoinWaitlistTemplate.bind({});
