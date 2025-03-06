'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { scrollToSection } from '../utils/motion';


const Navbar = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  // Nuevo estado para controlar el menú desplegable de idiomas
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Efecto para medir la altura del navbar
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
      
      // Actualizar altura en resize
      const handleResize = () => {
        setNavHeight(navRef.current.offsetHeight);
      };
      
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cerrar el menú de idiomas cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageMenuOpen && !event.target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  // Secciones de la página para la navegación
  const sections = [
    { id: 'about', name: translations?.navbar?.about || 'Acerca de' },
    { id: 'explore', name: translations?.navbar?.explore || 'Mercados' },
    { id: 'getstarted', name: translations?.navbar?.getStarted || 'Comenzar' },
    { id: 'whatsnew', name: translations?.navbar?.whatsNew || 'Novedades' },
    { id: 'world', name: translations?.navbar?.world || 'Ubicaciones' },
    { id: 'insights', name: translations?.navbar?.insights || 'Insights' },
    { id: 'feedback', name: translations?.navbar?.feedback || 'Contacto' },
  ];

  // Variantes para las animaciones del menú
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Variantes para el menú de idiomas
  const languageMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const languageItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        className={`sm:px-16 px-6 py-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-primary-black/40 backdrop-blur-md shadow-lg' : ''}`}
      >
        <div className={`absolute w-[50%] inset-0 gradient-01 ${hasScrolled ? 'opacity-30' : 'opacity-100'}`} />
        <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8'>
          <div className='language-selector relative'>
            {/* Selector de idiomas mejorado */}
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="relative z-10 flex items-center space-x-1 group"
            >
              <div className={`${language === 'es' ? 'opacity-100' : 'opacity-80'} hover:opacity-100 transition-opacity`}>
                <img
                  src='/es.svg'
                  alt='Spanish'
                  className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain'
                />
              </div>
              
              {/* Indicador de despliegue mejorado */}
              <motion.div 
                className="flex items-center justify-center h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  rotate: isLanguageMenuOpen ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="8" 
                  height="5" 
                  viewBox="0 0 8 5" 
                  className="sm:w-[10px] sm:h-[6px]"
                  fill="none"
                >
                  <path 
                    d="M1 1L4 4L7 1" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>
            
            {/* Menú desplegable de idiomas */}
            <AnimatePresence>
              {isLanguageMenuOpen && (
                <motion.div
                  className="absolute left-0 top-full mt-2 bg-primary-black/80 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-lg"
                  variants={languageMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* Portugués */}
                  <motion.button
                    onClick={() => {
                      changeLanguage('pt');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`block w-full my-1.5 ${language === 'pt' ? 'opacity-100' : 'opacity-60'} hover:opacity-100 transition-opacity`}
                    variants={languageItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src='/br.svg'
                      alt='Portuguese'
                      className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain'
                    />
                  </motion.button>
                  
                  {/* Inglés */}
                  <motion.button
                    onClick={() => {
                      changeLanguage('en');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`block w-full my-1.5 ${language === 'en' ? 'opacity-100' : 'opacity-60'} hover:opacity-100 transition-opacity`}
                    variants={languageItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src='/us.svg'
                      alt='English'
                      className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain'
                    />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex items-center">
            <img
              src="/pressurepro-latam-logo.png"
              alt="Pressure Pro LATAM"
              className="h-[33px] sm:h-[45px] w-auto object-contain"
            />
          </div>
          <motion.div
            className="relative"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center"
            >
              <motion.img
                src='/menu.svg'
                alt='menu'
                className='w-[24px] h-[24px] object-contain'
                animate={{
                  rotate: isMenuOpen ? 90 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Menú desplegable separado del nav para evitar problemas de overflow y backdrop-filter */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed left-0 right-0 z-40"
            style={{ top: `calc(${navHeight}px + 0.5px)` }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Contenedor del menú con blur */}
            <div className="px-6 sm:px-16">
              <div 
                className="rounded-2xl overflow-hidden border border-gray-600/30 shadow-xl backdrop-blur-xl bg-primary-black/70 2xl:max-w-[1280px] w-full mx-auto"
                style={{
                  WebkitBackdropFilter: 'blur(16px)',
                  marginTop: '0px',
                }}
              >
                <div className="py-4 px-2">
                  {sections.map((section) => (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      variants={itemVariants}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section.id);
                        setIsMenuOpen(false);
                      }}
                      className="block py-3 px-4 text-white text-[16px] sm:text-[18px] hover:bg-white/10 rounded-lg transition-all duration-200 font-semibold"
                    >
                      {section.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;