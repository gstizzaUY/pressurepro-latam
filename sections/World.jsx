'use client';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import { LanguageContext } from '../context/LanguageContext';

const World = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section id='world' className='sm:p-16 xs:p-8 px-6 py-8 relative z-10'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: false,
          amount: 0.25
        }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        {/* Título siempre arriba */}
        <TypingText title={`| ${translations.world.typingTex}`} textStyles='text-center'/>     
        <TitleText 
          title={
          <>
            {translations.world.title}
          </>
          }
          textStyles='text-center' 
        />

        {/* Imagen que se muestra después del título */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='relative mt-[68px] w-full h-0 pb-[56.25%] order-2 md:order-3' // Cambiado el orden para móviles
        >
          <div className='absolute top-0 left-0 w-full h-full'>
            <img
              src='/map.png'
              alt='map'
              className='w-full h-full object-contain'
            />
            {/* Personas superpuestas con posiciones relativas */}
            <div className='absolute bottom-[10%] right-[10%] w-[8vw] h-[8vw] sm:w-[10vw] sm:h-[10vw] min-w-[30px] min-h-[30px] sm:min-w-[40px] sm:min-h-[40px] max-w-[70px] max-h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
              <img src='people-01.png' alt='people' className='w-full h-full' />
            </div>
            <div className='absolute top-[20%] left-[20%] w-[8vw] h-[8vw] sm:w-[10vw] sm:h-[10vw] min-w-[30px] min-h-[30px] sm:min-w-[40px] sm:min-h-[40px] max-w-[70px] max-h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
              <img src='people-01.png' alt='people' className='w-full h-full' />
            </div>
            <div className='absolute top-[30%] left-[40%] w-[8vw] h-[8vw] sm:w-[10vw] sm:h-[10vw] min-w-[30px] min-h-[30px] sm:min-w-[40px] sm:min-h-[40px] max-w-[70px] max-h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
              <img src='people-01.png' alt='people' className='w-full h-full' />
            </div>
            <div className='absolute bottom-[20%] left-[10%] w-[20vw] h-[10vw] sm:w-[25vw] sm:h-[12vw] min-w-[120px] min-h-[50px] sm:min-w-[150px] sm:min-h-[70px] max-w-[230px] max-h-[100px] p-[8px] sm:p-[10px]'>
              <img src='people-02.png' alt='people' className='w-full h-full object-contain' />
            </div>
          </div>
        </motion.div>

        {/* Descripción debajo en móviles */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className='mt-8 order-3 md:order-2'
        >
          <p className='text-center text-secondary-white text-[16px] sm:text-[20px]'>
            {translations.world.description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World