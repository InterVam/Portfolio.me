import '../Style/navStyle.css'
import { useEffect, useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const links = [
    ['01', 'About', 'about'],
    ['02', 'Experience', 'experience'],
    ['03', 'Work', 'projects'],
    ['04', 'Play', 'playground'],
    ['05', 'Contact', 'contact'],
  ];

  useEffect(() => {
    const sections = links
      .map(([, , id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, .25, .6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navBar" aria-label="Main navigation">
      <a className="nav-brand" href="#about" aria-label="Youssef Fathi home">YF<span>.</span></a>
      <div className="navbarList">
        {links.map(([number, label, id]) => (
          <a className={`navItems ${activeSection === id ? 'is-active' : ''}`} href={`#${id}`} key={id}>
            <span className="nav-number">{number}</span>
            <span className="hoverText">{label}</span>
          </a>
        ))}
      </div>
      <a className="nav-resume" href="/Youssef-Fathi-Resume.pdf" download>Download CV <span>↓</span></a>
    </nav>
  );
}

export default Navbar;