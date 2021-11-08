import { Meta } from '@storybook/react';

import SidebarMenu from './sidebar-menu';

export default {
  component: SidebarMenu,
  title: 'Components/Sidebar Menu',
  argTypes: {
    active: {
      description: 'Active Page',
      options: ['Lists', 'Givers', 'Donate', 'Profile', 'Settings', 'Log Out'],
      control: 'radio',
    },
  },
} as Meta;

const SidebarMenuTemplate = (args) => <SidebarMenu {...args} />;

export const Base = SidebarMenuTemplate.bind({});

Base.args = {
  active: 'Lists',
};
