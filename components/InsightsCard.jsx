import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { LanguageContext } from '../context/LanguageContext';

const InsightsCard = ({ imgUrl, title, description, index, specs, specsUrl }) => {
  const { translations } = useContext(LanguageContext);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Calcular la altura del navbar al montar el componente
  useEffect(() => {
    // Buscamos el elemento navbar
    const navbarElement = document.querySelector('nav');
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }

    // Actualizar en resize
    const handleResize = () => {
      if (navbarElement) {
        setNavbarHeight(navbarElement.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquear el scroll cuando el modal está abierto
  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isImageOpen]);

  // Restablecer el estado de clic de la flecha
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
      {/* Card principal */}
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        className='flex md:flex-row flex-col gap-4 mb-9'
      >
        {/* Imagen con hover effect */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsImageOpen(true)}
        >
          <img
            src={imgUrl}
            alt='product'
            className='md:w-[290px] w-full h-[270px] rounded-[32px] object-cover transition-all duration-300 hover:brightness-110'
          />
          <div
            className={`absolute inset-0 flex items-center justify-center rounded-[32px] bg-black bg-opacity-40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
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

        {/* Contenido de texto y botón */}
        <div className='w-full flex flex-col md:flex-row justify-between md:items-center md:gap-6 mt-4 md:mt-0'>
          {/* Texto descriptivo */}
          <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
            <h4 className='font-normal lg:text-[42px] text-[26px] text-white leading-tight'>
              {title}
            </h4>
            <p className='mt-[16px] font-normal lg:text-[20px] text-[16px] text-secondary-white leading-relaxed tracking-wide opacity-90'>
              {description}
            </p>

            {/* Botón de descarga móvil - Solo visible en móviles */}
            <div className="flex flex-row items-center justify-center mt-8 md:hidden">
              <div
                className={`flex items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[2px] border-white cursor-pointer transition-all duration-300 ${isArrowClicked ? 'scale-95' : ''
                  }`}
                onMouseEnter={() => setIsArrowHovered(true)}
                onMouseLeave={() => setIsArrowHovered(false)}
                onClick={() => {
                  setIsArrowClicked(true);
                  window.open(specsUrl, '_blank', 'noopener,noreferrer');
                }}
                title="Descargar especificaciones"
              >
                {/* Ícono de descarga */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40%] h-[40%]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                  animate={{
                    y: isArrowHovered ? 2 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </motion.svg>
              </div>
              <p className="ml-4 text-white text-sm font-light tracking-wide opacity-80 hover:opacity-100 transition-opacity">
                {translations.insights?.downloadSpecs || "Descargar especificaciones"}
              </p>
            </div>
          </div>

          {/* Botón de descarga desktop - Solo visible en desktop */}
          <div className="hidden md:flex md:flex-col items-center justify-center">
            <div
              className={`flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[2px] border-white cursor-pointer transition-all duration-300 ${isArrowClicked ? 'scale-95' : ''
                }`}
              onMouseEnter={() => setIsArrowHovered(true)}
              onMouseLeave={() => setIsArrowHovered(false)}
              onClick={() => {
                setIsArrowClicked(true);
                window.open(specsUrl, '_blank', 'noopener,noreferrer');
              }}
              title="Descargar especificaciones"
            >
              {/* Ícono de descarga */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40%] h-[40%]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
                animate={{
                  y: isArrowHovered ? 2 : 0,
                  transition: { duration: 0.3 }
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </motion.svg>
            </div>
            <p className="mt-2 text-white text-xs font-light text-opacity-70 hover:text-opacity-100 transition-opacity text-center">
              {translations.insights?.downloadSpecs || "Descargar especificaciones"}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Modal de imagen */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed left-0 right-0 z-[9999] bg-black/90 flex items-center justify-center'
            style={{
              top: `${navbarHeight}px`,
              bottom: 0,
              height: `calc(100vh - ${navbarHeight}px)`
            }}
            onClick={() => setIsImageOpen(false)}
          >
            {/* Contenedor de la imagen */}
            <div className="w-full max-w-4xl px-4 relative">
              <div className="w-full flex items-center justify-center">
                {/* Imagen */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="relative"
                >
                  <img
                    src={imgUrl}
                    alt='product'
                    className='max-w-full max-h-[calc(100vh-${navbarHeight*2}px)] object-contain rounded-[32px] border-4 border-white'
                    style={{ maxHeight: `calc(100vh - ${navbarHeight * 2}px)` }}
                  />

                  {/* ... resto del código del botón de cierre ... */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InsightsCard;