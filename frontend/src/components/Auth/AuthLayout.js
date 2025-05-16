import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const AuthLayout = () => {
  const { t } = useTranslation();
  const { direction, language, changeLanguage } = useLanguage();
  
  return (
    <div className="min-h-screen bg-dark-800 flex flex-col" dir={direction}>
      <header className="w-full p-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient bg-clip-text text-transparent">DYOR.net</div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`px-2 py-1 rounded text-sm ${language === 'en' ? 'bg-primary-500' : 'bg-dark-700'}`}
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('ar')} 
            className={`px-2 py-1 rounded text-sm ${language === 'ar' ? 'bg-primary-500' : 'bg-dark-700'}`}
          >
            العربية
          </button>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full flex">
          <div className="w-1/2 pr-8 hidden md:block">
            <h1 className="text-4xl font-bold mb-6 bg-gradient bg-clip-text text-transparent">
              {t('appName')}
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Powerful cryptocurrency market scanner with over 4,000 trading pairs, automated strategy creation, and real-time alerts.
            </p>
            <div className="bg-dark-700 rounded-lg p-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Scan trends across multiple timeframes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Create custom trading strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Track specific coins with real-time alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Detect price action patterns automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Get instant notifications for pumping coins</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <Outlet />
          </div>
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DYOR.net - All rights reserved
      </footer>
    </div>
  );
};

export default AuthLayout;