import React from 'react';
import { useTranslation } from 'react-i18next';
import { trendScannerResults } from '../mockData/index';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from '@heroicons/react/24/solid';

const TrendScanner = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('trendScanner')}</h1>
        <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
          {t('refreshData')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <h2 className="text-xl font-semibold mb-4">{t('trendResults')}</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-dark-600">
                <tr>
                  <th className="p-4 rounded-tl-lg">{t('pair')}</th>
                  <th className="p-4">{t('exchange')}</th>
                  <th className="p-4">{t('timeframe')}</th>
                  <th className="p-4">{t('trend')}</th>
                  <th className="p-4">{t('strength')}</th>
                  <th className="p-4 rounded-tr-lg">{t('signals')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-600">
                {trendScannerResults.map((result) => (
                  <tr key={result.id} className="hover:bg-dark-600/50">
                    <td className="p-4 font-medium">{result.pair}</td>
                    <td className="p-4">{result.exchange}</td>
                    <td className="p-4">{result.timeframe}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        {result.trend === 'bullish' ? (
                          <ArrowUpIcon className="w-4 h-4 text-green-500 mr-2" />
                        ) : result.trend === 'bearish' ? (
                          <ArrowDownIcon className="w-4 h-4 text-red-500 mr-2" />
                        ) : (
                          <MinusIcon className="w-4 h-4 text-yellow-500 mr-2" />
                        )}
                        <span className={
                          result.trend === 'bullish' ? 'text-green-500' : 
                          result.trend === 'bearish' ? 'text-red-500' :
                          'text-yellow-500'
                        }>
                          {result.trend}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="relative w-full h-2 bg-dark-700 rounded-full">
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full ${
                            result.trend === 'bullish' ? 'bg-green-500' : 
                            result.trend === 'bearish' ? 'bg-red-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${result.strength}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {result.signals.map((signal, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-dark-700 rounded-full">
                            {signal}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
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
              <label className="block text-sm font-medium mb-2">{t('trend')}</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="bullish" 
                    checked 
                    className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                  />
                  <label htmlFor="bullish" className="ml-2 text-sm">
                    {t('bullish')}
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
                    {t('neutral')}
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
                    {t('bearish')}
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('strength')}</label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value="50" 
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
            
            <button className="w-full mt-4 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
              {t('applyFilters')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendScanner;