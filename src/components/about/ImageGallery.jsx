// src/components/about/ImageGallery.jsx

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, fadeInUp } from "../../animations/animationVariants"; // Verifica esta ruta
import { FiEye } from "react-icons/fi"; // Importa un icono opcional para mejorar la UI
import ImageModal from "./ImageModal";

const ImageGallery = ({images}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // 20% del componente debe estar visible para activar la animación
    triggerOnce: true, // La animación solo se ejecuta una vez
  });

  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // Tiempo entre la animación de cada tarjeta
              },
            },
          }}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(image)} // Maneja el clic en la imagen
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out"
                loading="lazy" // Carga diferida de imágenes para mejorar el rendimiento
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                variants={fadeIn}
              >
                <div className="flex flex-col items-center">
                  <FiEye className="text-white text-3xl mb-2" /> {/* Icono opcional */}
                  <p className="text-white text-center px-4">{image.descripcion}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Renderiza el modal si hay una imagen seleccionada */}
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default ImageGallery;
