import React from 'react';
import { action } from '@storybook/addon-actions';
import GuideBlock from '../components/GuideBlock';

const data = {
  "id": 177,
  "title": "Putting on PPE",
  "short_description": "Safely put your PPE on",
}

export default {
  title: 'GuideBlock',
  component: GuideBlock,
};

export const EmptyGuideBlock = () => <GuideBlock></GuideBlock>;

export const DataGuideBlock = () => <GuideBlock title={data.title} short_description={data.short_description}></GuideBlock>;
