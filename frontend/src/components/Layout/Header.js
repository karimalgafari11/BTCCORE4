import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <header className={`py-4 px-6 border-b ${theme === 'light' ? 'border-gray-200' : 'border-dark-600'}`}>
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder={t('searchCryptoMarkets')} 
            className={`pl-10 pr-4 py-2 rounded-lg w-full ${
              theme === 'light' 
                ? 'bg-gray-100 focus:bg-white' 
                : 'bg-dark-700 focus:bg-dark-600'
            } focus:outline-none`}
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-gray-500 hover:bg-dark-700">
            <BellIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;