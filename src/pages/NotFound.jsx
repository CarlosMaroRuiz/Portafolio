
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundShapes from "../components/about/BackgroundShapes"; 
import { fadeInUp } from "../animations/animationVariants"; 
import { Helmet } from "react-helmet"; 

const NotFoundPage = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>
      {/* Manejo de meta tags para SEO y accesibilidad */}
      <Helmet>
        <title>Página No Encontrada - Mi Sitio Web</title>
        <meta name="description" content="La página que buscas no existe. Regresa al inicio." />
      </Helmet>

      <main className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-10 bg-custom-gradient relative overflow-hidden">
        {/* Fondo de cuadrícula similar al de AboutMePage */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "75px 75px",
            pointerEvents: "none",
            zIndex: 0,
          }}
          aria-hidden="true" 
        ></div>

  
        <BackgroundShapes />

       
        <div className="relative z-10 w-full max-w-4xl text-center">
          <motion.div
            className="flex flex-col items-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-6xl font-bold text-white mb-4 focus:outline-none"
              tabIndex="-1"
              ref={headingRef}
            >
              404
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Oops! La página que estás buscando no existe.
            </p>
            <Link
              to="/"
              className="inline-block bg-primaryDarker text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Volver al Inicio"
            >
              Volver al Inicio
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
