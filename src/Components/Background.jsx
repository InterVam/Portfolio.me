import '../Style/backgroundStyle.css'
import RectangleWithImage from './BgBox';
import uottawa from '../assets/uottawa.png'
import uon from '../assets/UON.jpg'
import AAST from '../assets/AAST.png'
import AWS from '../assets/AWS.png'
import iti from '../assets/iti.png'
function Background() {
    return ( <div className="background">
        <div className='title'>Background</div>
        <div className='unis'>
        <RectangleWithImage
        imageUrl= {uottawa}
        title="Master of System Science and Engineering Student at University of Ottawa"
        content="09/2023 – Present"
        loc=" Ottawa , ON, Canada"
      />

<RectangleWithImage
        imageUrl= {uon}
        title="Bachelor Degree in Computer Engineering from the University of Northampton"
        content="09/2018 – 06/2023"
        loc="Northampton,
        England"
      />
<RectangleWithImage
        imageUrl= {AAST}
        title="Bachelor Degree in Computer Engineering from the Arab Academy for Science and Technolgy"
        content="09/2018 – 06/2023 "
        loc="Alexandria, Egypt"
      />
        </div>
        <div className='title'>Certificates</div>
        <div className='unis'>
        <RectangleWithImage
        imageUrl= {AWS}
        title="AWS Certified Cloud Practitioner"
        content="2023 – 2026"
        loc=" Amazon Web Services"
      />
       <RectangleWithImage
        imageUrl= {iti}
        title="Frontend Development Course"
        content="08/2021 – 09/2021"
        loc="Information Technology Institute in Egypt"
      />
      </div>
    </div> );
}

export default Background;