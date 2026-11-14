import './Style/landpageStyle.css'
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import LoadingAnimation from './Components/LoadingAnimation'
import LowPolyBackground from './Components/LowPolyBackground'

function Landing() {
  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    document.documentElement.style.setProperty('--pointer-x', `${clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${clientY}px`);
  };

  return (
    <div className='landPage' onPointerMove={handlePointerMove}>
      <LoadingAnimation />
      <LowPolyBackground />
      <Navbar/>
      <Container/>
    </div>
  )
}

export default Landing
