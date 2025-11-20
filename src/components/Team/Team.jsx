import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useInView } from '../../hooks/useInView'
import './Team.css'

const Team = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const teamMembers = [
    {
      name: 'SARTHAK',
      letter: 'S',
      image: '/SARTHAK.jpg',
      role: 'FOUNDER • BACKEND MASTER',
      bio: 'Architect of scalable solutions. Transforms complex problems into elegant code with AI-powered precision.',
      skills: ['Node.js', 'Python', 'APIs', 'Cloud'],
      linkedin: 'https://www.linkedin.com/in/sarthak-kharche-78a115338/',
      github: 'https://github.com/SarthakKharche'
    },
    {
      name: 'KRUSHNA',
      letter: 'K',
      image: '/KRUSHNA.jpg',
      role: 'FOUNDER • DESIGN & AI SPECIALIST',
      bio: 'Design wizard and AI innovator who breathes life into data. Specializes in creating intelligent systems and stunning visuals.',
      skills: ['UI/UX', 'AI/ML', 'Figma', 'Python'],
      linkedin: 'https://www.linkedin.com/in/krushna-nirmalkar-b3a281327/',
      github: 'https://github.com/krushna218745'
    },
    {
      name: 'YASH',
      letter: 'Y',
      image: '/YASH.jpg',
      role: 'FOUNDER • FRONTEND MASTER',
      bio: 'UI/UX perfectionist who crafts pixel-perfect experiences. Turns designs into immersive digital realities.',
      skills: ['React', 'JavaScript', 'Vue', '3D Web'],
      linkedin: 'https://www.linkedin.com/in/yash-kumar-tripathi-998457306/',
      github: 'https://github.com/YashKrTripathi'
    }
  ]

  return (
    <section id="team" className="team" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;MEET_THE_TEAM&gt;</span>
          <h2 className="section-title">THE MASTERMINDS</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="avatar">
                  <div className="avatar-inner">
                    <img src={member.image} alt={member.name} className="avatar-image" />
                  </div>
                  <div className="avatar-ring"></div>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                <div className="social-links">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                    whileHover={{ y: -3 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                    whileHover={{ y: -3 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
