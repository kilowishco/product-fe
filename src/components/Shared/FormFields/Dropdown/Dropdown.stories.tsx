import { Formik } from 'formik';
import { Meta } from '@storybook/react';

import DropdownField from './dropdown';

export default {
  component: DropdownField,
  title: 'Components/FormFields/Dropdown',
  argTypes: {
    label: {
      description: 'Description of dropdown field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder of dropdown field',
      control: 'text',
    },
    name: {
      description: 'Name of the date field',
      control: 'text',
    },
    options: {
      description: 'Options of dropdown field',
      control: 'object',
    },
    value: {
      description: 'Value of dropdown field',
      control: 'text',
    },
    error: {
      description: 'Is dropdown field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if dropdown field is in error state',
      control: 'text',
    },
    full: {
      description: 'Does dropdown field span the full width of its container or not',
      control: 'boolean',
    },
  },
} as Meta;

const DropdownFieldTemplate = (args) => (
  <Formik initialValues={{}} onSubmit={() => null}>
    <DropdownField {...args} />
  </Formik>
);

export const Base = DropdownFieldTemplate.bind({});

Base.args = {
  label: 'Options',
  name: '',
  placeholder: 'Select option',
  value: 1,
  options: [
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
      label: 4,
      value: 4,
    },
    {
      label: 5,
      value: 5,
    },
  ],
  error: false,
  errorMessage: '',
  full: false,
};
