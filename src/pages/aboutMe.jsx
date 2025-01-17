
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
       <TitleAnimation title={"Achievements"}/>
       <AchievementsSection 
  images={getDataImgHack2()} 
  title={"First Place at the Vara Network Hackathon at ITAM, Mexico City"} 
  description={`I won 1st place at the MegaHackathon by Vara Network at ITAM with Monogatari, a Web3 platform revolutionizing manga through blockchain, smart contracts, and NFTs. As a Frontend Developer.`} 
/>

<AchievementsSection 
  images={getDataImgHack1()} 
  title={"Third Place at the Vara Network Hackathon in Chiapas"} 
  description={`I achieved 3rd place at the Hackathon in Chiapas, sponsored by Vara Network, with a blockchain-based project. In the team, I served as the Frontend Developer.`} 
/>


    
      </div>
    </main>
  );
};

export default AboutMePage;
