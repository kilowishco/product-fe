import { Meta } from '@storybook/react';

import Donate from './donate';

export default {
  component: Donate,
  title: 'Pages/Donate',
} as Meta;

const DonateTemplate = (args) => <Donate {...args} />;

export const Base = DonateTemplate.bind({});
