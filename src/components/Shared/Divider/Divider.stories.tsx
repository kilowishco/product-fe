import { Meta } from '@storybook/react';

import Divider from './divider';

export default {
  component: Divider,
  title: 'Components/Divider',
  argTypes: {
    text: {
      description: 'Text in the divider',
      control: 'text',
    },
  },
} as Meta;

const DividerTemplate = (args) => <Divider {...args} />;

export const Base = DividerTemplate.bind({});

Base.args = {
  text: 'or',
};
