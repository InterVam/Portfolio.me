import '../Style/navStyle.css'
import 'animate.css';
import React from 'react';
import { Link } from 'react-scroll';

const BubbleText = ({name}) => {
    return (
      <a className='navItems'>
        {name.split("").map((child, idx) => (
          <span className='hoverText' key={idx}>
            {child}
          </span>
        ))}
      </a>
    );
  };
function Navbar() {
  if (window.innerWidth >= 500){
    return ( 
      <nav className="navBar">
      <div className='navbarList'>
        <li className='navItems'>
         <Link to="about" smooth={true} duration={500}><BubbleText name={"About"}/></Link>
        </li>
        <li className='navItems'>
         <Link to="Background" smooth={true} duration={500}><BubbleText name={"Background"}/></Link>
        </li>
        <li className='navItems'>  
        <Link to="Projects" smooth={true} duration={500}><BubbleText  name={"Projects"}/></Link>
        </li >
        <li className='navItems' >
        <Link to="Contact" smooth={true} duration={500}><BubbleText name={"Contact"}/></Link>
        </li>
      </div>
    </nav> )
   }
   else{
   return(<div></div>)
   }
    ;
}

export default Navbar;