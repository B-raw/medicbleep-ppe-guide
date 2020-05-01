import React from 'react';

const GuideBlock = (props) => {
  const { title, short_description } = props;

  return (
    <div>
      <h4>{title}</h4>
      <p>{short_description}</p>
    </div>
  )
}

export default GuideBlock;
