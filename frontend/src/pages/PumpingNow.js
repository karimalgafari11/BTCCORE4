import React from 'react';
import { useTranslation } from 'react-i18next';
import { pumpingCoins } from '../mockData/index';
import { FireIcon, ArrowTrendingUpIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const PumpingNow = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-2">{t('pumpingNow')}</h1>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">Live</span>
        </div>
        <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
          {t('refreshData')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pumpingCoins.map(coin => (
          <div key={coin.id} className="card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500/20 to-transparent w-1/2 h-1"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="bg-dark-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-sm">{coin.coin}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{coin.name}</h3>
                  <p className="text-xs text-gray-400">{coin.exchange} • {coin.timeframe}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FireIcon className="w-5 h-5 text-red-500 mr-1" />
                <span className="text-red-500 font-semibold">Hot</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">{t('priceChange')}</p>
                <div className="flex items-center">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-xl font-bold text-green-500">+{coin.priceChange}%</span>
                </div>
              </div>
              <div className="bg-dark-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">{t('volumeChange')}</p>
                <div className="flex items-center">
                  <ChartBarIcon className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-xl font-bold text-blue-500">+{coin.volumeChange}%</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 mb-1">{t('currentPrice')}</p>
                <p className="font-medium">${coin.currentPrice}</p>
              </div>
              <button className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg text-sm transition-colors">
                {t('viewChart')}
              </button>
            </div>
          </div>
        ))}
        
        <div className="card p-6 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">{t('pumpDetector')}</h2>
          
          <p className="text-gray-400 mb-6">
            {t('pumpDetectorDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('timeframe')}</label>
              <select className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none">
                <option value="1m">1m</option>
                <option value="5m">5m</option>
                <option value="15m">15m</option>
                <option value="1h" selected>1h</option>
                <option value="4h">4h</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('minPriceChange')}</label>
              <div className="relative">
                <input 
                  type="number" 
                  className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none" 
                  value="5"
                />
                <span className="absolute right-3 top-2 text-gray-400">%</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('minVolumeChange')}</label>
              <div className="relative">
                <input 
                  type="number" 
                  className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none" 
                  value="100"
                />
                <span className="absolute right-3 top-2 text-gray-400">%</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
              {t('applyFilters')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-dark-800 border border-red-500/20 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-red-500/10 p-3 rounded-full">
            <FireIcon className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('disclaimer')}</h3>
            <p className="text-gray-400 text-sm">
              {t('pumpingDisclaimer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpingNow;