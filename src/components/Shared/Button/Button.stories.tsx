import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './base';
import PrimaryButton from './PrimaryButton';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    text: {
      description: 'Label of the button',
      control: 'text',
    },
    size: {
      description: 'Size of the button',
      options: ['sm', 'lg'],
      control: 'radio',
    },
  },
} as Meta;

const BaseButtonTemplate = (args) => <Button onClick={action('onClickAction')} {...args} />;

export const Base = BaseButtonTemplate.bind({});

Base.args = {
  text: 'Click me',
  size: 'sm',
};

const PrimaryButtonTemplate = (args) => (
  <PrimaryButton onClick={action('onClickAction')} {...args} />
);

export const Primary = PrimaryButtonTemplate.bind({});

Primary.args = {
  text: 'Click me',
  size: 'sm',
};
