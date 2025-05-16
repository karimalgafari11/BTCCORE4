import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../UI/ThemeToggle';

// Import icons
import { 
  ChartBarIcon, 
  Cog6ToothIcon, 
  ViewColumnsIcon, 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  SparklesIcon,
  UserIcon,
  ChartPieIcon,
  WrenchIcon,
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  Square3Stack3DIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const { currentUser } = useAuth();
  const { theme } = useTheme();

  const menuItems = [
    { 
      name: t('dashboard'), 
      path: '/dashboard', 
      icon: ChartBarIcon 
    },
    { 
      name: t('customizableDashboard'), 
      path: '/customizable-dashboard', 
      icon: ViewColumnsIcon 
    },
    { 
      name: t('trendScanner'), 
      path: '/trend-scanner', 
      icon: ArrowTrendingUpIcon 
    },
    { 
      name: t('strategyMaker'), 
      path: '/strategy-maker', 
      icon: Cog6ToothIcon 
    },
    { 
      name: t('cointracker'), 
      path: '/cointracker', 
      icon: CurrencyDollarIcon 
    },
    { 
      name: t('priceActionScanner'), 
      path: '/price-action-scanner', 
      icon: ViewColumnsIcon 
    },
    { 
      name: t('pumpingNow'), 
      path: '/pumping-now', 
      icon: SparklesIcon,
      premium: true 
    },
    {
      name: t('chart'),
      path: '/chart',
      icon: ChartBarSquareIcon
    },
    {
      name: t('patterns'),
      path: '/patterns',
      icon: ChartPieIcon
    },
    {
      name: t('trendlines'),
      path: '/trendlines',
      icon: ArrowPathIcon
    },
    {
      name: t('divergences'),
      path: '/divergences',
      icon: ArrowsRightLeftIcon
    },
    {
      name: t('keyLevels'),
      path: '/key-levels',
      icon: Square3Stack3DIcon
    },
    {
      name: t('volumeAnalysis'),
      path: '/volume',
      icon: WrenchIcon
    },
    { 
      name: t('myAccount'), 
      path: '/my-account', 
      icon: UserIcon 
    },
  ];

  return (
    <div className={`h-screen fixed w-64 ${
      theme === 'light' ? 'bg-white' : 'bg-dark-800'
    } border-r ${
      theme === 'light' ? 'border-gray-200' : 'border-dark-600'
    } flex flex-col`}>
      <div className="p-4">
        <Link to="/dashboard" className="flex items-center justify-center mb-8">
          <span className="text-2xl font-bold bg-gradient bg-clip-text text-transparent">DYOR.net</span>
        </Link>
        
        {currentUser && (
          <div className={`flex items-center p-3 mb-6 ${
            theme === 'light' ? 'bg-gray-100' : 'bg-dark-700'
          } rounded-card`}>
            <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
            <div>
              <div className="text-sm font-medium">{currentUser.name}</div>
              <div className="text-xs text-gray-400">{currentUser.isSubscribed ? t('premium') : t('free')}</div>
            </div>
          </div>
        )}
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2">
          <li className={`mb-2 text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'} px-4 py-1 uppercase`}>Main</li>
          {menuItems.slice(0, 7).map((item) => (
            <li key={item.path} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-primary-500 bg-opacity-20 text-primary-500' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-dark-700'
                }`}
              >
                <item.icon className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                <span>{item.name}</span>
                {item.premium && !currentUser?.isSubscribed && (
                  <span className="ml-auto bg-secondary-500 text-xs py-0.5 px-2 rounded">
                    {t('premium')}
                  </span>
                )}
              </Link>
            </li>
          ))}
          
          <li className={`mb-2 mt-4 text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'} px-4 py-1 uppercase`}>
            Advanced Analysis
          </li>
          {menuItems.slice(7, 13).map((item) => (
            <li key={item.path} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-primary-500 bg-opacity-20 text-primary-500' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-dark-700'
                }`}
              >
                <item.icon className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          
          <li className={`mb-2 mt-4 text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'} px-4 py-1 uppercase`}>
            User
          </li>
          {menuItems.slice(13).map((item) => (
            <li key={item.path} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-primary-500 bg-opacity-20 text-primary-500' 
                    : theme === 'light' 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-gray-300 hover:bg-dark-700'
                }`}
              >
                <item.icon className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={`p-4 border-t ${theme === 'light' ? 'border-gray-200' : 'border-dark-600'}`}>
        <div className="flex items-center justify-center space-x-4">
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
      </div>
    </div>
  );
};

export default Sidebar;