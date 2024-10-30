
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "../../animations/animationVariants";

const HeaderSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Porcentaje del componente que debe ser visible para activar la animación
    triggerOnce: true, // Solo activar una vez
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
        Sobre Mí
      </motion.h1>
      <motion.p
        className="text-gray-300 max-w-xl mx-auto mt-4"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Me apasiona el desarrollo web y soy una persona curiosa en Python.
      </motion.p>
    </section>
  );
};

export default HeaderSection;
