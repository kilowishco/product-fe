import { Meta } from '@storybook/react';

import CreateEventForm from './create-event-form';

export default {
  component: CreateEventForm,
  title: 'Components/Create Event Form',
} as Meta;

const CreateEventFormTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '4rem 6rem' }}>
    <CreateEventForm {...args} />
  </div>
);

export const Base = CreateEventFormTemplate.bind({});
