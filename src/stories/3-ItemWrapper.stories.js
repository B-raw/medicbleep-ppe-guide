import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemWrapper from '../components/ItemWrapper';

const singleItem = {
  "ppe_items": [
        {
            "id": 182,
            "updated_at": "2020-04-28T15:08:05.743Z",
            "fields": {
                "name": "Face Shield",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
            }
        },
      ]
}

const multipleItems = {
  "ppe_items": [
        {
            "id": 182,
            "updated_at": "2020-04-28T15:08:05.743Z",
            "fields": {
                "name": "Face Shield",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
            }
        },
        {
            "id": 180,
            "updated_at": "2020-04-28T15:08:05.748Z",
            "fields": {
                "name": "Gloves",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
            }
        },
        {
            "id": 181,
            "updated_at": "2020-04-28T15:08:05.745Z",
            "fields": {
                "name": "Masks ",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
            }
        }
    ]
}

export default {
  title: 'ItemWrapper',
  component: ItemWrapper,
};

export const EmptyItemWrapper = () => <ItemWrapper></ItemWrapper>;

export const SingleItemWrapper = () => <ItemWrapper ppe_items={singleItem.ppe_items}></ItemWrapper>;

export const MultipleItemWrapper = () => <ItemWrapper ppe_items={multipleItems.ppe_items}></ItemWrapper>;
