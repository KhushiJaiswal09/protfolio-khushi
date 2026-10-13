import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const education = [
  {
    number: "01",
    title: "B.Tech in Computer Science & Engineering",
    school: "Vellore Institute of Technology, Bhopal",
    period: "July 2021 – October 2025",
    result: "9.09",
    resultLabel: "CGPA",
    recognition: "GVSDP Academic Merit Scholarship · 50% tuition waiver",
  },
  {
    number: "02",
    title: "Class XII · Physics, Chemistry & Mathematics",
    school: "St. Anthony's School, Barabanki",
    period: "April 2020 – July 2021",
    result: "95.8%",
    resultLabel: "Score",
    recognition: "Academic scholarship · 100% tuition waiver",
  },
  {
    number: "03",
    title: "Class X · S.S.C",
    school: "St. Anthony's School, Barabanki",
    period: "2018 – 2019",
    result: "92%",
    resultLabel: "Score",
  },
];

function Timeline() {
  return (
    <section className="education-section" id="education">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-eyebrow">THE ROAD SO FAR</p>
          <h2>Education</h2>
          <p>The foundations behind my work in software engineering.</p>
        </div>
        <VerticalTimeline animate={false} lineColor="var(--border)">
          {education.map((item) => (
            <VerticalTimelineElement
              key={item.number}
              className="vertical-timeline-element--work education-timeline-element"
              contentStyle={{
                background: "var(--surface-raised)",
                color: "var(--text)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid var(--surface-raised)",
              }}
              date={item.period}
              visible
              iconStyle={{ background: "var(--accent)", color: "var(--bg)" }}
              icon={<FontAwesomeIcon icon={faUserGraduate} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h6 className="vertical-timeline-element-subtitle">{item.school}</h6>
              <p className="education-result">
                {item.result} <span>{item.resultLabel}</span>
              </p>
              {item.recognition && (
                <p className="education-recognition">{item.recognition}</p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
