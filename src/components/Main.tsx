import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaDownload } from "react-icons/fa6";

import "../assets/styles/Main.scss";
import portrait from "../assets/images/6.png";

function Main() {
  return (
    <main className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="availability-dot" />
          SOFTWARE ENGINEER · SOCIÉTÉ GÉNÉRALE
        </p>
        <h1>
          Hi, I’m <span>Khushi Jaiswal.</span>
        </h1>
        <p className="hero-role">I build reliable software for real-world problems.</p>
        <p className="hero-summary">
          I’m a Software Engineer with 1.5+ years of experience across full-time
          engineering and internship roles. At Société Générale, I build
          enterprise applications and document-processing workflows, bringing
          together .NET, Angular, microservices, and clear operational
          observability.
        </p>
        <div className="hero-actions">
          <a className="hero-button hero-button--primary" href="#experience">
            Explore my experience
          </a>
          <a
            className="hero-button hero-button--secondary"
            href="/Khushi-Jaiswal.pdf"
            download="Khushi-Jaiswal-Resume.pdf"
          >
            <FaDownload aria-hidden="true" />
            Download résumé
          </a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a
            href="https://www.linkedin.com/in/khushijaiswal09/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://github.com/KhushiJaiswal09"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Professional highlights">
        <div className="hero-card-top">
          <img src={portrait} alt="" />
          <div>
            <span className="hero-card-label">CURRENTLY BUILDING</span>
            <strong>Enterprise software</strong>
            <span className="hero-company">Société Générale</span>
          </div>
        </div>
        <div className="hero-card-divider" />
        <p className="hero-card-caption">A little about my work</p>
        <div className="hero-stats">
          <div>
            <strong>1.5+</strong>
            <span>years of experience</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>services with logging</span>
          </div>
          <div>
            <strong>2+</strong>
            <span>microservices</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Main;
