'use client';
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, translations, marketInfo, isMobileView }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = (e) => {
    e.stopPropagation(); // Evita que el click se propague al div padre
    setShowModal(!showModal);
  };
  
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} // Ajuste: visible cuando 25% está en viewport
      transition={{ duration: 0.5 }} // Base de transición
      exit={{ 
        opacity: 0,
        transition: { duration: 1.2 } // Retraso en la salida más largo
      }}
      className={`relative 
        ${isMobileView 
          ? 'w-full flex-auto h-[400px] mb-8' 
          : `${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} h-[400px] md:h-[500px] lg:h-[700px]`} 
        flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer
        ${isMobileView ? '' : 'hover:opacity-90'}`}
      onClick={() => !isMobileView && handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className='absolute w-full h-full object-cover rounded-[24px]'
      />
      
      {(!isMobileView && active !== id) ? (
        <div className='flex flex-col items-center absolute z-0 lg:bottom-20 bottom-10'>
          <h3 className='font-semibold sm:text-[26px] text-[18px] text-white lg:rotate-[-90deg] lg:origin-[0,0] text-center'>
            {translations[id]}
          </h3>
        </div>
      ) : (
        <div className='absolute bottom-0 p-4 md:p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[24px] glassmorphism mb-[16px]'>
              <img
                src='/pp-white.png'
                alt='pressurepro-logo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm md:text-base font-medium glassmorphism"
              onClick={handleModalClick}
            >
              {translations.showInfo || '+ Info'}
            </motion.button>
          </div>
          
          <h2 className='mt-[12px] md:mt-[24px] font-semibold text-[18px] sm:text-[24px] md:text-[32px] text-white'>
            {translations[id]}
          </h2>
          
          {/* Información que se muestra por defecto */}
          <div className="mt-2 md:mt-4">
            <div className="p-2 md:p-4 rounded-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
              <p className="text-white text-xs md:text-base line-clamp-3 md:line-clamp-none">
                {marketInfo && marketInfo[id] ? marketInfo[id] : 'Información no disponible para este mercado.'}
              </p>
            </div>
          </div>
          
          {/* Modal optimizado */}
          <AnimatePresence mode="wait" exitBeforeEnter>
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ 
                  opacity: 0,
                  transition: { duration: 0.3 } 
                }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={handleModalClick}
              >
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  className="relative bg-[#1A232E] p-4 md:p-6 rounded-2xl border border-[#6A6A6A] w-full max-h-[80vh] overflow-y-auto max-w-[90%] md:max-w-lg glassmorphism z-10"
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ 
                    scale: 0.95, 
                    y: 10, 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ type: "spring", bounce: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{translations[id]}</h3>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={handleModalClick}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-200 text-sm md:text-base">
                      {/* Aquí irá el contenido extendido del modal */}
                      Este es el contenido del modal para {translations[id]}. 
                      Aquí se puede colocar información más detallada, imágenes, videos o cualquier otro contenido relevante.
                    </p>
                  </div>
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