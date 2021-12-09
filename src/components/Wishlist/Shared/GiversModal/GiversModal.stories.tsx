import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GiversModal from './givers-modal';
import { defaultListItems } from '../../../../constants/lists';

export default {
  component: GiversModal,
  title: 'Components/Givers Modal',
  argTypes: {
    listItem: {
      description: 'Sample wishlist item',
      control: 'object',
    },
  },
} as Meta;

const GiversModalTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '2rem' }}>
    <GiversModal {...args} closeModal={action('onClickAction')} />
  </div>
);

export const Base = GiversModalTemplate.bind({});

Base.args = {
  listItem: defaultListItems[0],
};
