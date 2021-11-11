import { Meta } from '@storybook/react';

import Givers from './givers';

export default {
  component: Givers,
  title: 'Pages/Givers',
} as Meta;

const GiversTemplate = (args) => <Givers {...args} />;

export const Base = GiversTemplate.bind({});
