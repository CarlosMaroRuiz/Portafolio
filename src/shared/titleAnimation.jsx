import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "../animations/animationVariants";
import { useEffect } from "react";

const TitleAnimation = ({ title }) => {  // Corregido "tittle" a "title"
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    
    return (  // Agregado paréntesis
        <motion.h3
            ref={ref}  // Agregado ref
            className="text-3xl font-semibold mt-10 text-white text-center  w-full"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {title}
        </motion.h3>
    );
};

export default TitleAnimation;