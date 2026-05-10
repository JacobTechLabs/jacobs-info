"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, slideInLeft, slideInRight, staggerContainer, viewportConfig } from "@/lib/animations";

/**
 * ScrollReveal Component
 * Wrapper component for scroll-triggered animations
 * 
 * @param {string} variant - Animation variant: 'fadeUp', 'fadeIn', 'scaleIn', 'slideLeft', 'slideRight'
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Animation duration (in seconds)
 * @param {boolean} stagger - Whether to stagger children animations
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements
 */

const variants = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
};

export default function ScrollReveal({
  variant = "fadeUp",
  delay = 0,
  duration,
  stagger = false,
  className = "",
  children,
  ...props
}) {
  const selectedVariant = variants[variant] || fadeUp;

  const customTransition = {
    ...selectedVariant.animate.transition,
    delay,
    ...(duration && { duration }),
  };

  if (stagger) {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        variants={staggerContainer}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={{
        ...selectedVariant.animate,
        transition: customTransition,
      }}
      viewport={viewportConfig}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
