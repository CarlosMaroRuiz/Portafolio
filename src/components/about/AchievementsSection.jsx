// src/components/about/AchievementsSection.jsx

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn,fadeInUp } from "../../animations/animationVariants";
import ImageGallery from "./ImageGallery";

const AchievementsSection = ({images,title,description}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // 20% del componente debe estar visible para activar la animación
    triggerOnce: true, // La animación solo se ejecuta una vez
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="mt-16 z-10 max-w-6xl w-full px-3 relative" ref={ref}>
      
      <motion.div
        className="p-6 bg-[#1a1a2e] rounded-lg shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-4 text-[#8e69ff] text-center"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-6 text-center"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
         {description}
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <ImageGallery images = {images}/>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
