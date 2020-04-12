import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};

export const Normal = () => <Sidebar />;
