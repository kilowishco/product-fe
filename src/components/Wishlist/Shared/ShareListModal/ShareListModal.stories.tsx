import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ShareListModal from './share-list-modal';
import { defaultListItems } from '../../../../constants/lists';

export default {
  component: ShareListModal,
  title: 'Components/Share List Modal',
  argTypes: {
    listItem: {
      description: 'Sample wishlist item',
      control: 'object',
    },
  },
} as Meta;

const ShareListModalTemplate = (args) => (
  <div style={{ backgroundColor: 'var(--color-card-divider)', padding: '2rem' }}>
    <ShareListModal {...args} closeModal={action('onClickAction')} />
  </div>
);

export const Base = ShareListModalTemplate.bind({});

Base.args = {
  listItem: defaultListItems[0],
};
