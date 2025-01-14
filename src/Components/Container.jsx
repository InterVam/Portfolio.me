import Background from './Background';
import Main from './Main';
import Contact from './Contact';
import Projects from './Projects';
import { useRef } from 'react';

function Container() {
    return (
        <div
            style={{
                display: 'flex',
                background: '#0E1B26',
                flexDirection: 'column',
                width: '100vw',
            }}
        >
            
            <div id="about">
                <Main/>
            </div>

            <div id="Background">
                <Background/>
            </div>

            <div id="Projects">
                <Projects/>
            </div>

            <div id="Contact">
                <Contact/>
            </div>
        </div>
    );
}

export default Container;