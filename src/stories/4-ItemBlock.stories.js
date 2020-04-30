import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemBlock from '../components/ItemBlock';

const data = {
  "id": 182,
  "updated_at": "2020-04-28T15:08:05.743Z",
  "fields": {
      "name": "Face Shield",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
  }
}

export default {
  title: 'ItemBlock',
  component: ItemBlock,
};

export const EmptyItemBlock = () => <ItemBlock></ItemBlock>;

export const DataItemBlock = () => <ItemBlock title={data.fields.name} key={data.id}></ItemBlock>;
