import React from 'react';
import '../Style/PjBoxstyle.css';
import github from '../assets/github.png';

const ProjectBox = ({ tech, title, desc, repo, link }) => {
    return (
        <div className="project-card">
            <div className="project-content">
                <h2 className="project-title">{title}</h2>
                <div className="project-tech">
                    <h3>Technologies</h3>
                    <p>{tech}</p>
                </div>
                <div className="project-description">
                    {desc.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div className="project-links">
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                            <span>Live Demo</span>
                        </a>
                    )}
                    {repo && (
                        <a href={repo} target="_blank" rel="noopener noreferrer" className="github-link">
                            <img src={github} alt="GitHub" />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;
