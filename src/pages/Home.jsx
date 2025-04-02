import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <ParticlesBackground />
      <ThemeToggle />
      
      <motion.main 
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="centered-content">
          <motion.div
            className="hero-content"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">UMUT YILDIZ</span>
            </h1>
            <h2 className="hero-subtitle">B. Sc. Software Engineering</h2>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Engineer exploring AI and IoT innovations in healthcare to create intelligent solutions.
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact" className="btn primary">Contact Me</Link>
              <Link to="/projects" className="btn secondary">View Work</Link>
            </motion.div>

            <div className="social-links">
              <a href="https://github.com/Peacefulcatt" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/umut-yıldız-12a36523a/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://x.com/umutyldz2626" aria-label="Twitter/X"><FaTwitter /></a>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default Home;