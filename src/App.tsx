import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiExternalLink, FiCheck, FiSend } from 'react-icons/fi';

// Smooth scroll helper
const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Navbar Component
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '0',
        opacity: 1,
        height: '80px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('home');
          }}
          style={{ fontSize: '24px', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none', opacity: 1, cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AS
        </motion.a>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => {
            const sectionId = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(sectionId);
                }}
                style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', opacity: 1, fontSize: '16px', cursor: 'pointer' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ color: 'white', y: -2 }}
              >
                {item}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
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

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)', padding: '80px 24px', marginTop: '80px', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          background: 'rgba(168, 85, 247, 0.2)',
          filter: 'blur(80px)',
        }}
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
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          background: 'rgba(59, 130, 246, 0.2)',
          filter: 'blur(80px)',
        }}
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
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', opacity: 1, zIndex: 10, position: 'relative' }}
      >
        {/* Profile Image in Hero */}
        <motion.div
          variants={itemVariants}
          style={{ marginBottom: '32px', opacity: 1 }}
        >
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              margin: '0 auto',
              overflow: 'hidden',
              border: '4px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop&crop=center"
              alt="Ali Shehab - Programming"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(to bottom right, #a855f7, #3b82f6)';
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                  parent.style.color = 'white';
                  parent.style.fontSize = '48px';
                  parent.style.fontWeight = 'bold';
                  if (!parent.textContent) {
                    parent.textContent = 'AS';
                  }
                }
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} style={{ marginBottom: '24px', opacity: 1 }}>
          <motion.span
            style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 0.9)', fontSize: '14px', fontWeight: '500', opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            Senior Software Engineer & Freelancer
          </motion.span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 'bold', color: 'white', marginBottom: '16px', lineHeight: '1.2', opacity: 1 }}
        >
          Hi, I'm Ali Shehab
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '600', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px', opacity: 1 }}
        >
          Building Digital Experiences
        </motion.h2>
        <motion.p
          variants={itemVariants}
          style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '672px', margin: '0 auto 48px', lineHeight: '1.75', opacity: 1 }}
        >
          I craft beautiful, functional, and performant web applications that solve real-world problems. Specialized in modern frontend technologies and user experience design.
        </motion.p>
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', marginBottom: '48px', opacity: 1 }}
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('projects');
            }}
            style={{ display: 'inline-block', padding: '16px 32px', borderRadius: '9999px', background: 'linear-gradient(to right, #9333ea, #2563eb)', color: 'white', textDecoration: 'none', fontWeight: '500', opacity: 1, boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.5)', cursor: 'pointer' }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('contact');
            }}
            style={{ display: 'inline-block', padding: '16px 32px', borderRadius: '9999px', border: '2px solid rgba(255, 255, 255, 0.3)', color: 'white', textDecoration: 'none', fontWeight: '500', opacity: 1, cursor: 'pointer' }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginBottom: '48px', opacity: 1 }}
        >
          {[
            { icon: FiGithub, href: 'https://github.com/alishehab05' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ali-al-rida-shehab-4aa894375' },
            { icon: FiMail, href: 'mailto:logicode.en@gmail.com' },
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('about');
          }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', opacity: 1, position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span style={{ fontSize: '14px', marginBottom: '8px', opacity: 1 }}>Scroll</span>
          <FiArrowDown size={24} style={{ opacity: 1 }} />
        </motion.a>
      </motion.div>
    </section>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// About Section
const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" style={{ minHeight: '100vh', padding: '96px 24px', backgroundColor: '#0f172a', opacity: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', opacity: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px', opacity: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>
              About Me
            </h2>
            <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #a855f7, #3b82f6)', margin: '16px auto 0', opacity: 1 }} />
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '64px', opacity: 1 }}>
          <AnimatedSection delay={0.2}>
            <motion.div
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', opacity: 1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                style={{ aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', position: 'relative', opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=center"
                  alt="Ali Shehab - Programming"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(to bottom right, #a855f7, #3b82f6)';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.style.color = 'white';
                      parent.style.fontSize = '48px';
                      parent.style.fontWeight = 'bold';
                      if (!parent.textContent) {
                        parent.textContent = 'AS';
                      }
                    }
                  }}
                />
              </motion.div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>Ali Shehab</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.75', opacity: 1 }}>
                Senior Software Engineer passionate about creating exceptional digital experiences.
              </p>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <motion.p
                style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.75', opacity: 1 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a passionate senior software engineer with a deep love for crafting beautiful, functional, and performant web applications. With years of experience in modern frontend technologies, I specialize in turning complex problems into simple, elegant solutions.
              </motion.p>
              <motion.p
                style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.75', opacity: 1 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My approach combines technical expertise with creative problem-solving, ensuring that every project I work on not only meets but exceeds expectations. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
              </motion.p>
              <motion.p
                style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.75', opacity: 1 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.6}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', opacity: 1 }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', textAlign: 'center', opacity: 1 }}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  style={{ fontSize: '48px', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px', opacity: 1 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', opacity: 1 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" style={{ minHeight: '100vh', padding: '96px 24px', background: 'linear-gradient(to bottom, #0f172a, #1e293b)', opacity: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', opacity: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px', opacity: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>
              Skills & Expertise
            </h2>
            <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #a855f7, #3b82f6)', margin: '16px auto 0', opacity: 1 }} />
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', opacity: 1 }}>
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.2}>
              <motion.div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', opacity: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '24px', opacity: 1 }}>{category.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', opacity: 1 }}>{skill.name}</span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', opacity: 1 }}>{skill.level}%</span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <motion.div
                          style={{ height: '100%', background: 'linear-gradient(to right, #a855f7, #3b82f6)', borderRadius: '9999px', opacity: 1 }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution with real-time inventory management.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      gradient: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration.',
      technologies: ['Next.js', 'TypeScript', 'WebSockets', 'MongoDB', 'Tailwind'],
      gradient: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Beautiful data visualization dashboard with interactive charts and real-time metrics.',
      technologies: ['React', 'D3.js', 'TypeScript', 'Express', 'Chart.js'],
      gradient: 'linear-gradient(to bottom right, #f97316, #ef4444)',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social networking platform with real-time messaging and content sharing.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
      gradient: 'linear-gradient(to bottom right, #10b981, #059669)',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '96px 24px', backgroundColor: '#1e293b', opacity: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', opacity: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px', opacity: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>
              Featured Projects
            </h2>
            <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #a855f7, #3b82f6)', margin: '16px auto 0', opacity: 1 }} />
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', opacity: 1 }}>
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', overflow: 'hidden', opacity: 1, cursor: 'pointer' }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  style={{ height: '200px', position: 'relative', overflow: 'hidden', opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback to gradient if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = project.gradient;
                      }
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: project.gradient, opacity: 0.3, mixBlendMode: 'multiply' }} />
                </motion.div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '12px', opacity: 1 }}>{project.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px', lineHeight: '1.75', opacity: 1 }}>{project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        style={{ padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px', opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span style={{ padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px', opacity: 1 }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', opacity: 1 }}
                    whileHover={{ color: 'white', x: 5 }}
                  >
                    <span>View Details</span>
                    <FiExternalLink size={16} />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: [
        'Led development of multiple high-traffic web applications',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver products on time',
      ],
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2019 - 2021',
      description: [
        'Developed and maintained React-based frontend applications',
        'Built RESTful APIs using Node.js and Express',
        'Optimized application performance resulting in 40% faster load times',
        'Participated in agile development processes',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science',
      company: 'Computer Science',
      period: '2014 - 2018',
      description: [
        'Graduated with honors',
        'Specialized in Software Engineering',
        'Relevant coursework: Data Structures, Algorithms, Web Development',
      ],
    },
  ];

  return (
    <section id="experience" style={{ minHeight: '100vh', padding: '96px 24px', background: 'linear-gradient(to bottom, #1e293b, #0f172a)', opacity: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', opacity: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px', opacity: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>
              Experience & Education
            </h2>
            <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #a855f7, #3b82f6)', margin: '16px auto 0', opacity: 1 }} />
          </div>
        </AnimatedSection>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', opacity: 1 }}>
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', opacity: 1 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '4px', opacity: 1 }}>{exp.title}</h3>
                    <p style={{ color: '#a855f7', fontWeight: '500', opacity: 1 }}>{exp.company}</p>
                  </div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', opacity: 1 }}>{exp.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 1 }}>
                  {exp.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px', display: 'flex', alignItems: 'flex-start', opacity: 1 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                    >
                      <span style={{ color: '#a855f7', marginRight: '8px', opacity: 1 }}>▹</span>
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using web3forms.com - NO SIGN-UP REQUIRED!
      // Get your free access key at: https://web3forms.com/
      // Just enter your email and get instant access key - no registration needed!
      const accessKey = '410f575f-d58f-41d8-91ee-2cbc508d149a';
      
      // Check if access key is configured
      if (accessKey === 'YOUR_ACCESS_KEY') {
        // Show instructions for first-time setup
        const setupMessage = `Quick Setup (30 seconds - NO SIGN-UP!):\n\n1. Go to: https://web3forms.com/\n2. Enter email: logicode.en@gmail.com\n3. Click "Get Your Access Key"\n4. Copy the key\n5. Update src/App.tsx (line ~664) with accessKey\n\nFor now, opening email client...`;
        alert(setupMessage);
        
        // Fallback to mailto
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:logicode.en@gmail.com?subject=${subject}&body=${body}`;
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact from ${formData.name} - Portfolio`,
          from_name: formData.name,
          from_email: formData.email,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          to: 'logicode.en@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      // Fallback: Open email client with pre-filled data
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:logicode.en@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" style={{ minHeight: '100vh', padding: '96px 24px', backgroundColor: '#0f172a', opacity: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', opacity: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px', opacity: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>
              Get In Touch
            </h2>
            <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #a855f7, #3b82f6)', margin: '16px auto 0', opacity: 1 }} />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', marginTop: '24px', maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto', opacity: 1 }}>
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', opacity: 1 }}>
          <AnimatedSection delay={0.2}>
            <div style={{ opacity: 1 }}>
              <motion.div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', marginBottom: '32px', opacity: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <motion.div
                    style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(to bottom right, #a855f7, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiMail size={20} style={{ color: 'white' }} />
                  </motion.div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '4px', opacity: 1 }}>Email</h3>
                    <a href="mailto:logicode.en@gmail.com" style={{ color: '#a855f7', textDecoration: 'none', opacity: 1 }}>logicode.en@gmail.com</a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', opacity: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '16px', opacity: 1 }}>Let's Connect</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.75', marginBottom: '24px', opacity: 1 }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <motion.a
                    href="https://github.com/alishehab05"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '12px 24px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', textDecoration: 'none', fontSize: '14px', opacity: 1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ali-al-rida-shehab-4aa894375"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '12px 24px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', textDecoration: 'none', fontSize: '14px', opacity: 1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <motion.form
              onSubmit={handleSubmit}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', opacity: 1 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="name" style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', marginBottom: '8px', opacity: 1 }}>Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', fontSize: '16px', outline: 'none', opacity: 1 }}
                  placeholder="Your Name"
                  whileFocus={{ borderColor: '#a855f7', boxShadow: '0 0 0 3px rgba(168, 85, 247, 0.1)' }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="email" style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', marginBottom: '8px', opacity: 1 }}>Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', fontSize: '16px', outline: 'none', opacity: 1 }}
                  placeholder="your.email@example.com"
                  whileFocus={{ borderColor: '#a855f7', boxShadow: '0 0 0 3px rgba(168, 85, 247, 0.1)' }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="message" style={{ display: 'block', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', marginBottom: '8px', opacity: 1 }}>Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', fontSize: '16px', outline: 'none', resize: 'vertical', opacity: 1, fontFamily: 'inherit' }}
                  placeholder="Your Message"
                  whileFocus={{ borderColor: '#a855f7', boxShadow: '0 0 0 3px rgba(168, 85, 247, 0.1)' }}
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  background: isSubmitted
                    ? 'linear-gradient(to right, #10b981, #059669)'
                    : 'linear-gradient(to right, #9333ea, #2563eb)',
                  color: 'white',
                  fontWeight: '500',
                  border: 'none',
                  cursor: isSubmitting || isSubmitted ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  opacity: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02, boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.6)' } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitted ? (
                  <>
                    <FiCheck size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

function App() {
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer style={{ backgroundColor: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '32px 0', opacity: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center', opacity: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', opacity: 1 }}>
            © {new Date().getFullYear()} Ali Shehab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

