import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trackedCoins } from '../mockData/index';
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  BellAlertIcon, 
  PlusIcon, 
  TrashIcon 
} from '@heroicons/react/24/solid';

const CoinTracker = () => {
  const { t } = useTranslation();
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Formatter for price display
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price >= 1 ? 2 : 6
    }).format(price);
  };
  
  // Format market cap and volume to shorter numbers
  const formatLargeNumber = (num) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(2)}K`;
    }
    return `$${num}`;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('cointracker')}</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors"
        >
          <PlusIcon className="w-4 h-4 mr-2" /> {t('addCoin')}
        </button>
      </div>
      
      {showAddForm && (
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">{t('addNewCoin')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('coin')}</label>
              <select className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none">
                <option value="">Select a coin...</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="DOT">Polkadot (DOT)</option>
                <option value="AVAX">Avalanche (AVAX)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('exchange')}</label>
              <select className="w-full p-2 bg-dark-700 rounded-lg border border-dark-600 focus:border-secondary-500 focus:outline-none">
                <option value="binance">Binance</option>
                <option value="coinbase">Coinbase</option>
                <option value="kucoin">KuCoin</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">{t('alertTypes')}</label>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="price-alert" 
                    className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                  />
                  <label htmlFor="price-alert" className="text-sm">{t('priceAlert')}</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="volume-alert" 
                    className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                  />
                  <label htmlFor="volume-alert" className="text-sm">{t('volumeAlert')}</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="rsi-alert" 
                    className="w-4 h-4 text-secondary-500 focus:ring-secondary-500 focus:ring-opacity-25 border-dark-600 rounded"
                  />
                  <label htmlFor="rsi-alert" className="text-sm">{t('rsiAlert')}</label>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex space-x-3">
              <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
                {t('addCoin')}
              </button>
              <button 
                onClick={() => setShowAddForm(false)} 
                className="px-4 py-2 bg-dark-600 hover:bg-dark-500 text-white rounded-lg text-sm transition-colors"
              >
                {t('cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">{t('trackedCoins')}</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-dark-600">
              <tr>
                <th className="p-4 rounded-tl-lg">{t('coin')}</th>
                <th className="p-4">{t('price')}</th>
                <th className="p-4">{t('change24h')}</th>
                <th className="p-4">{t('marketCap')}</th>
                <th className="p-4">{t('volume')}</th>
                <th className="p-4">{t('status')}</th>
                <th className="p-4">{t('alerts')}</th>
                <th className="p-4 rounded-tr-lg">{t('actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {trackedCoins.map((coin) => (
                <tr key={coin.id} className="hover:bg-dark-600/50">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="bg-dark-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-xs">{coin.symbol}</span>
                      </div>
                      <div>
                        <p className="font-medium">{coin.name}</p>
                        <p className="text-xs text-gray-400">{coin.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium">
                    {formatPrice(coin.price)}
                  </td>
                  <td className="p-4">
                    <span className={
                      coin.change24h > 0 ? 'text-green-500' : 
                      coin.change24h < 0 ? 'text-red-500' : 
                      'text-gray-400'
                    }>
                      {coin.change24h > 0 ? '+' : ''}{coin.change24h}%
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">
                    {formatLargeNumber(coin.marketCap)}
                  </td>
                  <td className="p-4 text-gray-400">
                    {formatLargeNumber(coin.volume)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        coin.status === 'bullish' ? 'bg-green-500/20 text-green-500' : 
                        coin.status === 'bearish' ? 'bg-red-500/20 text-red-500' : 
                        'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {coin.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    {coin.alerts.length > 0 ? (
                      <div className="flex">
                        <BellAlertIcon className="w-5 h-5 text-secondary-500" />
                        <span className="ml-1 text-secondary-500">
                          {coin.alerts.length}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="p-1 hover:bg-dark-500 rounded">
                        <TrashIcon className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {trackedCoins.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">{t('noCoinsTracked')}</p>
            <button className="mt-4 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors">
              {t('addYourFirstCoin')}
            </button>
          </div>
        )}
      </div>
      
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">{t('recentAlerts')}</h2>
        
        <div className="space-y-3">
          {trackedCoins.flatMap(coin => 
            coin.alerts.filter(alert => alert.triggered).map(alert => ({
              ...alert,
              coinName: coin.name,
              coinSymbol: coin.symbol
            }))
          ).length > 0 ? (
            trackedCoins.flatMap(coin => 
              coin.alerts.filter(alert => alert.triggered).map(alert => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-secondary-500/20 p-2 rounded-full mr-3">
                      <BellAlertIcon className="w-4 h-4 text-secondary-500" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {coin.name} ({coin.symbol}) {alert.type} {alert.condition} {alert.value}
                      </p>
                      <p className="text-xs text-gray-400">
                        {alert.date || 'Today'}
                      </p>
                    </div>
                  </div>
                  <button className="text-xs px-3 py-1 bg-dark-600 hover:bg-dark-500 rounded-full">
                    {t('view')}
                  </button>
                </div>
              ))
            )
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-400">{t('noRecentAlerts')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinTracker;