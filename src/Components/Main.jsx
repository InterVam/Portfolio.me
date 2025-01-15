import anime from 'animejs/lib/anime.es.js';
import '../Style/welcomeStyle.css'
import { useState } from 'react';
import { useEffect } from 'react';
import RandomBinaryBackground from '../assets/background_gen';
import THREEDContainer from './THREEDContainer';
import Position from './position';

const colors = [
  "rgba(165, 243, 252, 1)", // Cyan
  "rgba(196, 181, 253, 1)", // Light Purple
  "rgba(110, 231, 183, 1)", // Neon Green
];

const BubbleText = ({ name, type }) => {

  const [letterColors, setLetterColors] = useState(
    name.split("").map(() => colors[0])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterColors((prevColors) =>
        prevColors.map(() => {
          const randomIndex = Math.floor(Math.random() * colors.length);
          return colors[randomIndex]; // Randomly pick a new color
        })
      );
    }, 200); // Adjust the speed of color cycling here

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <a className={type}>
      {name.split("").map((child, idx) => (
        <span
          className="hoverHeader"
          key={idx}
          style={{
            color: letterColors[idx], // Apply the current random color
            transition: "color 0.2s ease", // Smooth transition between colors
          }}
        >
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
        <BubbleText name="Youssef Fathi" type="header" />
        <Position  words={[" Software Engineer", " AI Engineer", " Full Stack Developer"]}
        colors={colors}/>
        <THREEDContainer  />
        <div className="infoText">
          A junior Software Engineer who loves crafting, creating, and learning new experiences for the digital world to savor
        </div>
      </div>
    </div>
         
    );
}






export default Main;
