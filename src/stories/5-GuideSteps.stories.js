import React from 'react';
import { action } from '@storybook/addon-actions';
import GuideSteps from '../components/GuideSteps';

const data = {
    "id": 177,
    "updated_at": "2020-04-28T14:50:16.204Z",
    "fields": {
        "title": "Putting on PPE",
        "description": "Before putting on the PPE, perform hand hygiene. Use alcohol handrub or gel or soap and water. Make sure you are hydrated and are not wearing any jewellery, bracelets, watches or stoned rings.",
        "short_description": "Safely put your PPE on",
        "video_url": "https://www.nhsprofessionals.nhs.uk/en/e-Library/Useful-Information/COVID-19-Donning-of-Personal-Protective-Equipment",
        "steps": [
            {
                "content": "You are now ready to enter the patient area.",
                "uid": "G:177:3823",
                "order": "5"
            },
            {
                "content": "Put on non-sterile nitrile gloves.",
                "uid": "G:177:3820",
                "order": "4"
            },
            {
                "content": "Put on your eye protection if there is a risk of splashing.",
                "uid": "G:177:3817",
                "order": "3"
            },
            {
                "content": "Put on your surgical face mask, if tied, make sure securely tied at crown and nape of neck. Once it covers the nose, make sure it is extended to cover your mouth and chin.",
                "uid": "G:177:3814",
                "order": "2"
            },
            {
                "content": "Put on your plastic apron, making sure it is tied securely at the back",
                "uid": "G:177:3811",
                "order": "1 "
            }
        ]
    }
}


export default {
  title: 'GuideSteps',
  component: GuideSteps,
};

export const SingleGuideSteps = () => <GuideSteps data={data}></GuideSteps>;
