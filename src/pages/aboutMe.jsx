// src/pages/AboutMePage.jsx

import React from "react";
import HeaderSection from "../components/about/HeaderSection";
import PracticesSection from "../components/about/PracticesSection";
import AchievementsSection from "../components/about/AchievementsSection";
import ImageGallery from "../components/about/ImageGallery"; // Importación añadida
import BackgroundShapes from "../components/about/BackgroundShapes";

const AboutMePage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 py-10 bg-custom-gradient relative overflow-hidden">
      {/* Fondo de cuadrícula */}
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
      ></div>

     
      <BackgroundShapes />

      {/* Contenedor Principal */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Sección de Encabezado */}
        <HeaderSection />

        {/* Sección de Prácticas Profesionales */}
        <PracticesSection />

        {/* Sección de Logros */}
        <AchievementsSection />

    
      </div>
    </main>
  );
};

export default AboutMePage;
