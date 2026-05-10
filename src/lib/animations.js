/**
 * Animation variants for Framer Motion
 * Luxury editorial animations with elegant timing
 */

// Easing curves
export const easing = {
  smooth: [0.4, 0, 0.2, 1],
  smoothOut: [0, 0, 0.2, 1],
  smoothIn: [0.4, 0, 1, 1],
  spring: [0.34, 1.56, 0.64, 1],
  luxury: [0.6, 0.01, -0.05, 0.95],
};

// Fade up animation (most common)
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Fade in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Scale in animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Stagger container
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger children with fade up
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Hero text reveal (character by character or word by word)
export const textReveal = {
  initial: { opacity: 0, y: 20, rotateX: -15 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: easing.luxury,
    },
  },
};

// Image reveal with scale
export const imageReveal = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.smooth,
    },
  },
};

// Hover effects
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: easing.smooth,
  },
};

export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: easing.smooth,
  },
};

// Card hover (combined)
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Viewport settings for scroll-triggered animations
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "-50px",
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easing.smooth,
    },
  },
};

// Navigation item animation
export const navItem = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Mobile menu animation
export const mobileMenu = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: easing.smoothOut,
    },
  },
};

// Skeleton shimmer animation
export const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
