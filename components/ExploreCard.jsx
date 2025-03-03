'use client';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, navVariants } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, translations, marketInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = (e) => {
    e.stopPropagation(); // Evita que el click se propague al div padre
    setShowModal(!showModal);
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
              onClick={handleModalClick}
            >
              {translations.showInfo || '+ Info'}
            </motion.button>
          </div>
          
          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {translations[id]}
          </h2>
          
          {/* Información que ahora se muestra por defecto */}
          <div className="mt-4">
            <div className="p-4 rounded-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
              <p className="text-white">
                {marketInfo && marketInfo[id] ? marketInfo[id] : 'Información no disponible para este mercado.'}
              </p>
            </div>
          </div>
          
          {/* Modal que aparecerá al hacer clic en el botón */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={handleModalClick}
              >
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.div
                  className="relative bg-[#1A232E] p-6 rounded-2xl border border-[#6A6A6A] max-w-lg w-full glassmorphism z-10"
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 20, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{translations[id]}</h3>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={handleModalClick}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-200">
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