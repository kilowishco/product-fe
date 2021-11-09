import { Formik } from 'formik';
import { Meta } from '@storybook/react';

import CheckboxField from './checkbox';

export default {
  component: CheckboxField,
  title: 'Components/FormFields/Checkbox',
  argTypes: {
    label: {
      description: 'Description of checkbox field',
      control: 'text',
    },
    name: {
      description: 'Name of checkbox field',
      control: 'text',
    },
    value: {
      description: 'Is checkbox field checked or not',
      control: 'boolean',
    },
    error: {
      description: 'Is checkbox field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if checkbox field is in error state',
      control: 'text',
    },
    full: {
      description: 'Does checkbox field span the full width of its container or not',
      control: 'boolean',
    },
  },
} as Meta;

const CheckboxFieldTemplate = (args) => (
  <Formik initialValues={{}} onSubmit={() => null}>
    <CheckboxField {...args} />
  </Formik>
);

export const Base = CheckboxFieldTemplate.bind({});

Base.args = {
  label: 'By clicking this, you agree to our terms and conditions',
  name: '',
  value: false,
  error: false,
  errorMessage: '',
  full: false,
};
