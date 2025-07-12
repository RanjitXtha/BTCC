import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './sections/Header'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'
import Courses from './pages/Courses'
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
