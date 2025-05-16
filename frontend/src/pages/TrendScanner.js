import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid';
import { trendScannerData, cryptoPairs, timeframes } from '../mockData';

const TrendScanner = () => {
  const { t } = useTranslation();
  
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPair, setSelectedPair] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  
  const filteredData = trendScannerData.filter(item => {
    if (selectedPair !== 'all' && item.pair !== selectedPair) return false;
    if (selectedTimeframe !== 'all' && item.timeframe !== selectedTimeframe) return false;
    if (selectedType !== 'all') {
      if (selectedType === 'bullish' && item.trend !== 'bullish') return false;
      if (selectedType === 'bearish' && item.trend !== 'bearish') return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('trendScanner')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Type of Strategy */}
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">{t('typeOfStrategy')}</label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option value="all">All</option>
              <option value="bullish">Bullish</option>
              <option value="bearish">Bearish</option>
              <option value="neutral">Neutral</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Indicators & Conditions */}
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">{t('indicatorsAndConditions')}</label>
          <button className="appearance-none w-full bg-dark-600 p-2.5 rounded border border-dark-500 text-left">
            Select indicators
          </button>
        </div>
        
        {/* Pair */}
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">{t('pair')}</label>
          <div className="relative">
            <select
              value={selectedPair}
              onChange={(e) => setSelectedPair(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option value="all">All Pairs</option>
              {cryptoPairs.map(pair => (
                <option key={pair.value} value={pair.value}>
                  {pair.label}
                </option>
              ))}
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
      </div>
      
      {/* Signal Rows */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{t('signals')}</h3>
          <div className="flex items-center text-sm text-gray-400">
            <FunnelIcon className="w-4 h-4 mr-2" />
            <span>Filters: {selectedPair !== 'all' || selectedTimeframe !== 'all' || selectedType !== 'all' ? 'Active' : 'None'}</span>
          </div>
        </div>
        
        {filteredData.map((item) => (
          <div key={item.id} className="card p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-3 md:mb-0">
                <div className="bg-dark-600 p-2 rounded-lg">
                  <span className="font-medium">{item.pair}</span>
                </div>
                <div className="bg-dark-600 p-2 rounded-lg">
                  <span className="font-medium">{item.timeframe}</span>
                </div>
                <div className={`p-2 rounded-lg ${
                  item.trend === 'bullish' ? 'bg-green-500 bg-opacity-20 text-green-500' : 
                  item.trend === 'bearish' ? 'bg-red-500 bg-opacity-20 text-red-500' : 
                  'bg-yellow-500 bg-opacity-20 text-yellow-500'
                }`}>
                  <span className="font-medium capitalize">{item.trend}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">MACD</span>
                  <span className={`text-sm font-medium ${
                    item.signals.macd === 'buy' ? 'text-green-500' : 
                    item.signals.macd === 'sell' ? 'text-red-500' : 
                    'text-gray-400'
                  }`}>
                    {item.signals.macd.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">RSI</span>
                  <span className={`text-sm font-medium ${
                    item.signals.rsi === 'buy' ? 'text-green-500' : 
                    item.signals.rsi === 'sell' ? 'text-red-500' : 
                    'text-gray-400'
                  }`}>
                    {item.signals.rsi.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">EMA</span>
                  <span className={`text-sm font-medium ${
                    item.signals.ema === 'buy' ? 'text-green-500' : 
                    item.signals.ema === 'sell' ? 'text-red-500' : 
                    'text-gray-400'
                  }`}>
                    {item.signals.ema.toUpperCase()}
                  </span>
                </div>
                
                <button className="ml-4 px-3 py-1 bg-primary-500 text-white text-sm rounded hover:bg-primary-600">
                  {t('details')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Telegram Alerts */}
      <div className="card p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{t('telegramAlerts')}</h3>
          
          <div className="flex items-center space-x-3">
            <button className="bg-dark-600 h-8 w-8 rounded-full flex items-center justify-center">
              <span className="opacity-50">α</span>
            </button>
            <button className="bg-dark-600 h-8 w-8 rounded-full flex items-center justify-center">
              <span className="opacity-50">β</span>
            </button>
            <button className="bg-dark-600 h-8 w-8 rounded-full flex items-center justify-center">
              <span className="opacity-100">γ</span>
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-400">{t('myStrategies')}</span>
            <button className="text-primary-500">{t('enabled')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendScanner;