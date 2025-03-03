'use client';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, navVariants } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, translations, marketInfo }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = (e) => {
    e.stopPropagation(); // Evita que el click se propague al div padre
    setShowInfo(!showInfo);
  };

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
        <div className='flex flex-col items-center absolute z-0 lg:bottom-20'>
          <h3 className='font-semibold sm:text-[26px] text-[18px] text-white lg:rotate-[-90deg] lg:origin[0,0]'>
            {translations[id]}
          </h3>
        </div>
      ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'>
              <img
                src='/pp-white.png'
                alt='pressurepro-logo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium glassmorphism"
              onClick={handleInfoClick}
            >
              {showInfo ? translations.closeInfo || 'Cerrar' : translations.showInfo || 'Info'}
            </motion.button>
          </div>
          
          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {translations[id]}
          </h2>
          
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden mt-4"
              >
                <motion.div 
                  className="p-4 rounded-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <p className="text-white">
                    {marketInfo && marketInfo[id] ? marketInfo[id] : 'Información no disponible para este mercado.'}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  )
}

export default ExploreCard