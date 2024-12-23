import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaDownload } from "react-icons/fa6";

import '../assets/styles/Main.scss';
import mussi from "../assets/images/6.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mussi} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KhushiJaiswal09" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/khushijaiswal09/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://drive.google.com/file/d/1j3x93qXD0iJ6UzqePMX5rNs_BB-AyBMA/view" target="_blank" rel="noreferrer">
              <FaDownload className="small-icon" />
            </a>

          </div>
          <h1>Khushi Jaiswal</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KhushiJaiswal09" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/khushijaiswal09/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://drive.google.com/file/d/1gmNjGC_Lo2zEBLYLRjxAJ4nP4Ne-Kz8t/view?usp=sharing" target="_blank" rel="noreferrer">
              <FaDownload className="small-icon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
