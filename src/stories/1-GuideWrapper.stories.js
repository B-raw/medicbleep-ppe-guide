import React from 'react';
import { action } from '@storybook/addon-actions';
import GuideWrapper from '../components/GuideWrapper';

const singleGuide = {
  "ppe_guides": [
    {
      "id": 177,
      "updated_at": "2020-04-28T14:50:16.204Z",
      "fields": {
          "title": "Putting on PPE",
          "description": "Before putting on the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.",
          "short_description": "Safely put your PPE on",
          "video_url": "https://www.nhsprofessionals.nhs.uk/en/e-Library/Useful-Information/COVID-19-Donning-of-Personal-Protective-Equipment",
      }
    }
  ]
}

const multipleGuides = {
  "ppe_guides": [
    {
      "id": 177,
      "updated_at": "2020-04-28T14:50:16.204Z",
      "fields": {
          "title": "Putting on PPE",
          "description": "Before putting on the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.",
          "short_description": "Safely put your PPE on",
          "video_url": "https://www.nhsprofessionals.nhs.uk/en/e-Library/Useful-Information/COVID-19-Donning-of-Personal-Protective-Equipment",
      }
    },
    {
      "id": 188,
      "updated_at": "2020-04-28T14:50:16.204Z",
      "fields": {
          "title": "Taking off PPE",
          "description": "Before taking off the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.",
          "short_description": "Safely take off PPE",
          "video_url": "https://www.nhsprofessionals.nhs.uk/en/e-Library/Useful-Information/COVID-19-Donning-of-Personal-Protective-Equipment",
      }
    }
  ]
}

export default {
  title: 'GuideWrapper',
  component: GuideWrapper,
};

export const EmptyGuideWrapper = () => <GuideWrapper></GuideWrapper>;

export const SingleGuideWrapper = () => <GuideWrapper ppe_guides={singleGuide.ppe_guides}></GuideWrapper>;

export const MultipleGuideWrapper = () => <GuideWrapper ppe_guides={multipleGuides.ppe_guides}></GuideWrapper>;
