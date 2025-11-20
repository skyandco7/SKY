import { FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Home', 'About', 'Team', 'Services', 'Contact']
  const servicesList = [
    'AI Web Apps',
    'Responsive Design',
    'API Integration',
    'Performance Optimization',
    'Cloud Deployment'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">SKY</h3>
            <p className="footer-tagline">VIBE CODERS • PREMIUM AI SOLUTIONS</p>
            <p className="footer-desc">
              Building the future, one line of code at a time.
            </p>
            <a 
              href="https://www.linkedin.com/in/s-k-y-and-co-290320399/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="SKY LinkedIn"
            >
              <FaLinkedin />
              <span>Connect with SKY</span>
            </a>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              {servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SKY - Sarthak, Krushna, Yash. All rights reserved.</p>
          <p>Crafted with 💙 by Vibe Coders</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
