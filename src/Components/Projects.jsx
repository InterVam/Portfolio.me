import '../Style/projectStyle.css'
import ProjectBox from './PjBox.jsx';

const projectData = [
    {
        title: "Tabkha",
        tech: "Python, FastAPI, LangGraph, Next.js, TypeScript, Supabase",
        desc: "• Engineered a 3-node LangGraph agent pipeline to extract structured recipes from YouTube and TikTok videos.\n• Used Gemini 2.5 Flash and custom prompts to parse Egyptian Arabic cooking content.\n• Converted informal spoken measurements into bilingual Arabic and English recipe data.",
        repo: "https://github.com/InterVam"
    },
    {
        title: "Dragify AI Agent",
        tech: "Python, FastAPI, React, Next.js, Docker, LangChain, PostgreSQL",
        desc: "• Built a full-stack AI system for real estate lead processing.\n• Created 15+ modular APIs for Slack events, CRM insertion, and email notifications supporting 100+ leads per day.\n• Integrated Gmail and Zoho OAuth to automate lead workflows across multiple Slack teams.",
        repo: "https://github.com/InterVam/dragify-demo-agent"
    },
    {
        title: "Real-Time Streaming Analytics",
        tech: "Apache Kafka, PySpark, Docker, Airflow, Pandas, Parquet",
        desc: "• Created a complete ingestion, processing, and reporting suite for e-commerce analytics.\n• Designed Dockerized services exposing Spark jobs through scheduled Airflow pipelines.\n• Delivered batch and streaming data APIs for reliable reporting and decision-making.",
        repo: "https://github.com/InterVam/Real-Time-and-Batch-Analytics-Pipeline-for-E-Commerce-Sales"
    }
];

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className="section-heading projects-heading">
                <p className="eyebrow"><span className="eyebrow-mark" /> Selected work</p>
                <h1 className='title'>Things I&apos;ve <em>shipped.</em></h1>
                <p className="section-lede">From real-time analytics to agentic workflows — a small selection of systems built to make hard problems feel simpler.</p>
            </div>
            <div className='projects-grid'>
                    {projectData.map((project, index) => (
                        <ProjectBox
                            key={index}
                            tech={project.tech}
                            title={project.title}
                            desc={project.desc}
                            repo={project.repo}
                            link={project.link}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Projects;
