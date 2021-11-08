import { Meta } from '@storybook/react';

import PasswordField from './password';

export default {
  component: PasswordField,
  title: 'Components/FormFields/Password',
  argTypes: {
    label: {
      description: 'Description of password field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder of password field',
      control: 'text',
    },
    value: {
      description: 'Value of password field',
      control: 'text',
    },
    error: {
      description: 'Is password field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if password field is in error state',
      control: 'text',
    },
    full: {
      description: 'Does password field span the full width of its container or not',
      control: 'boolean',
    },
  },
} as Meta;

const PasswordFieldTemplate = (args) => <PasswordField {...args} />;

export const Base = PasswordFieldTemplate.bind({});

Base.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  name: '',
  value: '',
  error: false,
  errorMessage: '',
  full: false,
  setValue: () => null,
};
