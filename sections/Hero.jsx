'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Hero = () => {
  const { translations } = useContext(LanguageContext);


  return (
    <section className='sm:py-8 xs:py-6 py-6 sm:pl-16 pl-6'>
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
        <div className='flex justify-center items-center flex-col relative z-10'>
          <motion.h1
            variants={textVariant(1.1)}
            className='font-bold lg:text-[120px] md:text-[100px] sm:text-[60px] text-[36px] lg:leading-[158.4px] md:leading-[114.4px] 
            sm:leading-[74.4px] leading-[64.4px]  text-white pr-6'
          >
            {translations.hero.title}
          </motion.h1>
        </div>
        <div className='flex justify-center items-center flex-col relative z-10'>
          <motion.subtitle
            variants={textVariant(1.2)}
            className='font-bold lg:text-[50px] md:text-[30px] sm:text-[20px] text-[20px] lg:leading-[60px] md:leading-[40px] 
            sm:leading-[30px] leading-[20px] text-red-500 text-center p-6'
          >
            {translations.hero.subtitle}
          </motion.subtitle>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='relative w-full md:-mt-[20px] -mt-[30px]' // Más cerca del título en móviles
        >
          <div className='absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]' />
          <img
            src='/cover.png'
            alt='cover'
            className='w-full sm:h-[1024px] h-[400px] object-contain md:object-cover rounded-tl-[140px] z-10 relative sm:p-9 p-4' // Altura y padding reducidos en móviles
          />
          <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[20px] pr-[40px] relative z-[10]'> {/* Stamp más cerca de la imagen en móviles */}
              <img
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[155px] w-[80px] sm:h-[155px] h-[80px] object-contain' // Stamp más pequeño en móviles
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
