import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Team from './components/Team/Team'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import MatrixRain from './components/MatrixRain/MatrixRain'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <MatrixRain />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
