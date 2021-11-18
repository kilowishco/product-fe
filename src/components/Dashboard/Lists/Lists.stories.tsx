import { Meta } from '@storybook/react';

import Lists from './lists';

export default {
  component: Lists,
  title: 'Pages/Lists',
  argTypes: {
    state: {
      description: 'State of the List Page',
      control: 'text',
    },
  },
} as Meta;

const ListsTemplate = (args) => <Lists {...args} />;

export const Base = ListsTemplate.bind({});

Base.args = {
  state: 'Lists',
};

const MakeListTemplate = (args) => <Lists {...args} />;

export const MakeList = MakeListTemplate.bind({});

MakeList.args = {
  state: 'MakeList',
};

const CreateListTemplate = (args) => <Lists {...args} />;

export const CreateList = CreateListTemplate.bind({});

CreateList.args = {
  state: 'CreateList',
};
