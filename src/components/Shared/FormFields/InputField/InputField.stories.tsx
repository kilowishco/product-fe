import { Formik } from 'formik';
import { Meta } from '@storybook/react';

import InputField from './input-field';

export default {
  component: InputField,
  title: 'Components/FormFields/Input',
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
      description: 'Input field type',
      options: ['text', 'email', 'numeric', 'number'],
      control: 'radio',
    },
    value: {
      description: 'Value of input field',
      control: 'text',
    },
    error: {
      description: 'Is input field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if input field is in error state',
      control: 'text',
    },
    full: {
      description: 'Does input field span the full width of its container or not',
      control: 'boolean',
    },
  },
} as Meta;

const InputFieldTemplate = (args) => (
  <Formik initialValues={{}} onSubmit={() => null}>
    <InputField {...args} />
  </Formik>
);

export const Base = InputFieldTemplate.bind({});

Base.args = {
  label: 'Full name',
  placeholder: 'Enter your full name',
  type: 'text',
  name: '',
  value: '',
  error: false,
  errorMessage: '',
  full: false,
};
