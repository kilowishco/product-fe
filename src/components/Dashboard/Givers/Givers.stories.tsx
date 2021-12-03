import { Meta } from '@storybook/react';

import Givers from './givers';

export default {
  component: Givers,
  title: 'Pages/Givers',
  argTypes: {
    state: {
      description: 'State of the Givers Page',
      control: 'text',
    },
  },
} as Meta;

const GiversTemplate = (args) => <Givers {...args} />;

export const Base = GiversTemplate.bind({});

Base.args = {
  state: 'Givers',
};

const GiversDetailsTemplate = (args) => <Givers {...args} />;

export const GiversDetails = GiversDetailsTemplate.bind({});

GiversDetails.args = {
  state: 'GiversDetails',
};
