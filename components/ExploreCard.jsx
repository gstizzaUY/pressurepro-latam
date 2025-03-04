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

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Variante de animación para los iconos con efecto escalonado
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.7,
        delay: 0.2 + i * 0.1,
      }
    })
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 1.2 }
      }}
      className={`relative my-4 md:my-6 lg:my-8
        ${isMobileView
          ? 'w-full flex-auto h-[320px] mb-8'
          : `${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} h-[350px] md:h-[450px] lg:h-[550px]`} 
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
            {translations.explore.industries[id]}
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
              {translations.explore.showInfo || '+ Info'}
            </motion.button>
          </div>

          <h2 className='mt-[12px] md:mt-[24px] font-semibold text-[18px] sm:text-[24px] md:text-[32px] text-white'>
            {translations.explore.industries[id]}
          </h2>

          {/* Información que se muestra por defecto */}
          <div className="mt-2 md:mt-4">
            <div className="p-2 md:p-4 rounded-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm">
              <p className="text-white text-xs md:text-base line-clamp-3 md:line-clamp-none">
                {marketInfo && marketInfo[id] ? marketInfo[id] : 'Información no disponible para este mercado.'}
              </p>
            </div>
          </div>

          {/* Modal optimizado con mejoras */}
          <AnimatePresence mode="wait">
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3 }
                }}
                className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pb-4"
                onClick={handleModalClick}
              >
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* Contenedor principal del modal con bordes redondeados */}
                <motion.div
                  className="relative bg-[#1A232E] rounded-[24px] border border-[#6A6A6A] w-full max-h-[85vh] overflow-hidden 
                  max-w-[95%] md:max-w-4xl lg:max-w-5xl glassmorphism z-10"
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
                  {/* Imagen destacada con título superpuesto - fuera del contenedor de scroll */}
                  <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={imgUrl}
                      alt={translations.explore.industries[id]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"></div>
                    
                    {/* Header superpuesto sobre la imagen */}
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[24px] glassmorphism flex items-center justify-center backdrop-blur-md">
                          <img src="/pp-white.png" alt="logo" className="w-1/2 h-1/2 object-contain" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{translations.explore.industries[id]}</h3>
                      </div>
                      <button
                        className="text-white p-2 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.2)] transition-colors glassmorphism"
                        onClick={handleModalClick}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Íconos de beneficios posicionados en la parte inferior de la imagen - AHORA MÁS GRANDES Y CON ANIMACIÓN */}
                    <div className="absolute bottom-0 left-0 right-0 py-4 md:py-5 px-4 md:px-6 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-transparent">
                      <div className="grid grid-cols-4 gap-1 md:gap-3">
                        {/* Iconos animados y más grandes en color blanco */}
                        <motion.div 
                          custom={0}
                          variants={iconVariants}
                          initial="hidden"
                          animate="show"
                          className="flex flex-col items-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full glassmorphism flex items-center justify-center mb-2 backdrop-blur-sm shadow-lg"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                          <span className="text-xs md:text-sm text-center text-white text-shadow font-medium">
                            {translations.explore.benefit1?.[id] || "Eficiencia"}
                          </span>
                        </motion.div>

                        <motion.div 
                          custom={1}
                          variants={iconVariants}
                          initial="hidden"
                          animate="show"
                          className="flex flex-col items-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full glassmorphism flex items-center justify-center mb-2 backdrop-blur-sm shadow-lg"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                          <span className="text-xs md:text-sm text-center text-white text-shadow font-medium">
                            {translations.explore.benefit2?.[id] || "Ahorro"}
                          </span>
                        </motion.div>

                        <motion.div 
                          custom={2}
                          variants={iconVariants}
                          initial="hidden"
                          animate="show"
                          className="flex flex-col items-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full glassmorphism flex items-center justify-center mb-2 backdrop-blur-sm shadow-lg"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                          <span className="text-xs md:text-sm text-center text-white text-shadow font-medium">
                            {translations.explore.benefit3?.[id] || "Seguridad"}
                          </span>
                        </motion.div>

                        <motion.div 
                          custom={3}
                          variants={iconVariants}
                          initial="hidden"
                          animate="show"
                          className="flex flex-col items-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full glassmorphism flex items-center justify-center mb-2 backdrop-blur-sm shadow-lg"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                          <span className="text-xs md:text-sm text-center text-white text-shadow font-medium">
                            {translations.explore.benefit4?.[id] || "Innovación"}
                          </span>
                        </motion.div>

                        {/* <motion.div 
                          custom={4}
                          variants={iconVariants}
                          initial="hidden"
                          animate="show"
                          className="flex flex-col items-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full glassmorphism flex items-center justify-center mb-2 backdrop-blur-sm shadow-lg"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                          </motion.div>
                          <span className="text-xs md:text-sm text-center text-white text-shadow font-medium">
                            {translations.explore.benefit5?.[id] || "Análisis"}
                          </span>
                        </motion.div> */}
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenedor de scroll para el contenido principal */}
                  <div 
                    className="overflow-y-auto modal-scrollbar max-h-[calc(85vh-17rem)]"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(138, 75, 175, 0.5) rgba(26, 35, 46, 0.1)'
                    }}
                  >
                    <div className="p-4 md:p-6 pt-6">
                      {/* Descripción detallada */}
                      <div className="prose prose-invert max-w-none mb-8">
                        <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">
                          {translations.explore.modalTitle?.[id] || `${translations.explore.industries[id]} - Soluciones`}
                        </h4>
                        <p className="text-gray-200 text-sm md:text-base mb-4">
                          {translations.explore.modalDescription?.[id] ||
                            `PressurePro ofrece soluciones avanzadas para el mercado ${translations.explore.industries[id]}, 
                            optimizando procesos, reduciendo costos y mejorando la eficiencia operativa.
                            Nuestros sistemas se adaptan a las necesidades específicas de este sector, 
                            proporcionando monitoreo en tiempo real y análisis precisos para una toma de 
                            decisiones más efectiva.`
                          }
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">
                          {translations.explore.modalAdditional?.[id] ||
                            `Implementamos tecnología de vanguardia específicamente diseñada para enfrentar 
                            los desafíos únicos del sector ${translations.explore.industries[id].toLowerCase()}, garantizando 
                            resultados óptimos y un retorno de inversión significativo.`
                          }
                        </p>
                      </div>

                      {/* Botón de acción mejorado */}
                      <div className="mt-8 mb-6 flex justify-center">
                        {/* <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium glassmorphism shadow-md"
                        >
                          {translations.footer?.contact || "Contactar ahora"}
                        </motion.button> */}
                      </div>
                    </div>
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