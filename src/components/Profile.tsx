import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const profiles = [
    {
        name: "GitHub",
        description: "Browse my software projects and contributions.",
        linkText: "Explore my repositories",
        href: "https://github.com/KhushiJaiswal09",
        icon: faGithub,
    },
    {
        name: "LeetCode",
        description: "243+ problems solved across easy, medium, and hard challenges.",
        linkText: "View my solutions",
        href: "https://leetcode.com/u/KhushiJaiswal09/",
        icon: faCode,
    },
];

function Profile() {
    return (
        <section className="container" id="coding">
            <div className="skills-container">
                <div className="section-heading">
                    <p className="section-eyebrow">OUTSIDE THE DAY JOB</p>
                    <h2>Coding Profiles</h2>
                </div>
                <div className="skills-grid">
                    {profiles.map((profile) => (
                        <a
                            href={profile.href}
                            target="_blank"
                            rel="noreferrer"
                            key={profile.name}
                        >
                            <div className="profile">
                                <FontAwesomeIcon icon={profile.icon} aria-hidden="true" />
                                <h3>{profile.name}</h3>
                                <p>{profile.description}</p>
                                <p>{profile.linkText} <span aria-hidden="true">↗</span></p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Profile;
