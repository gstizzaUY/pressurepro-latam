'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { scrollToSection } from '../utils/motion';

/**
 * Componente de navegación principal de la aplicación
 * Incluye selector de idiomas y menú desplegable de secciones
 */
const Navbar = () => {
  // ----- CONTEXTOS Y ESTADOS -----
  const { language, changeLanguage, translations } = useContext(LanguageContext);
  
  // Estados para controlar la UI
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  
  // Referencias
  const navRef = useRef(null);
  
  // ----- CONSTANTES Y CONFIGURACIÓN -----
  // Altura fija de la navbar en píxeles
  const FIXED_NAV_HEIGHT = 95;
  // Altura adaptada para móviles (elimina el espacio no deseado)
  const MOBILE_NAV_HEIGHT = 77; // Ajustado para eliminar el gap de 18px
  
  // Mapeo de idiomas a imágenes de banderas
  const FLAG_IMAGES = {
    es: '/es.svg',
    en: '/us.svg',
    pt: '/br.svg'
  };
  
  // Secciones del sitio para navegación
  const sections = [
    { id: 'about', name: translations?.navbar?.about || 'Acerca de' },
    { id: 'explore', name: translations?.navbar?.explore || 'Mercados' },
    { id: 'getstarted', name: translations?.navbar?.getStarted || 'Comenzar' },
    { id: 'whatsnew', name: translations?.navbar?.whatsNew || 'Novedades' },
    { id: 'world', name: translations?.navbar?.world || 'Ubicaciones' },
    { id: 'insights', name: translations?.navbar?.insights || 'Insights' },
    { id: 'feedback', name: translations?.navbar?.feedback || 'Contacto' },
  ];

  // ----- EFECTOS Y EVENTOS -----
  // Efecto para establecer altura fija de la navbar
  useEffect(() => {
    setNavHeight(FIXED_NAV_HEIGHT);
    
    const handleResize = () => {
      setNavHeight(FIXED_NAV_HEIGHT);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para detectar el scroll y aplicar estilos
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para cerrar el menú de idiomas al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageMenuOpen && !event.target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageMenuOpen]);

  // ----- ANIMACIONES Y VARIANTES -----
  // Variantes para animaciones del menú principal
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

  // Variantes para los elementos del menú
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

  // ----- MANEJADORES DE EVENTOS -----
  /**
   * Maneja la selección de idioma
   * @param {string} selectedLanguage - Código del idioma seleccionado
   */
  const handleLanguageChange = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setIsLanguageMenuOpen(false);
  };

  /**
   * Maneja la navegación entre secciones
   * @param {string} sectionId - ID de la sección a la que navegar
   */
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  // ----- COMPONENTES INTERNOS -----
  /**
   * Componente para el selector de idiomas
   */
  const LanguageSelector = () => (
    <div className="language-selector relative">
      <button
        onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        className="relative z-10 flex items-center space-x-1 group"
      >
        <div className="hover:opacity-100 transition-opacity">
          <img
            src={FLAG_IMAGES[language]}
            alt={`${language === 'es' ? 'Spanish' : language === 'en' ? 'English' : 'Portuguese'}`}
            className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain'
          />
        </div>
        
        <motion.div 
          className="flex items-center justify-center h-4 opacity-70 group-hover:opacity-100 transition-opacity"
          animate={{ rotate: isLanguageMenuOpen ? 180 : 0 }}
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
      
      <AnimatePresence>
        {isLanguageMenuOpen && (
          <motion.div
            className="absolute left-0 top-full mt-2 bg-primary-black/80 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-lg"
            variants={languageMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {Object.entries(FLAG_IMAGES).map(([langCode, flagPath]) => (
              <motion.button
                key={langCode}
                onClick={() => handleLanguageChange(langCode)}
                className={`block w-full my-1.5 ${language === langCode ? 'opacity-100' : 'opacity-60'} hover:opacity-100 transition-opacity`}
                variants={languageItemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={flagPath}
                  alt={langCode === 'es' ? 'Spanish' : langCode === 'en' ? 'English' : 'Portuguese'}
                  className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain'
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  /**
   * Componente para el menú de navegación
   */
  const NavigationMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          className="fixed left-0 right-0 z-40"
          // Uso valores diferentes según el tamaño de pantalla
          style={{ 
            top: window.innerWidth < 640 ? `${MOBILE_NAV_HEIGHT}px` : `${FIXED_NAV_HEIGHT}px` 
          }}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="px-2 sm:px-8">
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
                    onClick={(e) => handleNavigation(e, section.id)}
                    className="block py-2 px-4 text-white text-[16px] sm:text-[18px] hover:bg-white/10 rounded-lg transition-all duration-200 font-semibold"
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
  );

  // ----- RENDERIZADO PRINCIPAL -----
  return (
    <>
      {/* Barra de navegación principal */}
      <motion.nav
        ref={navRef}
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        style={{
          height: `${FIXED_NAV_HEIGHT}px`,
          display: "flex",
          alignItems: "center"
        }}
        className={`sm:px-16 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-primary-black/40 backdrop-blur-md shadow-lg' : ''}`}
      >
        {/* Gradiente de fondo */}
        <div className={`absolute w-[50%] inset-0 gradient-01 ${hasScrolled ? 'opacity-30' : 'opacity-100'}`} />
        
        {/* Contenido de la barra de navegación */}
        <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between items-center gap-8'>
          {/* Selector de idioma */}
          <LanguageSelector />
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/pressurepro-latam-logo.png"
              alt="Pressure Pro LATAM"
              className="h-[33px] sm:h-[45px] w-auto object-contain"
            />
          </div>
          
          {/* Botón de menú */}
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

      {/* Menú desplegable de navegación */}
      <NavigationMenu />
    </>
  );
};

export default Navbar;