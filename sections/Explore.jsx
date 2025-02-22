'use client';
import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { worlds } from '../constants/data';
import { TitleText, TypingText } from '../components/CustomTexts';
import ExploreCard from '../components/ExploreCard';
import { LanguageContext } from '../context/LanguageContext';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const { translations } = useContext(LanguageContext);

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
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {worlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
              translations={translations.explore.industries}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore