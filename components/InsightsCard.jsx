import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { LanguageContext } from '../context/LanguageContext';

const InsightsCard = ({ imgUrl, title, description, index, specs, specsUrl }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  // Bloquear el scroll cuando el modal está abierto
  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isImageOpen]);

  // Efecto para restablecer el estado de clic de la flecha después de un breve tiempo
  useEffect(() => {
    if (isArrowClicked) {
      const timer = setTimeout(() => {
        setIsArrowClicked(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isArrowClicked]);

  return (
    <>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        className='flex md:flex-row flex-col gap-4 mb-9'
      >
        <div 
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsImageOpen(true)}
        >
          <img
            src={imgUrl}
            alt='planet'
            className='md:w-[290px] w-full h-[270px] rounded-[32px] object-cover transition-all duration-300 hover:brightness-110'
          />
          <div 
            className={`absolute inset-0 flex items-center justify-center rounded-[32px] bg-black bg-opacity-40 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-70 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
            <h4 className='font-normal lg:text-[42px] text-[24px] text-white'>{title}</h4>
            <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white'>
              {description}
            </p>
            <a
              href={specsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-4 inline-block bg-white text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all text-sm text-center'
            >
              {specs}
            </a>
          </div>
          <div 
            className={`lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[2px] border-white cursor-pointer transition-all duration-300 ${
              isArrowHovered ? '' : ''
            } ${isArrowClicked ? 'scale-95' : ''}`}
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
            onClick={() => {
              setIsArrowClicked(true);
              window.open(specsUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            <motion.img
              animate={{
                x: isArrowHovered ? 5 : 0,
                transition: { duration: 0.3 }
              }}
              src='arrow.svg'
              alt='arrow'
              className='w-[40%] h-[40%] object-contain transition-all duration-300'
            />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isImageOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center'
              onClick={() => setIsImageOpen(false)}
            >
              <div className="relative inline-block">
                <motion.img
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  src={imgUrl}
                  alt='planet'
                  className='max-w-[90%] max-h-[90vh] object-contain rounded-[32px] border-4 border-white'
                />
                <button
                  className='absolute top-6 right-6 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all'
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImageOpen(false);
                  }}
                  style={{ transform: 'translate(-8px, 8px)' }}
                >
                  <span className='text-black text-xl'>&times;</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default InsightsCard