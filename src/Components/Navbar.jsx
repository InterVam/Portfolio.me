import '../Style/navStyle.css'
import 'animate.css';
import React from 'react';

const BubbleText = ({name}) => {
    return (
      <span className='hoverText'>
        {name.split("").map((child, idx) => (
          <span key={idx}>
            {child}
          </span>
        ))}
      </span>
    );
};

function Navbar() {
  // Simple scroll function - just navigate to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (window.innerWidth >= 500) {
    return ( 
      <nav className="navBar">
        <div className='navbarList'>
          <li 
            className="navItems"
            onClick={() => scrollToSection('about')}
          >
            <BubbleText name={"About"}/>
          </li>
          <li 
            className="navItems"
            onClick={() => scrollToSection('experience')}
          >
            <BubbleText name={"Experience"}/>
          </li>
          <li 
            className="navItems"
            onClick={() => scrollToSection('projects')}
          >
            <BubbleText name={"Projects"}/>
          </li>
          <li 
            className="navItems"
            onClick={() => scrollToSection('contact')}
          >
            <BubbleText name={"Contact"}/>
          </li>
        </div>
      </nav>
    );
  } else {
    return(<div></div>);
  }
}

export default Navbar;