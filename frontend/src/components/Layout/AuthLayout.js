import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import ThemeToggle from '../UI/ThemeToggle';

const AuthLayout = () => {
  const { theme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-gray-50' : 'bg-dark-900'}`}>
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient bg-clip-text text-transparent">DYOR.net</div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`px-2 py-1 rounded text-sm ${
              language === 'en' 
                ? 'bg-primary-500 text-white' 
                : theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-dark-600'
            }`}
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('ar')} 
            className={`px-2 py-1 rounded text-sm ${
              language === 'ar' 
                ? 'bg-primary-500 text-white' 
                : theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-dark-600'
            }`}
          >
            العربية
          </button>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center py-12">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;