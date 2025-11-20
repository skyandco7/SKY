import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useInView } from '../../hooks/useInView'
import './Contact.css'

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      content: <a href="mailto:hello@skyvibecoders.com">hello@skyvibecoders.com</a>
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Connect',
      content: <p>LinkedIn • GitHub</p>
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Location',
      content: <p>Remote • Global Reach</p>
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;GET_IN_TOUCH&gt;</span>
          <h2 className="section-title">LET'S BUILD SOMETHING EXTRAORDINARY</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="contact-content-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3>READY TO ELEVATE YOUR PROJECT?</h3>
          <p className="contact-description">
            Whether you have a fully-formed idea or just a spark of inspiration, 
            we're here to turn it into reality. Let's create something that stands out.
          </p>

          <div className="contact-items">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="social-links-large">
            <motion.a href="https://www.linkedin.com/in/s-k-y-and-co-290320399/" target="_blank" rel="noopener noreferrer" className="social-link-large" whileHover={{ y: -3 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://github.com/skyandco7" target="_blank" rel="noopener noreferrer" className="social-link-large" whileHover={{ y: -3 }}>
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
