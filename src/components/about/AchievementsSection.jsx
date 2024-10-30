// src/components/about/AchievementsSection.jsx

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn,fadeInUp } from "../../animations/animationVariants";
import ImageGallery from "./ImageGallery";

const AchievementsSection = () => {
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
    <section className="mt-16 z-10 max-w-6xl w-full px-4 relative" ref={ref}>
      <motion.h2
        className="text-3xl font-semibold mb-8 text-white text-center"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Logros
      </motion.h2>
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
          Tercer Lugar en Hackathon Chiapas
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-6 text-center"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Obtuve el tercer lugar en el Hackathon Chiapas, patrocinado por Vara Network, con un proyecto
          basado en blockchain. En el equipo, desempeñé el rol de Desarrollador Frontend, creando
          interfaces de usuario dinámicas y reactivas que facilitaron la gestión eficiente de las
          operaciones del restaurante.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <ImageGallery />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
