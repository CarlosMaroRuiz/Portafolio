// src/components/about/BackgroundShapes.jsx

import React from "react";
import { motion } from "framer-motion";
import { pulseAnimation,moveAnimation } from "../../animations/animationVariants";

const shapes = [
  {
    id: 1,
    className: "absolute top-0 left-0 w-72 h-72 bg-[#8e69ff] rounded-full mix-blend-multiply filter blur-2xl opacity-30",
    animation: moveAnimation([0, 100, 0], [0, 50, 0], 10),
  },
  {
    id: 2,
    className: "absolute bottom-0 right-0 w-96 h-96 bg-[#ff69b4] rounded-full mix-blend-multiply filter blur-2xl opacity-20",
    animation: moveAnimation([0, -100, 0], [0, -50, 0], 12),
  },
  {
    id: 3,
    className: "absolute top-1/3 left-0 w-80 h-80 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-2xl opacity-20",
    animation: moveAnimation([0, 50, 0], [0, -50, 0], 15),
  },
];

const BackgroundShapes = () => {
  return (
    <>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={shape.className}
          {...shape.animation}
          {...pulseAnimation} // Añade el pulso a cada forma
        ></motion.div>
      ))}
    </>
  );
};

export default BackgroundShapes;
