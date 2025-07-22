import React from 'react';
import '../Style/contactStyle.css';
import github from '../assets/github_black.png';
import linkedin from '../assets/LinkedIn.png';
import email from '../assets/email.webp';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:yfathi2008@gmail.com" className="contact-link">
              yfathi2008@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location:</span>
            <span className="contact-text">Alexandria, Egypt</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <span className="contact-text">01229901479</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/youssef-fathi-a443b318a/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/InterVam" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>
          <a href="mailto:yfathi2008@gmail.com" className="social-link">
            <img src={email} alt="Email" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
