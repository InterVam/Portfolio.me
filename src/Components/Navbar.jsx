import '../Style/navStyle.css'
import 'animate.css';
import React, { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  
  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }
  
  // Desktop navbar (vertical on the left)
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
}

export default Navbar;