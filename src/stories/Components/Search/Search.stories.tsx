// Search.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Search } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    warning: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  warning: false,
  disabled: false,
};