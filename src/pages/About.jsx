import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import profilePic from './assets/profile-pic.jpeg';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FaCode />, items: ['React', 'JavaScript', 'HTML/CSS'] },
    { name: 'Backend', icon: <FaServer />, items: ['Node.js','Python', 'Django'] },
    { name: 'Database', icon: <FaDatabase />, items: ['MongoDB','Firebase'] },
    { name: 'Mobile', icon: <FaMobileAlt />, items: ['React Native', 'Android'] }
  ];

  const experience = [
    {
      year: '2024 - Present',
      role: 'AI Data Evaluator (Freelance)',
      company: 'OUTLIER',
      description: [
        'Evaluated and analyzed Turkish language prompts for accuracy, relevance, and clarity.',
        'Provided detailed reports and feedback in English to enhance AI model performance.',
        'Ensured linguistic quality and consistency across prompts.',
        'Identified and categorized linguistic patterns, ambiguities, and potential biases.'
      ]
    },
    {
      year: '2023',
      role: 'Software Engineer-Intern',
      company: 'ELMED MEDICAL SYSTEMS',
      description: [
        'Independently developed an object detection system for flexible ureteroscopy and laser lithotripsy procedures.',
        'Designed and implemented an advanced algorithm using Python and OpenCV for real-time kidney stone detection and tracking.',
        'Integrated user-friendly features like customizable grid density and object dimension adjustments.',
        'Handled data gathering and labeling to ensure high accuracy in the detection model.'
      ]
    }
  ];
  
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <section className="about-section">
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="about-text">
              <p>
                I'm a passionate software engineer with 5+ years of experience building 
                innovative digital solutions. My journey in technology began when I built 
                my first website at 15, and I've been obsessed with creating exceptional 
                user experiences ever since.
              </p>
              <p>
                When I'm not coding, you'll find me hiking in nature, reading sci-fi novels, 
                or experimenting with new cooking recipes. I believe in continuous learning 
                and staying curious about emerging technologies.
              </p>
            </div>
            <div className="about-image">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </motion.div>
        </section>

        <section className="skills-section">
          <motion.h3
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            My Skills
          </motion.h3>
          
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <ul className="skill-items">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="experience-section">
          <motion.h3
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.0 }}
          >
            Experience
          </motion.h3>
          
          <motion.div 
            className="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-content">
                  <h4>{exp.role}</h4>
                  <p className="company">{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;