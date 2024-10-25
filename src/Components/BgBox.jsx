import React from 'react';
import '../Style/BgBoxstyle.css'; // Make sure to create a corresponding CSS file

const BackgroundBox = ({ imageUrl, title, content , loc}) => {
  return (
    <div className="bg-rectangle-container">
      <div className="bg-rectangle-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <p style={{textAlign:'right', color:'#cca43b'}}>{loc}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Image" />
      </div>
    </div>
  );
};

export default BackgroundBox;