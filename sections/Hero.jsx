'use client';
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
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
          className='relative w-full md:-mt-[20px] -mt-[30px] overflow-hidden'
        >
          {/* Capa de imagen con efecto parallax */}
          <motion.div
            style={{ y: imageY }}
            className="w-full h-full"
          >
            <img
              src='/semi-camion.jpg'
              alt='futuristic_mining_truck_yellow.png'
              className='w-full h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover z-0 relative opacity-90 shadow-lg hover:opacity-100 transition-opacity'
            />
          </motion.div>
          
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
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[20px] pr-[40px] relative z-[20]'>
              <img
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[90px] w-[60px] sm:h-[155px] h-[80px] object-contain'
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero