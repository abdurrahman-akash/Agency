import { Variants } from 'framer-motion';

// Fade up animation for sections and cards
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Staggered fade in for lists of items
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item animation for staggered lists
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Page transition animation
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
};

// Animation for navbar items
export const navItemAnimation: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
};

// Hero section animation
export const heroAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Hero element animation
export const heroElement: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Parallax scroll effect
export const parallaxScroll = (yOffset: number): Variants => ({
  visible: {
    y: yOffset,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
    }
  }
});