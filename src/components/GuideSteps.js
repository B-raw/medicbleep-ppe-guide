import React from 'react';
import ReactPlayer from 'react-player'

const GuideSteps = ({data}) => {
  const { title, description, video_url, steps } = data.fields

  return (
    <div>
      <a href="#">&lt; Back to Overview</a>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <ReactPlayer url={video_url} playing /> */}
      <ol>
        {/* First need to sort the order of the steps - order is a string so need to parse to number */}
        {steps.sort((a,b) => {
          return parseFloat(a.order) > parseFloat(b.order) ? 1 : -1
          {/* Then can return the steps content */}
        }).map((step) => {
          return <li>{step.content}</li>
        })}
      </ol>
      <button>Share</button>
    </div>
  )
};

export default GuideSteps;
