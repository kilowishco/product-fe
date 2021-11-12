import { Formik } from 'formik';
import { Meta } from '@storybook/react';

import DateField from './date';

export default {
  component: DateField,
  title: 'Components/FormFields/Date',
  argTypes: {
    label: {
      description: 'Description of date field',
      control: 'text',
    },
    name: {
      description: 'Name of the date field',
      control: 'text',
    },
    value: {
      description: 'Value of date field',
      control: 'text',
    },
    error: {
      description: 'Is date field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if date field is in error state',
      control: 'text',
    },
    full: {
      description: 'Does date field span the full width of its container or not',
      control: 'boolean',
    },
  },
} as Meta;

const DateFieldTemplate = (args) => (
  <Formik initialValues={{}} onSubmit={() => null}>
    <DateField {...args} />
  </Formik>
);

export const Base = DateFieldTemplate.bind({});

Base.args = {
  label: 'Date',
  name: '',
  placeholder: 'Select date',
  value: new Date(),
  error: false,
  errorMessage: '',
  full: false,
};
