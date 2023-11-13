import '../Style/navStyle.css'
import 'animate.css';
import React from 'react';

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
         <BubbleText name={"About"}/>
        </li>
        <li className='navItems'>  
        <BubbleText  name={"Projects"}/>
        </li >
        <li className='navItems' >
        <BubbleText name={"Contact"}/>
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