import React from 'react';
import GuideBlock from './GuideBlock';

function GuideWrapper(props) {

  return (
    <div>
      <h2>What are you doing?</h2>
      {/* Iterate over each ppe_guide in props and create a GuideBlock */}
      {props.ppe_guides.map(guide => {
        console.log(guide)
        return <GuideBlock title={guide.fields.title} short_description={guide.fields.short_description} key={guide.id}/>
      })}
    </div>

  );

}

export default GuideWrapper;
