import { createContext, useState, useEffect } from 'react';
import es from '../locales/es/translations';
import en from '../locales/en/translations';
import pt from '../locales/pt/translations';
import { features } from '../constants/data';

export const LanguageContext = createContext();

const translations = { es, en, pt };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage,
      translations: { ...translations[language], features }
    }}>
      {children}
    </LanguageContext.Provider>
  );
};