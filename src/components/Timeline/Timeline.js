import React from "react";
import timelineData from './data.json';
import './timeline.css';

const Timeline = () =>
    timelineData.length > 0 && (
      <div>
      <h2 className="experience" id="experiences">Experience</h2>
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
        </div>
    );

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
      <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
              <a
                  href={data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {data.link.text}
              </a>
          )}
          <span className="circle" />
      </div>
  </div>
);

export default Timeline;

