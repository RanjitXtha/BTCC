import About from '../sections/About.js'
import Footer from '../sections/Footer.js'
import Gallery from '../sections/Gallery.js'
import Hero from '../sections/Hero.js'
import Mission from '../sections/Mission.js'
import Training from '../sections/Training.js'

const Home = () => {
  return (
    <>
     <Hero />
        <About />
        <Training />
        <Mission />
        <Gallery />
     
    </>
   
  )
}

export default Home