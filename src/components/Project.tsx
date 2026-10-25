import React from "react";
import faceEmotion from "../assets/images/faceEmotion.jpg";
import srgpWebsite from "../assets/images/srgp-website.jpg";
import srgpComputerLab from "../assets/images/srgp-computer-lab.jpg";
import plantonia from "../assets/images/Plantonia.jpg";
import webClash from "../assets/images/Webclash.jpg";
import pulsePreview from "../assets/images/pulse-preview.svg";
import "../assets/styles/Project.scss";

interface ProjectDetails {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    highlights?: string[];
    image?: string;
    imageAlt?: string;
    images?: { src: string; alt: string }[];
    href?: string;
    liveHref?: string;
    visual?: "health";
}

const projects: ProjectDetails[] = [
    {
        title: "SRGP Institutional Web Platform",
        category: "Production website",
        description: "Built and deployed an institutional website from scratch, with 20+ responsive routes for admissions, academics, campus facilities, and student enquiries.",
        technologies: ["React", "TypeScript", "React Router", "Formspree"],
        highlights: ["20+ client-side routes", "Responsive page layouts", "Admissions & academic information"],
        images: [
            { src: srgpWebsite, alt: "SRGP Pharmacy College website homepage" },
            { src: srgpComputerLab, alt: "Computer lab featured on the SRGP College website" },
        ],
        href: "http://srgp.in/",
    },
    {
        title: "Pulse : Blood Pressure Journal ",
        category: "Full-stack health application",
        description: "Built Pulse, a full-stack blood-pressure journal with account-based access to readings, using a React frontend, ASP.NET Core API, and PostgreSQL.",
        technologies: ["React", "TypeScript", "Vite", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "Swagger"],
        highlights: ["Secure cross-device BP tracking", "Trend charts, averages & CSV export"],
        image: pulsePreview,
        imageAlt: "Pulse blood pressure journal dashboard preview",
        liveHref: "https://bp-monitoring-setup.vercel.app/",
    },
    {
        title: "Face Emotion Recognition",
        category: "Machine learning",
        description: "Built a real-time facial-expression recognition system that detects faces and classifies emotions from video input.",
        technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "Keras", "NumPy"],
        image: faceEmotion,
    },
    {
        title: "Plantonia",
        category: "Sustainable living",
        description: "Created a platform for environmental awareness and sustainable living, where users can share eco-friendly ideas, tips, and solutions.",
        technologies: ["HTML", "CSS", "SCSS", "JavaScript", "Bootstrap", "PHP", "SQLite", "WAMP"],
        image: plantonia,
        href: "https://github.com/KhushiJaiswal09/Plantonia",
    },
    {
        title: "Web Clash",
        category: "Web development service",
        description: "Developed a website service offering customizable templates and affordable solutions to help small businesses grow their online presence.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MongoDB"],
        image: webClash,
        href: "https://github.com/KhushiJaiswal09/Web-Clash/tree/main/WEB-CLASH-main",
    },
];

function Project() {
    return (
        <section className="projects-container" id="projects">
            <div className="section-inner">
                <div className="section-heading">
                    <p className="section-eyebrow">A FEW THINGS I’VE BUILT</p>
                    <h2>Selected Projects</h2>
                    <p>Production work, recent builds, and projects I’ve developed along the way.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-art">
                                {project.images ? (
                                    <div className="project-image-pair">
                                        {project.images.map((image) => (
                                            <img src={image.src} alt={image.alt} key={image.alt} />
                                        ))}
                                    </div>
                                ) : project.image ? (
                                    <div className="project-image-single">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt ?? `${project.title} project preview`}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={`project-illustration project-illustration--${project.visual}`}
                                        aria-hidden="true"
                                    >
                                        <div className="mock-window">
                                            <div className="mock-toolbar">
                                                <span />
                                                <span />
                                                <span />
                                                <i />
                                            </div>
                                            <div className="mock-health">
                                                <span className="mock-kicker">YOUR HEALTH OVER TIME</span>
                                                <strong>Blood pressure</strong>
                                                <div className="mock-reading"><b>118</b><span>/</span><b>76</b><small>mmHg</small></div>
                                                <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="project-details">
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.highlights && (
                                    <ul className="project-highlights" aria-label={`${project.title} features`}>
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                                <ul className="project-technologies" aria-label={`${project.title} technologies`}>
                                    {project.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                                {(project.href || project.liveHref) && (
                                    <div className="project-links">
                                        {project.href && (
                                            <a
                                                className="project-source-link"
                                                href={project.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={project.href === "http://srgp.in/"
                                                    ? "View SRGP Institutional Web Platform website"
                                                    : `View ${project.title} on GitHub`}
                                            >
                                                {project.href === "http://srgp.in/" ? "Visit live website" : "View on GitHub"}
                                                {" "}<span aria-hidden="true">↗</span>
                                            </a>
                                        )}
                                        {project.liveHref && (
                                            <a
                                                className="project-source-link"
                                                href={project.liveHref}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`Visit ${project.title} live website`}
                                            >
                                                Visit live website
                                                {" "}<span aria-hidden="true">↗</span>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
