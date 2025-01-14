import anime from 'animejs/lib/anime.es.js';
import '../Style/welcomeStyle.css'
import { useState } from 'react';
import { useEffect } from 'react';
import RandomBinaryBackground from '../assets/background_gen';
import THREEDContainer from './THREEDContainer';
import Computer from './Computer';
const BubbleText = ({name,type}) => {
    return (
      <a className={type}>
        {name.split("").map((child, idx) => (
          <span className='hoverHeader' key={idx}>
            {child}
          </span>
        ))}
      </a>
    );
  };

function Main() {
    return (
        <div className="mainframe">
          <div className="background-layer">
        <RandomBinaryBackground />
         </div>
          
         <div className="content-layer">
        <BubbleText name="YOUSSEF FATHI" type="header" />
        <THREEDContainer  />
        <div className="infoText">
          A junior Software Engineer who loves crafting, creating, and learning new experiences for the digital world to savor
        </div>
      </div>
    </div>
         
    );
}






export default Main;
