import './Style/landpageStyle.css'
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import LoadingAnimation from './Components/LoadingAnimation'
import LowPolyBackground from './Components/LowPolyBackground'

function Landing() {
  return (
    <div className='landPage'>
      <LoadingAnimation />
      <LowPolyBackground />
      <Navbar/>
      <Container/>
    </div>
  )
}

export default Landing
