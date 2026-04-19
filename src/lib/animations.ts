export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 8px 40px rgba(91,33,182,0.10)' },
  hover: {
    y: -5,
    boxShadow: '0 20px 60px rgba(91,33,182,0.18)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const navbarVariants = {
  top: {
    background: 'rgba(255,255,255,0)',
    backdropFilter: 'blur(0px)',
    boxShadow: 'none',
    borderBottom: '1px solid transparent',
  },
  scrolled: {
    background: 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(14px)',
    boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
    borderBottom: '1px solid rgba(229,231,235,0.8)',
  },
};
