import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-custom-gradient bg-opacity-90 text-white flex justify-between items-center px-6 sm:px-12 md:px-24 py-4 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl font-bold font-sans drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Carlos Dev
      </motion.h1>

      {/* Menu de hamburguesa */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Enlaces de navegación (ocultos en dispositivos moviles) */}
      <section
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row items-center gap-y-4 md:gap-y-0 md:gap-x-6 md:flex`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About me", path: "/about" },
          { name: "Technical skills", path: "/skills" },
          { name: "Historical projects", path: "/projects" },
        ].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className="text-lg sm:text-base md:text-lg hover:text-opacity-80 transition duration-300 drop-shadow-lg"
              onClick={() => setIsOpen(false)} // Cierra el menu al hacer clic en un enlace
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </section>
    </motion.nav>
  );
};

export default Nav;
