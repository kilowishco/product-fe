import { Meta } from '@storybook/react';

import Sidebar from './sidebar';

export default {
  component: Sidebar,
  title: 'Components/Sidebar',
  argTypes: {
    active: {
      description: 'Active Page',
      options: ['Lists', 'Givers', 'Donate', 'Profile', 'Settings', 'Log Out'],
      control: 'radio',
    },
  },
} as Meta;

const SidebarTemplate = (args) => <Sidebar {...args}></Sidebar>;

export const Base = SidebarTemplate.bind({});

Base.args = {
  active: 'Lists',
};
