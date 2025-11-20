import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { FaBrain, FaBolt, FaShieldAlt, FaMobileAlt } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const techStack = [
    { icon: FaBrain, label: 'AI Integration' },
    { icon: FaBolt, label: 'Lightning Fast' },
    { icon: FaShieldAlt, label: 'Secure' },
    { icon: FaMobileAlt, label: 'Responsive' }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;WHO_WE_ARE&gt;</span>
          <h2 className="section-title">VIBE CODERS WITH A MISSION</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="code-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <div className="window-title">sky_vision.py</div>
              </div>
              <div className="window-content">
                <pre><code><span className="code-keyword">class</span> <span className="code-class">SKY</span>:
    <span className="code-keyword">def</span> <span className="code-function">__init__</span>(self):
        self.founders = [
            <span className="code-string">"Sarthak"</span>,
            <span className="code-string">"Krushna"</span>,
            <span className="code-string">"Yash"</span>
        ]
        self.mission = <span className="code-string">"Build Extraordinary"</span>
        self.tech = <span className="code-string">"Premium AI"</span>
    
    <span className="code-keyword">def</span> <span className="code-function">execute</span>(self):
        <span className="code-keyword">while</span> <span className="code-keyword">True</span>:
            self.<span className="code-function">innovate</span>()
            self.<span className="code-function">deliver</span>()
            self.<span className="code-function">repeat</span>()</code></pre>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="about-paragraph">
              We're not just another dev team. We're <strong>SKY</strong> – three college students who turned 
              caffeine and ambition into a startup that delivers <span className="highlight">premium AI-powered solutions</span>.
            </p>
            <p className="about-paragraph">
              Armed with cutting-edge AI technologies and a passion for innovation, we build 
              <span className="highlight"> functional, scalable websites</span> that don't just look good – they perform exceptionally.
            </p>
            <p className="about-paragraph">
              From concept to deployment, we leverage the latest in AI, cloud computing, and modern web frameworks 
              to bring your vision to life. Our code isn't just written; it's <strong>crafted with precision</strong>.
            </p>
          </motion.div>

          <motion.div
            className="tech-features"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="tech-stack">
              {techStack.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={index}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className="tech-icon" />
                    <span>{tech.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
