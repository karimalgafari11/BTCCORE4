import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BellIcon } from '@heroicons/react/24/outline';
import { marketOverview } from '../../mockData';
import ThemeToggle from '../UI/ThemeToggle';

const Header = () => {
  const { t } = useTranslation();
  const { currentUser, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={`${theme === 'light' ? 'bg-white border-gray-200' : 'bg-dark-800 border-dark-600'} border-b py-3 px-6 flex items-center justify-between sticky top-0 z-10`}>
      <div className="flex items-center">
        <div className={`px-4 py-1 rounded-full flex items-center ${
          marketOverview.status === 'bullish' ? 'bg-green-500 bg-opacity-20 text-green-500' : 
          marketOverview.status === 'bearish' ? 'bg-red-500 bg-opacity-20 text-red-500' : 
          'bg-yellow-500 bg-opacity-20 text-yellow-500'
        }`}>
          <span className="mr-2">•</span>
          <span className="text-sm font-medium capitalize">{marketOverview.status}</span>
        </div>
        
        <div className="ml-4 flex space-x-4 text-sm text-gray-400">
          <div>BTC: <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>${Math.floor(Math.random() * 10000) + 60000}</span></div>
          <div>ETH: <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>${Math.floor(Math.random() * 1000) + 3000}</span></div>
          <div>24h Vol: <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>{marketOverview.dailyVolume}</span></div>
        </div>
      </div>
      
      <div className="flex items-center">
        <ThemeToggle className="mr-4" />
        
        {currentUser ? (
          <>
            <button className="text-gray-400 hover:text-gray-200 mr-4 relative">
              <BellIcon className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
            </button>
            
            <div className="relative group">
              <button className={`flex items-center ${
                theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}>
                <span className="mr-2">{currentUser.name}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              <div className={`absolute right-0 mt-2 w-48 ${
                theme === 'light' ? 'bg-white' : 'bg-dark-700'
              } rounded-lg shadow-lg border ${
                theme === 'light' ? 'border-gray-200' : 'border-dark-600'
              } invisible group-hover:visible`}>
                <div className="py-1">
                  <a href="/my-account" className={`block px-4 py-2 text-sm ${
                    theme === 'light' ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 hover:bg-dark-600'
                  }`}>
                    {t('myAccount')}
                  </a>
                  <button 
                    onClick={handleLogout}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      theme === 'light' ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 hover:bg-dark-600'
                    }`}
                  >
                    {t('logout')}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="space-x-2">
            <button 
              onClick={() => navigate('/login')}
              className={`px-4 py-1.5 text-sm ${
                theme === 'light' ? 'border border-gray-300 hover:bg-gray-100 text-gray-700' : 'border border-dark-600 hover:bg-dark-700'
              } rounded-lg`}
            >
              {t('login')}
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="px-4 py-1.5 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              {t('signup')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;