import { Meta } from '@storybook/react';

import Lists from './lists';

export default {
  component: Lists,
  title: 'Pages/Lists',
} as Meta;

const ListsTemplate = (args) => <Lists {...args} />;

export const Base = ListsTemplate.bind({});
