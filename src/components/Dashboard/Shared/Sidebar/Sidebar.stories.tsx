import { Meta } from '@storybook/react';

import Sidebar from './sidebar';

export default {
  component: Sidebar,
  title: 'Components/Sidebar',
} as Meta;

const SidebarTemplate = (args) => <Sidebar {...args}></Sidebar>;

export const Base = SidebarTemplate.bind({});
