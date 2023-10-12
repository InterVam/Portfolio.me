import './Style/landpageStyle.css'
import Navbar from './Components/Navbar'
import About from './Components/Welcome'
function Landing() {
  return (
<div className='landPage'>
  <Navbar/>
  <About/>

</div>
  )
}

export default Landing
