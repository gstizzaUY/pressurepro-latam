'use client';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { translations } = useContext(LanguageContext);
  
  return (
    <section id='about' className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
      <div className='gradient-02 z-0'/>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: false,
          amount: 0.25
        }}
        className='2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col'
      >
        <TypingText title={`| ${translations.about.title}`} textStyles='text-center'/>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
        >
          <span className='font-extrabold text-white'>{translations.about.companyName} </span>
          {translations.about.text}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;