'use client';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { socials } from '../constants/data';
import { footerVariants } from '../utils/motion';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className='sm:p-16 xs:p-8 px-6 py-12 relative'
    >
      <div className='footer-gradient' />
      <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold mb:text-[64px] text-[44px] text-white'>
            PressurePro LATAM
          </h4>
          <a
            href="http://api.whatsapp.com/send?phone=59898596735"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25d366] rounded-[32px] gap-[12px]'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className='w-[24px] h-[24px] fill-white'
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className='font-normal text-[16px] text-white'>
                {translations.footer.contact}
              </span>
            </button>
          </a>
        </div>
        <div className='flex flex-col'>
          <div className='mb-[50px] h-[2px] bg-white opacity-10' />
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <h4 className='font-normal text-[18px] text-white opacity-70'>
              info@pressurepro-latam.com
            </h4>
            <p className='font-normal text-[18px] text-white opacity-70'>
              Av. Dr. Enrique Pouey 830, 90200 - Las Piedras , Canelones, Uruguay
            </p>
            <div className='flex gap-4'>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.name}`}
                >
                  <img
                    src={social.url}
                    alt={social.name}
                    className='w-[24px] h-[24px] object-contain cursor-pointer'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
