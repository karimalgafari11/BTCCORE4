import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { volumeAnalysisData } from '../mockData/volumeData';
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  ChartBarIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/solid';

const VolumeAnalysis = () => {
  const { t } = useTranslation();
  const [timeRange, setTimeRange] = useState('24h');
  
  // Format large numbers to have commas
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };
  
  // Format money values
  const formatMoney = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(num);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('volumeAnalysis')}</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setTimeRange('24h')}
            className={`px-3 py-1 rounded-full text-sm ${
              timeRange === '24h' ? 'bg-secondary-500 text-white' : 'bg-dark-700 text-gray-300'
            }`}
          >
            24h
          </button>
          <button 
            onClick={() => setTimeRange('7d')}
            className={`px-3 py-1 rounded-full text-sm ${
              timeRange === '7d' ? 'bg-secondary-500 text-white' : 'bg-dark-700 text-gray-300'
            }`}
          >
            7d
          </button>
          <button 
            onClick={() => setTimeRange('30d')}
            className={`px-3 py-1 rounded-full text-sm ${
              timeRange === '30d' ? 'bg-secondary-500 text-white' : 'bg-dark-700 text-gray-300'
            }`}
          >
            30d
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Metrics Cards */}
        <div className="card p-5">
          <h3 className="text-gray-400 text-sm mb-2">{t('totalExchangeVolume')}</h3>
          <div className="text-2xl font-bold">{formatMoney(volumeAnalysisData.totalVolume)}</div>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-500">{volumeAnalysisData.volumeChange}% {t('from')} {timeRange === '24h' ? t('yesterday') : timeRange === '7d' ? t('lastWeek') : t('lastMonth')}</span>
          </div>
        </div>
        
        <div className="card p-5">
          <h3 className="text-gray-400 text-sm mb-2">{t('largestVolumeGainers')}</h3>
          <div className="text-2xl font-bold">{volumeAnalysisData.topGainer}</div>
          <div className="flex items-center mt-2 text-sm">
            <ChartBarIcon className="w-4 h-4 text-blue-500 mr-1" />
            <span className="text-blue-500">+{volumeAnalysisData.topGainerPercent}% {t('volumeIncrease')}</span>
          </div>
        </div>
        
        <div className="card p-5">
          <h3 className="text-gray-400 text-sm mb-2">{t('largestVolumeDroppers')}</h3>
          <div className="text-2xl font-bold">{volumeAnalysisData.topLoser}</div>
          <div className="flex items-center mt-2 text-sm">
            <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-500">{volumeAnalysisData.topLoserPercent}% {t('volumeDecrease')}</span>
          </div>
        </div>
        
        <div className="card p-5">
          <h3 className="text-gray-400 text-sm mb-2">{t('unusualVolume')}</h3>
          <div className="text-2xl font-bold">{volumeAnalysisData.unusualVolumeCount} {t('coins')}</div>
          <div className="flex items-center mt-2 text-sm">
            <MagnifyingGlassIcon className="w-4 h-4 text-purple-500 mr-1" />
            <span className="text-purple-500">{t('detectingVolumeAnomalies')}</span>
          </div>
        </div>
      </div>
      
      {/* Main Volume Table */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{t('volumeByExchange')}</h2>
          <div className="relative">
            <input 
              type="text" 
              className="bg-dark-700 px-4 py-2 pr-10 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none"
              placeholder={t('searchExchanges')}
            />
            <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-dark-600">
              <tr>
                <th className="p-4 rounded-tl-lg">{t('exchange')}</th>
                <th className="p-4">{t('volume24h')}</th>
                <th className="p-4">{t('change')}</th>
                <th className="p-4">{t('marketShare')}</th>
                <th className="p-4">{t('coins')}</th>
                <th className="p-4 rounded-tr-lg">{t('trustScore')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {volumeAnalysisData.exchanges.map((exchange, index) => (
                <tr key={index} className="hover:bg-dark-600/50">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="bg-dark-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-xs">{exchange.name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-medium">{exchange.name}</p>
                        <p className="text-xs text-gray-400">{exchange.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium">
                    {formatMoney(exchange.volume24h)}
                  </td>
                  <td className="p-4">
                    <span className={
                      exchange.change > 0 ? 'text-green-500' : 
                      exchange.change < 0 ? 'text-red-500' : 
                      'text-gray-400'
                    }>
                      {exchange.change > 0 ? '+' : ''}{exchange.change}%
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-full bg-dark-700 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-blue-500 h-2.5 rounded-full" 
                          style={{ width: `${exchange.marketShare}%` }}
                        ></div>
                      </div>
                      <span>{exchange.marketShare}%</span>
                    </div>
                  </td>
                  <td className="p-4">{formatNumber(exchange.coins)}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className={`h-2.5 w-2.5 rounded-full mr-2 ${
                        exchange.trustScore > 7 ? 'bg-green-500' : 
                        exchange.trustScore > 4 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}></div>
                      <span>{exchange.trustScore}/10</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Top Volume by Pairs */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">{t('topVolumeByPairs')}</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-dark-600">
              <tr>
                <th className="p-4 rounded-tl-lg">{t('pair')}</th>
                <th className="p-4">{t('exchange')}</th>
                <th className="p-4">{t('price')}</th>
                <th className="p-4">{t('volume24h')}</th>
                <th className="p-4">{t('volumeChange')}</th>
                <th className="p-4 rounded-tr-lg">{t('action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {volumeAnalysisData.topPairs.map((pair, index) => (
                <tr key={index} className="hover:bg-dark-600/50">
                  <td className="p-4 font-medium">{pair.pair}</td>
                  <td className="p-4">{pair.exchange}</td>
                  <td className="p-4">${pair.price.toFixed(pair.price < 1 ? 6 : 2)}</td>
                  <td className="p-4">{formatMoney(pair.volume24h)}</td>
                  <td className="p-4">
                    <span className={
                      pair.volumeChange > 0 ? 'text-green-500' : 
                      pair.volumeChange < 0 ? 'text-red-500' : 
                      'text-gray-400'
                    }>
                      {pair.volumeChange > 0 ? '+' : ''}{pair.volumeChange}%
                    </span>
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
    </div>
  );
};

export default VolumeAnalysis;