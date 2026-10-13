import React from "react";
import {
    faCode,
    faDatabase,
    faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/Expertise.scss";

const skillGroups = [
    {
        number: "01",
        icon: faCode,
        title: "Frontend",
        description: "Building responsive, accessible interfaces for enterprise applications.",
        technologies: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    },
    {
        number: "02",
        icon: faDatabase,
        title: "Backend",
        description: "Developing APIs and distributed services for dependable document workflows.",
        technologies: ["C#", "Java", "Python", "SQL", "ASP.NET Core", "Microservices", "REST APIs", "RabbitMQ", "Serilog", "PostgreSQL"],
    },
    {
        number: "03",
        icon: faScrewdriverWrench,
        title: "Tools & Technologies",
        description: "Supporting deployments, automated document processing, and collaborative delivery.",
        technologies: ["Kubernetes", "Docker", "Git", "CI/CD", "Swagger", "OpenCV", "OCR", "Named Entity Recognition (NER)", "Event-Driven Architecture"],
    },
];

function Expertise() {
    return (
        <section className="expertise-section" id="expertise">
            <div className="section-inner">
                <div className="section-heading">
                    <p className="section-eyebrow">HOW I BUILD</p>
                    <h2>Technical Expertise</h2>
                    <p>Core technologies and tools from my experience and résumé.</p>
                </div>
                <div className="expertise-grid">
                    {skillGroups.map((group) => (
                        <article className="expertise-card" key={group.title}>
                            <div className="expertise-card-top">
                                <span className="expertise-number">{group.number}</span>
                                <FontAwesomeIcon icon={group.icon} aria-hidden="true" />
                            </div>
                            <h3>{group.title}</h3>
                            <p className="expertise-description">{group.description}</p>
                            <ul className="expertise-tags" aria-label={`${group.title} technologies`}>
                                {group.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Expertise;
