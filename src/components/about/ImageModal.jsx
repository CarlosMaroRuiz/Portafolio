// src/components/about/ImageModal.jsx

import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi"; 

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1 },
};

const ImageModal = ({ selectedImage, setSelectedImage }) => {
  if (!selectedImage) return null;

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={handleClose} // Cierra el modal al hacer clic en el fondo
    >
      <motion.div
        className="relative max-w-3xl w-full mx-4"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
          onClick={handleClose}
          aria-label="Cerrar"
        >
          <FiX />
        </button>
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-auto rounded-lg"
        />
        {selectedImage.descripcion && (
          <p className="mt-4 text-center text-white">{selectedImage.descripcion}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
