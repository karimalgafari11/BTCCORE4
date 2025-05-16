import React from 'react';
import { useTranslation } from 'react-i18next';
import { priceActionPatterns } from '../mockData/index';
import { ClockIcon, ArrowTrendingUpIcon, FireIcon } from '@heroicons/react/24/outline';

const PriceActionScanner = () => {
  const { t } = useTranslation();

  // Function to format date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('priceActionScanner')}</h1>
        <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
          {t('refreshData')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">{t('detectedPatterns')}</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-dark-600">
                  <tr>
                    <th className="p-4 rounded-tl-lg">{t('pair')}</th>
                    <th className="p-4">{t('exchange')}</th>
                    <th className="p-4">{t('timeframe')}</th>
                    <th className="p-4">{t('pattern')}</th>
                    <th className="p-4">{t('significance')}</th>
                    <th className="p-4">{t('detectedAt')}</th>
                    <th className="p-4 rounded-tr-lg">{t('actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-600">
                  {priceActionPatterns.map((pattern) => (
                    <tr key={pattern.id} className="hover:bg-dark-600/50">
                      <td className="p-4 font-medium">{pattern.pair}</td>
                      <td className="p-4">{pattern.exchange}</td>
                      <td className="p-4">{pattern.timeframe}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          pattern.pattern.includes('Bullish') ? 'bg-green-500/20 text-green-500' : 
                          pattern.pattern.includes('Bearish') ? 'bg-red-500/20 text-red-500' : 
                          'bg-blue-500/20 text-blue-500'
                        }`}>
                          {pattern.pattern}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          {pattern.significance === 'Very Strong' && (
                            <FireIcon className="w-4 h-4 text-red-500 mr-1" />
                          )}
                          <span className={
                            pattern.significance === 'Very Strong' ? 'text-red-500' : 
                            pattern.significance === 'Strong' ? 'text-yellow-500' : 
                            'text-blue-500'
                          }>
                            {pattern.significance}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-400">
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {formatDate(pattern.detectedAt)}
                        </div>
                      </td>
                      <td className="p-4">
                        <button className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded-full text-xs">
                          {t('viewChart')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">{t('patternExplanations')}</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-dark-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-green-500">Bullish Engulfing</h3>
                </div>
                <p className="text-sm text-gray-400">
                  A bullish engulfing pattern occurs in a downtrend when a large white candlestick fully engulfs the previous small black candlestick. It signals a potential trend reversal from bearish to bullish.
                </p>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-blue-500">Double Bottom</h3>
                </div>
                <p className="text-sm text-gray-400">
                  A double bottom is a chart pattern where a price touches a support level twice before breaking through a resistance level. It signals the end of a downtrend and potentially the beginning of an upward trend.
                </p>
              </div>
              
              <div className="p-4 bg-dark-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-green-500">Bullish Flag</h3>
                </div>
                <p className="text-sm text-gray-400">
                  A bullish flag is a chart pattern that indicates a continuation of the previous uptrend. It consists of a strong upward move followed by a consolidation period with parallel trendlines, before continuing the upward move.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">{t('filters')}</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t('exchange')}</label>
                <select className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none">
                  <option value="all">All Exchanges</option>
                  <option value="binance">Binance</option>
                  <option value="coinbase">Coinbase</option>
                  <option value="kucoin">KuCoin</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('timeframe')}</label>
                <select className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none">
                  <option value="15m">15m</option>
                  <option value="1h">1h</option>
                  <option value="4h" selected>4h</option>
                  <option value="1d">1d</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('patternType')}</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="bullish" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="bullish" className="ml-2 text-sm">
                      {t('bullishPatterns')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="neutral" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="neutral" className="ml-2 text-sm">
                      {t('neutralPatterns')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="bearish" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="bearish" className="ml-2 text-sm">
                      {t('bearishPatterns')}
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('significance')}</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="very-strong" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="very-strong" className="ml-2 text-sm">
                      {t('veryStrong')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="strong" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="strong" className="ml-2 text-sm">
                      {t('strong')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="moderate" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="moderate" className="ml-2 text-sm">
                      {t('moderate')}
                    </label>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
                {t('applyFilters')}
              </button>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">{t('notifications')}</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  {t('enableNotifications')}
                </label>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                  <input 
                    type="checkbox" 
                    id="notification-toggle" 
                    className="absolute opacity-0 w-0 h-0"
                    checked
                  />
                  <label 
                    htmlFor="notification-toggle" 
                    className="block overflow-hidden h-6 rounded-full bg-dark-700 cursor-pointer"
                  >
                    <span className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform translate-x-6"></span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('notifyFor')}
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="notify-very-strong" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="notify-very-strong" className="ml-2 text-sm">
                      {t('veryStrongPatterns')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="notify-strong" 
                      checked 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="notify-strong" className="ml-2 text-sm">
                      {t('strongPatterns')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="notify-moderate" 
                      className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                    />
                    <label htmlFor="notify-moderate" className="ml-2 text-sm">
                      {t('moderatePatterns')}
                    </label>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg text-sm transition-colors">
                {t('savePreferences')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceActionScanner;