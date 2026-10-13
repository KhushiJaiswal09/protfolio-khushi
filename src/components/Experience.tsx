import React from "react";
import "../assets/styles/Experience.scss";

const positions = [
  {
    title: "Software Engineer",
    period: "September 2025 – Present",
    type: "Full-time",
    highlights: [
      "Develop and maintain ASP.NET Core Web APIs and Angular modules for an internal KYC platform supporting compliance and identity-verification workflows.",
      "Integrated RabbitMQ messaging across two microservices to trigger document-processing stages after submission.",
      "Implemented centralized Serilog structured logging across 10+ services to improve error diagnosis and traceability.",
      "Maintain document-processing workflows involving OCR, document classification, and named entity recognition (NER).",
      "Built custom health-check endpoints and an operational monitoring dashboard to streamline deployment verification and Kubernetes troubleshooting.",
    ],
  },
  {
    title: "Software Engineering Intern",
    period: "March 2025 – September 2025",
    type: "Internship",
    highlights: [
      "Developed responsive frontend modules using Angular, React, JavaScript, and TypeScript for enterprise banking applications.",
      "Built reusable UI components and integrated REST APIs to accelerate frontend feature delivery.",
      "Tested frontend functionality, resolved UI defects, and improved responsive behavior in a Git-based Agile workflow.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-eyebrow">WHERE I MAKE AN IMPACT</p>
          <h2>Experience</h2>
          <p>From learning the ropes to building and supporting software in production.</p>
        </div>
        <div className="experience-company">
          <div className="company-mark" aria-hidden="true">SG</div>
          <div className="company-details">
            <h3>Société Générale</h3>
            <p>Enterprise banking · KYC &amp; document processing</p>
          </div>
          <span className="company-tenure">March 2025 – Present</span>
        </div>
        <div className="experience-roles">
          {positions.map((position) => (
            <article className="experience-role" key={position.title}>
              <div className="role-period">
                <span className="role-dot" />
                <span>{position.period}</span>
              </div>
              <div className="role-content">
                <div className="role-heading">
                  <h3>{position.title}</h3>
                  <span className="role-type">{position.type}</span>
                </div>
                <ul>
                  {position.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
