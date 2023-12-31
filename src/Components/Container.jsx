import Background from './Background';
import Main from './Main';

import Projects from './Projects';

function Container() {
    return (
        <div style={{display:'flex',backgroundColor:'#d9d9d9',flexDirection:'column',width:'100vw'}}>
            <div id="about">
                <Main/>
            </div>

            <div id="Background">
                <Background/>
            </div>

            <div id="projects">
                <Projects/>
            </div>
        </div>
    );
}

export default Container;