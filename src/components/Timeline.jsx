import React from 'react';
import data from '../assets/data.json';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <div id='timeline'>
      <div className="timelineBox">
        {
            data.projects.map((project, index) => (
                <TimelineItem key={project.title} heading={project.title} text={project.date} index={index} />
            ))
        }
      </div>
    </div>
  )
}

export default Timeline;
