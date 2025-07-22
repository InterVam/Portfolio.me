import React, { useRef } from 'react';
import '../Style/projectStyle.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectBox from './PjBox.jsx';

const projectData = [
    {
        title: "Dragify Demo Agent",
        tech: "Python, FastAPI, React, Next.js, Docker, Docker Compose, PostgreSQL",
        desc: "• Developed agentic LLM workflows to automate structured document analysis and criteria evaluation.\n• Built RAG pipelines integrating vector search and generative models for enhanced information retrieval.\n• Designed data enrichment flows combining web scraping and LLM-driven entity profiling.\n• Contributed to the architecture of scalable, modular AI tools used across multiple client-facing systems.\n• Participated in technical demos, internal handovers, and partner integration evaluations.\n• Researched automation strategies for security operations and enterprise document intelligence.",
        repo: "https://github.com/InterVam/dragify-demo-agent"
    },
    {
        title: "Real-Time Streaming Sales Analytics Pipeline",
        tech: "Apache Kafka, PySpark, Docker, Jupyter Notebook, Airflow, Spark Standalone Cluster, Pandas, Parquet",
        desc: "• Designed and implemented a real-time streaming data pipeline to process simulated e-commerce sales transactions\n• Deployed Kafka and Zookeeper via Docker for scalable streaming data ingestion and topic management\n• Developed PySpark Structured Streaming jobs to consume and aggregate transactional data by product category using window functions and watermarking\n• Integrated Apache Airflow to orchestrate Kafka simulation producers, Spark streaming jobs, and daily validation tasks",
        repo: "https://github.com/InterVam/Real-Time-and-Batch-Analytics-Pipeline-for-E-Commerce-Sales"
    },
    {
        title: "Audio based Gender Detection",
        tech: "Python, Pytorch, Librosa, ScikitLearn, TorchAudio, Seaborn, Numpy",
        desc: "This project presents a cutting-edge Voice Gender Detection model. It's designed to accurately classify voice recordings into male or female categories. The core of this project lies in its robust utilization of audio processing techniques and advanced neural network architectures to achieve high accuracy levels.",
        repo: "https://github.com/InterVam/Audio-based-Gender-Detection"
    },
    {
        title: "Single-Server-Queue-Simulation-Using-Blum-Blum-Shub-Generator",
        tech: "Python, NumPy, Pandas, Matplotlib, Seaborn, Jupyter Notebook",
        desc: "• Achieved more consistent utilization rates with M/M/1-BBS (0.58–0.69) vs. M/M/1 (0.46–0.82).\n• Reduced queue length variance and improved efficiency using BBS-based arrival patterns.\n• Shortened average delays (0.006–0.031 hours) compared to M/M/1 (0.015–0.081 hours).\n• Enhanced system reliability with stable, predictable performance metrics.",
        repo: "https://github.com/InterVam/Single-Server-Queue-Simulation-Using-Blum-Blum-Shub-Generator"
    },
    {
        title: "Flu Shot Learning Predict H1N1 and Seasonal Flu Vaccines",
        tech: "Numpy, Pandas, Matplotlib, Seaborn, ScikitLearn, Tensorflow",
        desc: "The goal of the Project is to predict how likely individuals are to receive their H1N1 and seasonal flu vaccines based on this dataset.",
        link: "https://www.drivendata.org/competitions/66/flu-shot-learning/page/210/",
        repo: "https://github.com/InterVam/Flu-Shot-Learning-Predict-H1N1-and-Seasonal-Flu-Vaccines"
    },
    {
        title: "AniShrine Anime Recommendation System",
        tech: "React, Axios, Firebase, Formik, Yup, Styled-Components",
        desc: "A web app enables users to discover and explore Anime content using React for the frontend and Firebase for backend operations. AXIOS is used for efficient API calls.",
        repo: "https://github.com/InterVam/AniShrine"
    },
    {
        title: "MQTT Lock System",
        tech: "React Native, Firebase, Styled-Components, MQTT",
        desc: "A mobile app serves as the main interface for a remote lock system, using Firebase for user authentication. It allows users to register MQTT products, change lock passwords.",
        repo: "https://github.com/InterVam/Network-Secura"
    },
    {
        title: "Sypher",
        tech: "Kotlin",
        desc: "A Mobile Application made using Kotlin that offers user-friendly text encryption and decryption, including copy options for processed sentences.",
        repo: "https://github.com/InterVam/Sypher"
    }
];

const Projects = () => {
    const carouselRef = useRef(null);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 481 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 15
        }
    };

    const CustomDot = ({ onClick, ...rest }) => {
        const { active } = rest;
        return (
            <button
                className={`custom-dot ${active ? "active" : "inactive"}`}
                onClick={() => onClick()}
                aria-label="Carousel navigation dot"
            />
        );
    };

    return (
        <div className='projects-container'>
            <div className='title'>Projects</div>
            <div className='carousel-wrapper'>
                <Carousel
                    ref={carouselRef}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    customDot={<CustomDot />}
                    showDots={true}
                    arrows={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list"
                    itemClass="carousel-item"
                    centerMode={false}
                    swipeable={true}
                    draggable={true}
                    keyBoardControl={true}
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    removeArrowOnDeviceType={[]}
                    additionalTransfrom={0}
                    beforeChange={() => {}}
                    afterChange={() => {}}
                >
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
                </Carousel>
            </div>
        </div>
    );
};

export default Projects;
