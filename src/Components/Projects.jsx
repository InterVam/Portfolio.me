import React from 'react';
import '../Style/projectStyle.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectBox from './PjBox.jsx';


const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='projects'>
            <div className='title'>Projects</div>
            <div style={{marginLeft:"5vw" , zIndex:"100"}}>
            <Carousel responsive={responsive} containerClass="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}  showDots={true}
            itemClass='carousel-item-width-100% '
            >
            <ProjectBox
                tech= {"Numpy - Pandas - Matplotlib - Seaborn"}
                title="Single Server Queue Simulation Using Blum Blum Shub Generator"
                desc="A simulation of a Single Server Queue System using the Blum Blum Shub random number generator based on this paper"
                link={"https://ieeexplore.ieee.org/abstract/document/10031874?casa_token=KwXLyrQO1hgAAAAA:lIx3qXQ-ZdOVUd4I2doBTa8Aeb_wHYSyuCuwJwwVlnj_7X15fZH6FzI1kdvhIWIhlNZvgRoboPA"}
                repo={"https://github.com/InterVam/Single-Server-Queue-Simulation-Using-Blum-Blum-Shub-Generator"}
            />
             <ProjectBox
                tech= {"Numpy - Pandas - Matplotlib - Seaborn - ScikitLearn - Tensorflow"}
                title="Flu Shot Learning Predict H1N1 and Seasonal Flu Vaccines"
                link={"https://www.drivendata.org/competitions/66/flu-shot-learning/page/210/"}
                desc="The goal of the Project is to predict how likely individuals are to receive their H1N1 and seasonal flu vaccines based on this dataset."
                repo={"https://github.com/InterVam/Flu-Shot-Learning-Predict-H1N1-and-Seasonal-Flu-Vaccines"}
            />
               <ProjectBox
                tech= {"React - Axois - Firebase - Formik - Yup - Styled-Components"}
                title={"AniShrine Anime Recommendation System"}          
                desc="A web app enables users to discover and explore Anime content using React for the frontend and Firebase for backend operations. AXIOS is used for efficient API calls."
                repo={"https://github.com/InterVam/AniShrine"}
            />
               <ProjectBox
                tech= {"React Native - Firebase - Styled-Components - MQTT"}
                title="MQTT Lock System"
                desc="A mobile app serves as the main interface for a remote lock system, using Firebase for user authentication. It allows users to register MQTT products, change lock passwords."
                repo={"https://github.com/InterVam/Network-Secura"}
            />

                <ProjectBox
                tech= {"Kotlin"}
                title="Sypher"
                desc="A Mobile Application made using Kotlin that offers user-friendly text encryption and decryption, including copy options for processed sentences."
                repo={"https://github.com/InterVam/Sypher"}
            />
            </Carousel>


            </div>
           
        </div>
    );
};

export default Projects;
