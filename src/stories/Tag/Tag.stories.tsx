// Tag.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      options: ['primary', 'yellow', 'green', 'outline', 'outlineBlue'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
    background: {
      control: { type: 'color' },
    },
  },
} as Meta;

const Template = (args) => <Tag {...args} />;

export const PrimaryTag = Template.bind({});
PrimaryTag.args = {
  variant: 'primary',
  children: 'Tag',
};

export const OutlineTag = Template.bind({});
OutlineTag.args = {
  variant: 'outline',
  children: 'Tag',
};