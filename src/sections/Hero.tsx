import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import MagneticButton from '../components/MagneticButton';
import AnimatedText from '../components/AnimatedText';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)',
        padding: '80px 0'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="visible"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 24px', 
          textAlign: 'center',
          opacity: 1
        }}
      >
        <div style={{ marginBottom: '24px', opacity: 1 }}>
          <span
            style={{ 
              display: 'inline-block', 
              padding: '8px 16px', 
              borderRadius: '9999px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: '14px', 
              fontWeight: '500',
              opacity: 1
            }}
          >
            Senior Software Engineer & Freelancer
          </span>
        </div>

        <div style={{ marginBottom: '24px', opacity: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '16px',
            lineHeight: '1.2',
            opacity: 1
          }}>
            Hi, I'm Ali Shehab
          </h1>
        </div>

        <div style={{ marginBottom: '32px', opacity: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
            fontWeight: '600', 
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '16px',
            opacity: 1
          }}>
            Building Digital Experiences
          </h2>
        </div>

        <p
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.7)', 
            maxWidth: '672px', 
            margin: '0 auto 48px', 
            lineHeight: '1.75',
            opacity: 1
          }}
        >
          I craft beautiful, functional, and performant web applications that
          solve real-world problems. Specialized in modern frontend technologies
          and user experience design.
        </p>

        <div
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '24px', 
            marginBottom: '64px',
            opacity: 1
          }}
        >
          <MagneticButton href="#projects" variant="primary">
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Get In Touch
          </MagneticButton>
        </div>

        {/* Social Links */}
        <div
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '24px', 
            marginBottom: '48px',
            opacity: 1
          }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1
              }}
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 1
          }}
        >
          <a
            href="#about"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              opacity: 1
            }}
          >
            <span style={{ fontSize: '14px', marginBottom: '8px', opacity: 1 }}>Scroll</span>
            <FiArrowDown size={24} style={{ opacity: 1 }} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

