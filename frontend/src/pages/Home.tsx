import About from '../sections/About.js'
import Footer from '../sections/Footer.js'
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
        
        <Footer />
    </>
   
  )
}

export default Home