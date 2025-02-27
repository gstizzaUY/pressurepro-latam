'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, navVariants } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, translations }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
      flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className='absolute w-full h-full object-cover rounded-[24px]'
      />
      {active !== id ? (
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin[0,0]'>
          {translations[id]}
        </h3>
      ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
          <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'>
            <img
              src='/pp-white.png'
              alt='pressurepro-logo'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {translations[id]}
          </h2>
        </div>
      )}
    </motion.div>
  )
}

export default ExploreCard