import { Meta } from '@storybook/react';

import Textarea from './textarea';

export default {
  component: Textarea,
  title: 'Components/FormFields/Textarea',
  argTypes: {
    label: {
      description: 'Description of textarea field',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder of textarea field',
      control: 'text',
    },
    value: {
      description: 'Value of textarea field',
      control: 'text',
    },
    error: {
      description: 'Is textarea field in error state or not',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message if textarea field is in error state',
      control: 'text',
    },
    full: {
      description: 'Does textarea field span the full width of its container or not',
      control: 'boolean',
    },
  },
} as Meta;

const TextareaTemplate = (args) => <Textarea {...args} />;

export const Base = TextareaTemplate.bind({});

Base.args = {
  label: 'Description',
  placeholder: 'Enter description',
  name: '',
  value: '',
  error: false,
  errorMessage: '',
  full: false,
};
