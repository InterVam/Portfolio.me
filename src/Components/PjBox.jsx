import React from 'react';
import '../Style/PjBoxstyle.css'; // Make sure to create a corresponding CSS file
import github from '../assets/github.png'


const ProjectBox = ({ tech, title ,link, desc ,repo}) => {
  return (
    <div className="pj-rectangle-container">
      <div className="pj-rectangle-content">
        <h2>{title}</h2>  
        <p>{desc}</p>
        <a href={link} target="_blank" style={{color:'#cca43b'}}> {link?"Link":null}</a>        
      </div>
      <div style={{display:"flex" , flexDirection:"row", height:"15vh"}}>
      <div className="tech">
        <p style={{margin:"0" , color:"#a78531"}}>Technologies</p>
        <p>
          {tech}
        </p>
      </div>
      <div style={{backgroundColor:"#000000" , justifyContent:"center" , }}>
        <a href={repo} target="_blank">
        <img className="imgf" src={github} alt="Image" />
        </a>
      </div>
     </div>
    </div>
  );
};

export default ProjectBox;
