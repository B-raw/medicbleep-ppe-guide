import React from 'react';
import Nav from '../components/Nav';
import GuideWrapper from '../components/GuideWrapper';
import ItemWrapper from '../components/ItemWrapper';

const Home = props => (
  <div>
    <Nav />
    <GuideWrapper ppe_guides={data.ppe_guides}/>
    <ItemWrapper ppe_items={data.ppe_items}/>
  </div>
);

export default Home;

const data = {
  "ppe_guides": [
        {
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
        },
        {
            "id": 178,
            "updated_at": "2020-04-28T14:54:40.761Z",
            "fields": {
                "title": "Taking off PPE",
                "description": "Surgical masks are single session use, gloves and apron should be changed between patients.\r\n\r\nSnap waste ties and fold apron in on itself, not handling the outside as it is contaminated, and put into clinical waste.",
                "short_description": "Taking off PPE safely",
                "video_url": "https://youtu.be/-GncQ_ed-9w",
                "steps": [
                    {
                        "content": "Now wash your hands with soap and water.",
                        "uid": "G:178:3849",
                        "order": "6"
                    },
                    {
                        "content": "Remove surgical mask.",
                        "uid": "G:178:3846",
                        "order": "5"
                    },
                    {
                        "content": "Perform hand hygiene using alcohol hand gel rub, or soap and water.",
                        "uid": "G:178:3843",
                        "order": "4"
                    },
                    {
                        "content": "Once outside the patient room. Remove eye protection.",
                        "uid": "G:178:3840",
                        "order": "4"
                    },
                    {
                        "content": "3 Snap or unfasten apron ties the neck and allow to fall forward.",
                        "uid": "G:178:3837",
                        "order": "3"
                    },
                    {
                        "content": "Perform hand hygiene using alcohol hand gel or rub, or soap and water.",
                        "uid": "G:178:3834",
                        "order": "2"
                    },
                    {
                        "content": "Remove gloves, grasp the outside of the cuff of the glove and peel off, holding the glove in the gloved hand, insert the finger underneath and peel off second glove.",
                        "uid": "G:178:3831",
                        "order": "1"
                    }
                ]
            }
        },
        {
            "id": 179,
            "updated_at": "2020-04-28T15:10:50.617Z",
            "fields": {
                "title": "Source PPE",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.\r\n\r\nDonec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.\r\n\r\nPraesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.\r\n\r\nPhasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.\r\n\r\nDonec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.\r\n\r\nPhasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
                "short_description": "How to source PPE",
                "video_url": "https://www.youtube.com/watch?v=84CydmuHXD8",
                "steps": [
                    {
                        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
                        "uid": "G:179:3872",
                        "order": "Email"
                    },
                    {
                        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
                        "uid": "G:179:3869",
                        "order": "Search"
                    },
                    {
                        "order": "Phone",
                        "uid": "G:179:3866",
                        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
                    }
                ]
            }
        }
    ],
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
