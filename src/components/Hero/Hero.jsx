import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useCountUp from '../../hooks/useCountUp'
import './Hero.css'

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const projectsCount = useCountUp(10, 2000)
  const wizardsCount = useCountUp(3, 2000)

  const phrases = [
    "VIBE CODERS WITH PREMIUM AI TECHNOLOGIES",
    "BUILDING FUNCTIONAL SITES THAT PERFORM",
    "TRANSFORMING IDEAS INTO DIGITAL REALITY",
    "YOUR VISION, OUR INNOVATION"
  ]

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 0 : charIndex === phrases[phraseIndex].length ? 2000 : 0

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < phrases[phraseIndex].length) {
        setCurrentPhrase(phrases[phraseIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentPhrase(phrases[phraseIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setPhraseIndex((phraseIndex + 1) % phrases.length)
      }
    }, pauseTime || typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="glitch-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title glitch" data-text="SKY">SKY</h1>
        </motion.div>

        <motion.div
          className="hero-subtitle-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="hero-subtitle">
            <span className="name-highlight">S</span>arthak • 
            <span className="name-highlight">K</span>rushna • 
            <span className="name-highlight">Y</span>ash
          </h2>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="typing-text">{currentPhrase}</span>
          <span className="cursor">|</span>
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            <span>LET'S BUILD</span>
          </a>
          <a 
            href="#services" 
            className="btn btn-secondary"
            onClick={(e) => scrollToSection(e, '#services')}
          >
            <span>OUR SERVICES</span>
          </a>
        </motion.div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="stat-item">
          <div className="stat-value">{projectsCount}+</div>
          <div className="stat-label">PROJECTS CAPACITY</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{wizardsCount}</div>
          <div className="stat-label">TECH WIZARDS</div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
