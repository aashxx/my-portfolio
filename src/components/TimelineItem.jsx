import React from 'react';

const TimelineItem = ({heading, text, index}) => {
  return (
    <div className={`timelineItem ${index%2 === 0 ? "leftTimeline" : "rightTimeline"}`}>
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TimelineItem;
