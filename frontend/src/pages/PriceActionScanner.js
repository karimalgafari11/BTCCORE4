import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { priceActionData, timeframes } from '../mockData';

const PriceActionScanner = () => {
  const { t } = useTranslation();
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState('all');
  
  const filteredData = priceActionData.filter(item => {
    if (selectedTimeframe !== 'all' && item.timeframe !== selectedTimeframe) return false;
    if (selectedTrend !== 'all' && item.trend !== selectedTrend) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('priceActionScanner')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Filter */}
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">{t('filter')}</label>
          <div className="relative">
            <select
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option>All Patterns</option>
              <option>Engulfing</option>
              <option>Doji</option>
              <option>Divergence</option>
              <option>Support/Resistance</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Timeframe */}
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">{t('timeframe')}</label>
          <div className="relative">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option value="all">All Timeframes</option>
              {timeframes.map(tf => (
                <option key={tf.value} value={tf.value}>
                  {tf.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Trend */}
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">{t('trend')}</label>
          <div className="relative">
            <select
              value={selectedTrend}
              onChange={(e) => setSelectedTrend(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option value="all">All Trends</option>
              <option value="bullish">Bullish</option>
              <option value="bearish">Bearish</option>
              <option value="neutral">Neutral</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="card p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{item.pair}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400 mr-2">{item.timeframe}</span>
                  <span className={`text-sm px-2 py-0.5 rounded ${
                    item.trend === 'bullish' ? 'bg-green-500 bg-opacity-20 text-green-500' : 
                    item.trend === 'bearish' ? 'bg-red-500 bg-opacity-20 text-red-500' : 
                    'bg-yellow-500 bg-opacity-20 text-yellow-500'
                  }`}>
                    {item.trend}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-400">Strength</div>
                <div className="flex items-center">
                  {[...Array(10)].map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-3 mx-0.5 rounded-sm ${
                        idx < item.strength 
                          ? item.trend === 'bullish' 
                            ? 'bg-green-500' 
                            : item.trend === 'bearish' 
                              ? 'bg-red-500' 
                              : 'bg-yellow-500'
                          : 'bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Pattern</div>
              <div className="bg-dark-600 p-2 rounded">
                {item.pattern}
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded hover:bg-primary-600">
                {t('details')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceActionScanner;