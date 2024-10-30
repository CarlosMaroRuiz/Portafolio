export const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
 
// src/components/about/animationVariants.js

export const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  
  export const moveAnimation = (xValues, yValues, duration) => ({
    animate: {
      x: xValues,
      y: yValues,
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  });
  