import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const Normal = () => <Heading>Hello World</Heading>;
export const Big = () => <Heading big>Hello World</Heading>;
