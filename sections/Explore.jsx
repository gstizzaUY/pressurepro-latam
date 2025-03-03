'use client';
import React, { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { worlds } from '../constants/data';
import { TitleText, TypingText } from '../components/CustomTexts';
import ExploreCard from '../components/ExploreCard';
import { LanguageContext } from '../context/LanguageContext';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const { translations } = useContext(LanguageContext);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivos móviles
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // En móviles, mostrar la primera tarjeta por defecto
      if (mobile && worlds.length > 0) {
        setActive(worlds[0].id);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12' id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: false,
          amount: 0.25
        }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <TypingText title={`| ${translations.explore.title}`} textStyles='text-center'/>
        <TitleText 
          title={<>{translations.explore.subtitle} <br className='md:block hidden'/></>} 
          textStyles='text-center'
        />
        <div className={`mt-[50px] flex ${isMobile ? 'flex-col' : 'lg:flex-row flex-col'} min-h-[70vh] gap-5`}>
          {worlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={isMobile ? world.id : active} // En móviles, todas están activas
              handleClick={setActive}
              translations={{
                ...translations.explore.industries,
                showInfo: translations.explore.showInfo || '+ Info',
                closeInfo: translations.explore.closeInfo || 'Cerrar'
              }}
              marketInfo={translations.explore.marketInfo}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore