// src/components/about/PracticesSection.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const practices = [
  {
    empresa: "HighTech",
    descripcion:
      "Desarrollé plantillas frontend utilizando Blade, Livewire, JavaScript, HTML y Tailwind CSS, para que mi equipo pudiera integrarlas en el proyecto Laravel para su renderización.",
  },
  {
    empresa: "IMA Chiapas",
    descripcion:
      "Trabajé en un proyecto llamado ERP Restaurantes, donde integré tecnologías frontend como React.js utilizando TypeScript y Tailwind CSS, junto con la librería de componentes Flowbite para agilizar el desarrollo.",
  },
];

const PracticesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Porcentaje del componente que debe estar visible para activar la animación
    triggerOnce: true, // La animación solo se ejecuta una vez
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Definir variantes de animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <section className="mt-16 z-10 max-w-6xl w-full px-4 relative" ref={ref}>
      <motion.h2
        className="text-3xl font-semibold mb-8 text-white text-center"
        variants={itemVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Lugares donde hice prácticas
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {practices.map((practice, index) => (
          <motion.div
            key={index}
            className="p-6 bg-[#1a1a2e] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#8e69ff]">
              {practice.empresa}
            </h3>
            <p className="text-gray-300">{practice.descripcion}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PracticesSection;
