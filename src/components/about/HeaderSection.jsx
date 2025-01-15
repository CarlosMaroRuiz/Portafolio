import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "../../animations/animationVariants";

const HeaderSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Percentage of the component that must be visible to trigger the animation
    triggerOnce: true, // Only trigger once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="relative z-10 text-white text-center mt-16" ref={ref}>
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-gray-300 max-w-xl mx-auto mt-4"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I am passionate about web development and a curious Python enthusiast.
      </motion.p>
    </section>
  );
};

export default HeaderSection;
