import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
export const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
        date="2020-2024"
        // icon={<StarIcon />}
      >
        <h3 className="vertical-timeline-element-title">
           Electronic And Communication Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bachleor Degree
        </h4>
        <h5>GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</h5>
        <h5 className="vertical-timeline-element-subtitle" ></h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2008-2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Senior Secondary School</h3>
        <h4 className="vertical-timeline-element-subtitle">Jamia Millia Islamia
        </h4>
        <h5></h5>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
