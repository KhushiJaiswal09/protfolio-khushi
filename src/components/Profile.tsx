import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import Chip from '@mui/material/Chip';
import '../assets/styles/Profile.scss';

function Expertise() {
    return (
        <div className="container" id="coding">
            <div className="skills-container">
                <h1>Coding Profiles</h1>
                <div className="skills-grid">

                    <a href="https://leetcode.com/u/KhushiJaiswal09/" target="_blank" rel="noreferrer">
                        <div className="profile">
                            <FontAwesomeIcon icon={faJava} size="3x"/>
                            <h3>LeetCode</h3>
                            <p>Secured a global rank of less than 420,000, reflecting my continuous dedication in DSA, coding problem-solving abilities, and competitive programming experience.</p>
                            <p>Click here to visit :)</p>
                        </div>
                    </a>

                    <a href="https://www.geeksforgeeks.org/user/jaiswalkhushi677/" target="_blank" rel="noreferrer">
                        <div className="profile">
                            <FontAwesomeIcon icon={faDatabase} size="3x"/>
                            <h3>Geeks for Geeks</h3>
                            <p>I hold a rank of around 700 on GFG in my college, reflecting my consistent efforts in DSA, coding problem-solving, and competitive programming.</p>
                            <p>Click here to visit :)</p>
                        </div>
                    </a>

                    <a href="https://github.com/KhushiJaiswal09" target="_blank" rel="noreferrer">
                        <div className="profile">
                            <FontAwesomeIcon icon={faJava} size="3x"/>
                            <h3>Github</h3>
                            <p>Here is a vibrant showcase of projects, highlighting my dedication to coding consistency, creative problem-solving, and continuous growth in software development.</p>
                            <p>Click here to visit :)</p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
