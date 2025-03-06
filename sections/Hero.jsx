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

  // Estado para la animación tipo typewriter
  const [displayText, setDisplayText] = useState('');
  const fullText = 'HAUL 96 MODERATE\nLOW PRESSURE\n111PSI / 7.7 BAR';
  const [isBlinking, setIsBlinking] = useState(true);

  // Efecto para la animación de typing (más lento)
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 150); // velocidad de escritura más lenta (150ms)
      return () => clearTimeout(timeout);
    } else {
      // Parpadeo después de completar la escritura
      const blinkInterval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 800);
      return () => clearInterval(blinkInterval);
    }
  }, [displayText, fullText]);

  return (
    <section id='hero' className="w-full h-screen flex flex-col pt-[72px] sm:pt-[80px]">
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: false,
          amount: 0.25
        }}
        className='w-full flex-1 mx-auto flex flex-col'
      >
        <motion.div
          ref={ref}
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='relative w-full h-full overflow-hidden px-4 sm:px-6 md:px-8'
        >
          {/* Contenedor con bordes redondeados y overflow hidden */}
          <div className="w-full h-full overflow-hidden rounded-3xl py-2 sm:py-3 md:py-4">
            {/* Capa de imagen con efecto parallax y slider */}
            <motion.div
              style={{ y: imageY }}
              className="w-full h-full relative"
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
                  className='w-full h-full object-cover object-center z-0 absolute opacity-90 shadow-lg hover:opacity-100 transition-opacity rounded-2xl'
                />
              </AnimatePresence>

              {/* Contenedor para centrar la terminal correctamente */}
              <div className="absolute w-full flex justify-center top-[20%] md:top-[22%] lg:top-[18%] z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
                  }}
                  className="bg-black/20 backdrop-blur-sm p-3 lg:p-4 rounded-lg border border-gray-500 
                  w-[220px] md:w-[250px] lg:w-[280px] h-[130px] md:h-[140px] lg:h-[180px] 
                  shadow-xl overflow-hidden transform -translate-y-1/2"
                >
                  <div className="flex flex-col h-full justify-start">
                    {/* Barra de título de la terminal con ícono TPMS */}
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <div className="flex items-center">
                        <img
                          src='/tpms-icon.png'
                          alt='TPMS icon'
                          className='w-6 h-6 md:w-7 md:h-7 mr-2 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                        />
                        <span className="text-xs md:text-sm text-gray-300 font-semibold">TPMS_MONITOR_V1.2</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>

                    {/* Contenido de la terminal con efecto typewriter */}
                    <div className="flex-1 overflow-y-auto font-mono mt-0 md:mt-1">
                      <pre className="text-xs md:text-sm lg:text-base text-green-400 whitespace-pre-wrap font-bold">{displayText}</pre>
                      {isBlinking && (
                        <span
                          className="inline-block w-1.5 md:w-2 h-3.5 md:h-4 bg-green-400 ml-1 animate-pulse"
                          style={{
                            animationDuration: '0.5s',
                            opacity: isBlinking ? 1 : 0,
                          }}
                        ></span>
                      )}
                    </div>
                  </div>

                  {/* Efecto de escaneo */}
                  <motion.div
                    animate={{
                      top: ["0%", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "linear",
                    }}
                    className="absolute left-0 w-full h-[2px] bg-green-400/40"
                  />
                </motion.div>
              </div>

              {/* Indicadores de slider */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
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
            <div className='w-full flex justify-end pr-20 absolute bottom-4 z-[20]'>
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