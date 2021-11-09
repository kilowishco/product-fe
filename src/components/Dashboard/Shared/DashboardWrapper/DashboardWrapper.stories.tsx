import { Meta } from '@storybook/react';

import DashboardWrapper from './dashboard-wrapper';

export default {
  component: DashboardWrapper,
  title: 'Components/DashboardWrapper',
  argTypes: {
    active: {
      description: 'Active Page',
      options: ['Lists', 'Givers', 'Donate', 'Profile', 'Settings', 'Log Out'],
      control: 'radio',
    },
  },
} as Meta;

const DashboardWrapperTemplate = (args) => <DashboardWrapper {...args} />;

export const Base = DashboardWrapperTemplate.bind({});

Base.args = {
  active: 'Lists',
};
