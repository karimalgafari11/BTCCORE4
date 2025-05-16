import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  ChartBarIcon, 
  Cog6ToothIcon, 
  ViewColumnsIcon, 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { marketOverview } from '../mockData/index';

const Dashboard = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();

  // Dashboard card data
  const dashboardCards = [
    {
      id: 'trendscanner',
      title: t('trendScanner'),
      icon: ArrowTrendingUpIcon,
      color: 'from-blue-500 to-cyan-400',
      description: 'Scan 4000+ trading pairs for bullish/bearish trends',
      path: '/trend-scanner'
    },
    {
      id: 'strategymaker',
      title: t('strategyMaker'),
      icon: Cog6ToothIcon,
      color: 'from-purple-500 to-violet-400',
      description: 'Create custom trading strategies with alerts',
      path: '/strategy-maker'
    },
    {
      id: 'cointracker',
      title: t('cointracker'),
      icon: CurrencyDollarIcon,
      color: 'from-green-500 to-emerald-400',
      description: 'Track specific coins with technical conditions',
      path: '/cointracker'
    },
    {
      id: 'priceaction',
      title: t('priceActionScanner'),
      icon: ViewColumnsIcon,
      color: 'from-orange-500 to-amber-400',
      description: 'Detect candlestick patterns and breakouts',
      path: '/price-action-scanner'
    },
    {
      id: 'pumpingnow',
      title: t('pumpingNow'),
      icon: SparklesIcon,
      color: 'from-red-500 to-pink-400',
      description: 'Find coins with sudden price/volume increases',
      path: '/pumping-now',
      premium: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('dashboard')}</h1>
        
        <div className="flex space-x-3">
          <RouterLink
            to="/strategy-maker"
            className="flex items-center px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors"
          >
            {t('createStrategy')}
          </RouterLink>
          <RouterLink
            to="/cointracker"
            className="flex items-center px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg text-sm transition-colors"
          >
            {t('addCoin')}
          </RouterLink>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card) => (
          <RouterLink
            key={card.id}
            to={card.path}
            className={`card p-5 flex flex-col hover:bg-dark-600 transition-colors ${
              card.premium && !currentUser?.isSubscribed ? 'opacity-70' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color}`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              
              {card.premium && !currentUser?.isSubscribed && (
                <span className="bg-secondary-500 text-xs py-1 px-2 rounded">
                  {t('premium')}
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{card.description}</p>
          </RouterLink>
        ))}
        
        {/* Market Status Card */}
        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-4">Market Status</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className={
                marketOverview.status === 'bullish' ? 'text-green-500' : 
                marketOverview.status === 'bearish' ? 'text-red-500' : 
                'text-yellow-500'
              }>
                {marketOverview.status.toUpperCase()}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">BTC Dominance:</span>
              <span>{marketOverview.btcDominance}%</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Market Cap:</span>
              <span>{marketOverview.totalMarketCap}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">24h Volume:</span>
              <span>{marketOverview.dailyVolume}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Fear & Greed:</span>
              <span className={
                marketOverview.fearGreedIndex > 60 ? 'text-green-500' : 
                marketOverview.fearGreedIndex < 40 ? 'text-red-500' : 
                'text-yellow-500'
              }>
                {marketOverview.fearGreedIndex} - {
                  marketOverview.fearGreedIndex > 75 ? 'Extreme Greed' : 
                  marketOverview.fearGreedIndex > 60 ? 'Greed' : 
                  marketOverview.fearGreedIndex > 40 ? 'Neutral' : 
                  marketOverview.fearGreedIndex > 25 ? 'Fear' : 
                  'Extreme Fear'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;