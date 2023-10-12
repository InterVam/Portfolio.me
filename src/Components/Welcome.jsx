import anime from 'animejs/lib/anime.es.js';
import '../Style/welcomeStyle.css'
import { useRef } from 'react';
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
function About() {
    
    return (
        <div className="mainframe">
             <BubbleText name="Hello!
              I am Youssef Fathi" type="header"/>
             
             <span className='infoText'>I am a Junior Software Engineer , currently working on my Master's Degree at University of Ottawa.
              I have a passion for Web and Cross-platform Mobile Development using ReactJS as well as working with new Backend Technologies. I am kind of 
              also a big foodie so I'm your guy for any food recommendation. </span> 
            <DotGrid/>
            <h1>ZEBYYY</h1>
        </div>
         
    );
}
const GRID_WIDTH = 40;
const GRID_HEIGHT = 35;
const DotGrid = () => {
    const handleDotClick = (e) => {
      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.25, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -20, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0.5, easing: "easeInOutQuad", duration: 500 },
          { value: 1, easing: "easeOutSine", duration: 250 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: e.target.dataset.index,
        }),
      })
    };

    
    const handleHover = (e) => {
      anime({
        targets: e.target,
        opacity: [
          { value: 0.1, duration: 750 },
          { value: 1}
        ]
      })
    };
  
    const dots = [];
    let index = 0;
  
    for (let i = 0; i < GRID_WIDTH; i++) {
      for (let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(
          <div
            className="dot-point"
            data-index={index}
            key={`${i}-${j}`}
            onMouseOver={handleHover} 
          >
            <div
              className="dot-point-outer"
              data-index={index}
              
            />
          </div>
        );
        index++;
      }
    }
  
    return (
      <div
        onClick={handleDotClick}
        
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className="griddy"
      >
        {dots}
      </div>
    );
  };
export default About;
