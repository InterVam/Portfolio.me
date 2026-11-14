import '../Style/experienceStyle.css';
import uon from '../assets/UON.jpg';
import iti from '../assets/iti.png';
import aast from '../assets/AAST.png';
import aws from '../assets/AWS.png';
import uottawa from '../assets/uottawa.png';

const workData = [
    {
        title: 'Amana',
        subtitle: 'Software Engineer',
        duration: 'Mar 2026 — Present · Dubai, UAE',
        description: [
            'Re-architected financial news ingestion pipelines, reducing P95 API latency by more than 90% from 300ms to 25ms.',
            'Engineered an OAuth2-secured Model Context Protocol server for real-time trading asset and instrument lookups.',
            'Built validation safeguards and fuzzy entity resolution to eliminate incomplete feeds and LLM hallucinations.'
        ],
        logo: null
    },
    {
        title: 'Lawyer Conveyance Systems',
        subtitle: 'Software Engineer',
        duration: 'Jan 2025 — Feb 2026 · Ottawa, Canada',
        description: [
            'Designed scalable NestJS and PostgreSQL REST APIs handling more than 5,000 requests per second.',
            'Built PySpark and Databricks ELT pipelines processing more than 1 million records daily with Delta Lake.',
            'Delivered BI APIs powering real-time dashboards and cut manual coordination overhead by 40%.'
        ],
        logo: null
    },
    {
        title: 'Flipped Toys',
        subtitle: 'Software Engineer',
        duration: 'Sep 2024 — Dec 2024 · Ottawa, Canada',
        description: [
            'Engineered a secure FastAPI backend with JWT authentication, parental controls, and device-based logins.',
            'Designed the Firebase Firestore schema for users, devices, games, and access control.',
            'Containerized and deployed the platform with Docker on Azure Container Apps.'
        ],
        logo: null
    }
];

const educationData = [
    {
        title: 'University of Ottawa',
        subtitle: 'Master of System Science and Engineering',
        duration: '2025',
        description: ['Specializing in Artificial Intelligence.'],
        logo: uottawa
    },
    {
        title: 'University of Northampton',
        subtitle: 'Bachelor Degree with Honors in Computer Engineering',
        duration: '2023',
        description: [],
        logo: uon
    },
    {
        title: 'Arab Academy for Science and Technology',
        subtitle: 'Bachelor Degree in Computer Engineering',
        duration: '2023',
        description: [],
        logo: aast
    }
];

const certificationData = [
    {
        title: 'AWS Certified Cloud Practitioner',
        subtitle: 'Amazon Web Services Training and Certification',
        duration: '',
        description: [],
        logo: aws
    },
    {
        title: 'Front End Development',
        subtitle: 'Information Technology Institute',
        duration: '',
        description: [],
        logo: iti
    }
];

const TimelineSection = ({ title, data }) => (
    <div className="timeline-section">
        <h2 className="section-title">{title}</h2>
        <div className="experience-timeline">
            {data.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-icon">
                        {item.logo && (
                            <img 
                                src={item.logo} 
                                alt={`${item.title} logo`} 
                                className={`logo-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                        )}
                        {!item.logo && <div className="default-icon"></div>}
                    </div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{item.title}</h3>
                        <h4 className="timeline-subtitle">{item.subtitle}</h4>
                        {item.duration && <span className="timeline-duration">{item.duration}</span>}
                        <ul className="timeline-description">
                            {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="section-heading">
                <p className="eyebrow"><span className="eyebrow-mark" /> The timeline</p>
                <h1 className="experience-title">Built from <em>curiosity.</em></h1>
                <p className="section-lede">A systems-minded engineer with a foundation in computer engineering and a focus on applied AI.</p>
            </div>
            <div className="timelines-wrapper">
                <TimelineSection title="Work Experience" data={workData} />
                <TimelineSection title="Education" data={educationData} />
                <TimelineSection title="Certifications" data={certificationData} />
            </div>
        </div>
    );
};

export default Experience; 