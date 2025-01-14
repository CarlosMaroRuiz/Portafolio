
import HeaderSection from "../components/about/HeaderSection";
import PracticesSection from "../components/about/PracticesSection";
import AchievementsSection from "../components/about/AchievementsSection";
import BackgroundShapes from "../components/about/BackgroundShapes";

import TitleAnimation from "../shared/titleAnimation";
import { getDataImgHack1, getDataImgHack2 } from "../services/servicesImages";

const AboutMePage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 py-10 bg-custom-gradient relative overflow-hidden">
     
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
       <TitleAnimation title={"Logros"}/>
       <AchievementsSection images={getDataImgHack2()} title={"Primer lugar en el hackaton VaraNetwork en ITAM,CDMX"}  description={`Gané el 1er lugar en el MegaHackathon de Vara Network en el ITAM con Monogatari, una plataforma Web3 que revoluciona el manga mediante blockchain, contratos inteligentes y NFTs. Como Frontend Developer, diseñé una experiencia intuitiva que conecta creadores y lectores globalmente.`}/>
        <AchievementsSection images={getDataImgHack1()} title={"Tercer en lugar en el hackaton VaraNetwork en Chiapas"}  description={`Obtuve el tercer lugar en el Hackathon Chiapas, patrocinado por Vara Network, con un proyecto basado en blockchain. En el equipo, desempeñé el rol de Desarrollador Frontend`}/>



    
      </div>
    </main>
  );
};

export default AboutMePage;
