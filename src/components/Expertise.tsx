import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Next",
    "Figma",
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Socket.io",
    "Git",
    "AWS",
    "Docker",
    
];

const labelsThird = [
    "Java",
    "Swing",
    "Jsoup",
    "OOPS Concept",
    "JDBC",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>FrontEnd Development</h3>
                    <p>I have expertise in building diverse web applications from scratch using modern technologies. My experience spans across the entire Software Development Life Cycle (SDLC), with strong proficiency in both frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faDatabase}  size="3x"/>
                    <h3>Backend Development</h3>
                    <p>Backend developer with a knack for designing scalable systems and optimizing APIs. I specialize in creating seamless, high-performance server-side applications and managing complex databases, ensuring smooth and efficient operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java</h3>
                    <p>Proficient in Java with a strong focus on OOP and DSA. I excel at writing clean, efficient code and developing robust applications. My expertise includes advanced OOP, multithreading, and database management with JDBC.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;