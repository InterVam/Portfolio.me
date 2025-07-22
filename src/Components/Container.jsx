import Main from './Main';
import Contact from './Contact';
import Projects from './Projects';
import Experience from './Experience';
import '../Style/containerStyle.css';
import { useRef } from 'react';

function Container() {
    return (
        <div className="main-container">
            <div id="about" name="about" className="section">
                <Main/>
            </div>

            <div id="experience" name="experience" className="section">
                <Experience/>
            </div>

            <div id="projects" name="projects" className="section">
                <Projects/>
            </div>

            <div id="contact" name="contact" className="section">
                <Contact/>
            </div>
        </div>
    );
}

export default Container;