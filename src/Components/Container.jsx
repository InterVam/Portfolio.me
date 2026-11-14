import Main from './Main';
import Contact from './Contact';
import Projects from './Projects';
import NeonGame from './NeonGame';
import { useEffect } from 'react';
import Experience from './Experience';
import '../Style/containerStyle.css';

function Container() {
    useEffect(() => {
        const sections = document.querySelectorAll('.main-container > .section');
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            }),
            { threshold: .12 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

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

            <div id="playground" name="playground" className="section">
                <div className="playground-container">
                    <NeonGame />
                </div>
            </div>

            <div id="contact" name="contact" className="section">
                <Contact/>
            </div>
        </div>
    );
}

export default Container;