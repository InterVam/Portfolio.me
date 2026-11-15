import './Style/landpageStyle.css'
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import LoadingAnimation from './Components/LoadingAnimation'
import LowPolyBackground from './Components/LowPolyBackground'
import PixelCursorTrail from './Components/PixelCursorTrail'
import GlitchEngine from './Components/GlitchEngine'

function Landing() {
  return (
    <div className='landPage'>
      <LoadingAnimation />
      <LowPolyBackground />
      <GlitchEngine />
      <PixelCursorTrail />
      <Navbar/>
      <Container/>
    </div>
  )
}

export default Landing
