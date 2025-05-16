import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from 'i18next';

// Create context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    // Check for stored language preference
    const storedLanguage = localStorage.getItem('dyor_language') || 'en';
    changeLanguage(storedLanguage);
  }, []);

  // Change language function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('dyor_language', lang);
  };

  // Context value
  const value = {
    language,
    direction,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language
export const useLanguage = () => {
  return useContext(LanguageContext);
};