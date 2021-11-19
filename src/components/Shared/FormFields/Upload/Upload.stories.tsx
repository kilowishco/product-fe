import { Formik } from 'formik';
import { Meta } from '@storybook/react';

import Upload from './upload';

export default {
  component: Upload,
  title: 'Components/FormFields/Upload',
  argTypes: {
    label: {
      description: 'Description of Upload field',
      control: 'text',
    },
    value: {
      description: 'Value of upload field',
      control: 'text',
    },
    error: {
      description: 'Is upload field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if upload field is in error state',
      control: 'text',
    },
  },
} as Meta;

const UploadTemplate = (args) => (
  <Formik initialValues={{}} onSubmit={() => null}>
    <Upload {...args} />
  </Formik>
);

export const Base = UploadTemplate.bind({});

Base.args = {
  label: 'Upload Image',
  name: '',
  value: '',
  error: false,
  errorMessage: '',
};
