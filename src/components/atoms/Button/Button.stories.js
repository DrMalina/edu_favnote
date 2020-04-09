import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Note: 'hsl(49, 100%, 58%)',
    Twitter: 'hsl(196, 83%, 75%)',
    Article: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Hello Button</Button>;
};
export const Secondary = () => <Button secondary>Hello Button</Button>;
