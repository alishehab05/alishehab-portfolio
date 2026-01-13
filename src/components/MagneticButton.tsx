import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '../hooks/useMagneticButton';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const MagneticButton = ({ 
  children, 
  href,
  onClick,
  variant = 'primary' 
}: MagneticButtonProps) => {
  const buttonRef = useMagneticButton({ strength: 0.2 });

  const baseStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontWeight: '500',
    overflow: 'hidden',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: 1,
    zIndex: 1
  };
  
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(to right, #9333ea, #2563eb)',
      color: 'white',
      boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.5)',
      border: 'none',
    },
    secondary: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    outline: {
      border: '2px solid rgba(255, 255, 255, 0.3)',
      color: 'white',
      backgroundColor: 'transparent',
    },
  };

  const buttonStyle: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        style={buttonStyle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ position: 'relative', zIndex: 10, opacity: 1 }}>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      type={onClick ? 'button' : 'submit'}
      style={buttonStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span style={{ position: 'relative', zIndex: 10, opacity: 1 }}>{children}</span>
    </motion.button>
  );
};

export default MagneticButton;

