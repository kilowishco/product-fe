import { Meta } from '@storybook/react';

import InputField from './input-field';

export default {
  component: InputField,
  title: 'Components/Input',
  argTypes: {
    label: {
      description: 'Description of input field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder of input field',
      control: 'text',
    },
    type: {
      description: 'Input element type',
      control: 'text',
    },
    value: {
      description: 'Value of input field',
      control: 'text',
    },
    error: {
      description: 'Is input in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if input is in error state',
      control: 'text',
    },
  },
} as Meta;

const InputFieldTemplate = (args) => <InputField {...args} />;

export const Base = InputFieldTemplate.bind({});

Base.args = {
  label: 'Full name',
  placeholder: 'Enter your full name',
  type: 'text',
  name: '',
  value: '',
  error: false,
  errorMessage: '',
  setValue: () => null,
};
