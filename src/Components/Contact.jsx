import '../Style/contactStyle.css';
import github from '../assets/github_black.png';
import linkedin from '../assets/LinkedIn.png';
import email from '../assets/email.webp';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <p className="eyebrow"><span className="eyebrow-mark" /> Next chapter</p>
        <h1 className="contact-title">Let&apos;s make<br /><em>something useful.</em></h1>
        <p className="contact-description">
          Have a thoughtful problem, an ambitious product, or a good question about AI and engineering?
          I’d love to hear from you.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:yfathi2008@gmail.com" className="contact-link">
              yfathi2008@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Based in</span>
            <span className="contact-text">Dubai, United Arab Emirates</span>
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
