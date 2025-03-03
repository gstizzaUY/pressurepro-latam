'use client';
import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);


  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='sm:px-16 px-6 py-8 fixed top-0 left-0 right-0 z-50'
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8'>
        <div className='flex gap-1 sm:gap-2'>
          <button
            onClick={() => changeLanguage('es')}
            className={`w-6 h-6 sm:w-8 sm:h-8 ${language === 'es' ? 'opacity-100' : 'opacity-60'}`}
          >
            <img
              src='/es.svg'
              alt='Spanish'
              className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain cursor-pointer hover:opacity-90'
            />
          </button>
          <button
            onClick={() => changeLanguage('pt')}
            className={`w-6 h-6 sm:w-8 sm:h-8 ${language === 'pt' ? 'opacity-100' : 'opacity-50'}`}
          >
            <img
              src='/br.svg'
              alt='Portuguese'
              className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain cursor-pointer hover:opacity-90'
            />
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-6 h-6 sm:w-8 sm:h-8 ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
          >
            <img
              src='/us.svg'
              alt='English'
              className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain cursor-pointer hover:opacity-90'
            />
          </button>
        </div>
        <h1 className='font-extrabold text-[18px] sm:text-[26px] leading-[30px] sm:leading-[40px] text-white truncate'>Pressure Pro LATAM</h1>
        <img
          src='/menu.svg'
          alt='menu'
          className='w-[24px] h-[24px] object-contain'
        />
      </div>
    </motion.nav>
  )
}

export default Navbar