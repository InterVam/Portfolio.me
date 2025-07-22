import React from 'react';
import '../Style/welcomeStyle.css';
import Position from './position';

const colors = [
    "#cca43b", // Gold
    "#d4b347", // Light Gold
    "#a78531", // Dark Gold
];

const Main = () => {
    return (
        <div className="mainframe">
            <div className="content-layer">
                <h1 className="header">Youssef Fathi</h1>
                <Position words={["Software Engineer", "AI Engineer", "Full-Stack Developer"]} colors={colors} />
                <p className="infoText">
                    A passionate software engineer specializing in AI and full-stack development. 
                    I thrive on building innovative solutions and crafting seamless digital experiences. 
                    My goal is to leverage technology to solve complex problems and create meaningful impact.
                </p>
            </div>
        </div>
    );
};

export default Main;
