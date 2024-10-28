import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import i1 from "../../public/img/introduction/I1.webp";

const IntroductionPage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "I'm a web developer who loves exploring Python libraries to create efficient, scalable solutions.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (fullText[index] || ""));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 py-10 bg-custom-gradient relative">
      {/* Fondo de cuadrícula con cuadros grandes */}
      <div className="absolute inset-0 bg-black bg-opacity-50" style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '150px 150px', // Tamaño aumentado para cuadros aún más grandes
        pointerEvents: 'none', // Evita la interacción con el fondo
        zIndex: 0, // Envía el fondo detrás del contenido principal
      }}></div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-4xl lg:max-w-5xl mx-auto relative z-10">
        
        <motion.article
          className="space-y-4 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm sm:text-base font-semibold text-[#8e69ff]">Developer</h2>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            I am a <span className="text-[#8e69ff]">Web Developer</span> and Python lover
          </motion.h1>

          <motion.div
            className="w-1/4 h-1 bg-[#8e69ff] mt-2"
            initial={{ width: 0 }}
            animate={{ width: "25%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>

          <motion.p 
            className="text-gray-300 max-w-md leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {displayedText}
          </motion.p>
        </motion.article>

        <motion.article
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <motion.img 
              src={i1} 
              alt="Creative Designer" 
              className="w-full rounded-2xl shadow-xl" 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 sm:border-4 border-[#8e69ff] transform scale-105 opacity-50 blur-lg"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.article>
      </section>
    </main>
  );
};

export default IntroductionPage;
