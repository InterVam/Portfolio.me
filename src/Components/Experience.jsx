import React from 'react';
import '../Style/experienceStyle.css';
import uon from '../assets/UON.jpg';
import iti from '../assets/iti.png';
import aast from '../assets/AAST.png';
import aws from '../assets/AWS.png';
import uottawa from '../assets/uottawa.png';

const workData = [
    {
        title: 'Lawyer Conveyance Systems',
        subtitle: 'Software Engineer',
        duration: 'Present',
        description: [
            'Built production-grade ELT pipelines and Delta Lake architecture with PySpark and Databricks.',
            'Developed high-throughput backend services (5K+ RPS) with NestJS, PostgreSQL, and TypeORM.',
            'Delivered near real-time BI dashboards and containerized deployments via Docker/Kubernetes.'
        ],
        logo: null
    },
    {
        title: 'Tomorrow Smile',
        subtitle: 'Machine Learning Research Engineer Intern',
        duration: '2023',
        description: [
            'Built deep learning pipelines for dental 3D scans using U-Net, FlyByCNN, and MONAI.',
            'Integrated VTK and CUDA for 3D segmentation, visualization, and scalar generation.',
            'Deployed orthodontic analysis tools transforming research into clinical applications.'
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
                        {item.logo && <img src={item.logo} alt={`${item.title} logo`} />}
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
            <h1 className="experience-title">Experience & Education</h1>
            <div className="timelines-wrapper">
                <TimelineSection title="Work Experience" data={workData} />
                <TimelineSection title="Education" data={educationData} />
                <TimelineSection title="Certifications" data={certificationData} />
            </div>
        </div>
    );
};

export default Experience; 