import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheck } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Get In Touch
          </AnimatedText>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4" />
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear
            from you. Let's create something amazing together.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <motion.div
                className="glass rounded-2xl p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <FiMail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email</h3>
                    <a
                      href="mailto:contact@example.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-2xl p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out through the form or email.
                </p>
                <div className="flex gap-4">
                  <MagneticButton
                    href="https://github.com"
                    variant="secondary"
                    className="text-sm"
                  >
                    GitHub
                  </MagneticButton>
                  <MagneticButton
                    href="https://linkedin.com"
                    variant="secondary"
                    className="text-sm"
                  >
                    LinkedIn
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/90 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/90 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/90 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Your Message"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <FiCheck />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <FiSend />
                    Send Message
                  </span>
                )}
              </motion.button>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

