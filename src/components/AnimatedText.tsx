import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'h2' 
}: AnimatedTextProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const isString = typeof children === 'string';
  const words = isString ? children.split(' ') : [];

  return (
    <motion.div
      variants={container}
      initial="visible"
      animate="visible"
      className={className}
      style={{ opacity: 1 }}
    >
      {isString ? (
        <Component className="inline-block" style={{ opacity: 1 }}>
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2"
              style={{ opacity: 1 }}
            >
              {word}
            </span>
          ))}
        </Component>
      ) : (
        <div style={{ opacity: 1 }}>
          <Component>{children}</Component>
        </div>
      )}
    </motion.div>
  );
};

export default AnimatedText;

