import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import './Services.css'

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'AI-POWERED WEB APPS',
      description: 'Full-stack web applications integrated with cutting-edge AI capabilities. From chatbots to predictive analytics, we build intelligent solutions.',
      features: [
        'Machine Learning Integration',
        'Natural Language Processing',
        'Computer Vision Features',
        'Automated Workflows'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
        </svg>
      ),
      title: 'RESPONSIVE DESIGN',
      description: 'Pixel-perfect, mobile-first designs that look stunning on every device. We create experiences that engage and convert.',
      features: [
        'Mobile-First Approach',
        'Cross-Browser Compatible',
        'Performance Optimized',
        'Accessibility Standards'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'RAPID DEVELOPMENT',
      description: 'Lightning-fast delivery without compromising quality. We leverage modern frameworks and AI tools to accelerate development.',
      features: [
        'Agile Methodology',
        'Quick Turnaround',
        'Continuous Deployment',
        'Real-time Updates'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'API INTEGRATION',
      description: 'Seamless integration with third-party services, payment gateways, and AI APIs. We connect your app to the digital ecosystem.',
      features: [
        'RESTful APIs',
        'GraphQL Solutions',
        'Webhook Implementation',
        'Microservices Architecture'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'PERFORMANCE OPTIMIZATION',
      description: 'Speed matters. We optimize every byte, every request, and every render to deliver blazing-fast experiences.',
      features: [
        'Code Splitting',
        'Lazy Loading',
        'CDN Integration',
        'Caching Strategies'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'SECURITY & SCALABILITY',
      description: 'Enterprise-grade security and infrastructure that grows with your business. Built to handle traffic from day one to one million users.',
      features: [
        'Authentication & Authorization',
        'Data Encryption',
        'DDoS Protection',
        'Auto-scaling Infrastructure'
      ]
    }
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;WHAT_WE_DO&gt;</span>
          <h2 className="section-title">OUR PREMIUM SERVICES</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
