import '../Style/welcomeStyle.css';

const Main = () => {
    return (
        <div className="hero">
            <div className="hero-copy">
                <p className="eyebrow"><span className="eyebrow-mark" /> Portfolio / 2026</p>
                <h1 className="header">Youssef <em>Fathi</em></h1>
                <p className="hero-role">Software Engineer <span>+</span> AI Engineer</p>
                <p className="infoText">
                    I build reliable data platforms, intelligent products, and full-stack experiences
                    that turn complex ideas into useful tools.
                </p>
                <div className="hero-actions">
                    <a className="button button-primary" href="#projects">View selected work <span>↗</span></a>
                    <a className="button button-secondary" href="/Youssef-Fathi-Resume.pdf" download>Download résumé <span>↓</span></a>
                </div>
                <div className="hero-meta">
                    <span><i /> Based in Ontario, Canada</span>
                    <span>Open to meaningful collaborations</span>
                </div>
            </div>
        </div>
    );
};

export default Main;
