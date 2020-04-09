import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Note = () => <Card />;
export const Twitter = () => <Card cardType="twitter" />;
export const Article = () => <Card cardType="article" />;
