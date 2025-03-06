'use client';
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Hero = () => {
  const { translations } = useContext(LanguageContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Configuración del slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/truck.jpg', '/port-truck.jpg', '/miner-truck.jpg'];
  
  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Transformamos el valor del scroll para crear el efecto parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  // También aplicamos el mismo efecto al texto
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id='hero' className="w-full overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: false,
          amount: 0.25
        }}
        className='w-full mx-auto flex flex-col'
      >
        <motion.div
          ref={ref}
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='relative w-full md:-mt-[10px] -mt-[20px] pt-1 overflow-hidden px-4 sm:px-6 md:px-8'
        >
          {/* Contenedor con bordes redondeados y overflow hidden */}
          <div className="w-full h-full mt-4 overflow-hidden rounded-3xl">
            {/* Capa de imagen con efecto parallax y slider */}
            <motion.div
              style={{ y: imageY }}
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] relative"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt='mining_truck'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className='w-full h-full object-cover object-center z-0 absolute opacity-90 shadow-lg hover:opacity-100 transition-opacity'
                />
              </AnimatePresence>
              
              {/* Indicadores de slider */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Capa de texto que se desplaza junto con la imagen */}
          <motion.div 
            style={{ y: textY }}
            className="absolute inset-0 flex flex-col justify-center items-center z-10"
          >
            <motion.h1
              variants={textVariant(1.1)}
              className='font-bold lg:text-[120px] md:text-[100px] sm:text-[60px] text-[36px] lg:leading-[158.4px] md:leading-[114.4px] 
              sm:leading-[74.4px] leading-[64.4px] text-white text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'
            >
              {translations.hero.title}
            </motion.h1>
            
            <motion.div
              variants={textVariant(1.2)}
              className='font-bold lg:text-[50px] md:text-[30px] sm:text-[20px] text-[20px] lg:leading-[60px] md:leading-[40px] 
              sm:leading-[30px] leading-[20px] text-white text-center px-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'
            >
              {translations.hero.subtitle}
            </motion.div>
          </motion.div>

          {/* Sello que se mantiene fijo en su posición */}
          <a href='#explore'>
            <div className='w-full flex justify-center sm:-mt-[140px] -mt-[80px] relative z-[20]'>
              <img
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[85px] w-[55px] sm:h-[145px] h-[75px] object-contain'
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero