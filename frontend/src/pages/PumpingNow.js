import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { pumpingData } from '../mockData';
import { useAuth } from '../contexts/AuthContext';

const PumpingNow = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [filter, setFilter] = useState('all');
  
  const isPremium = currentUser?.isSubscribed;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('pumpingNow')}</h1>
      
      {!isPremium ? (
        <div className="card p-6 text-center">
          <div className="bg-secondary-500 bg-opacity-20 text-secondary-500 rounded-lg py-2 px-4 inline-block mb-4">
            Premium Feature
          </div>
          <h2 className="text-xl font-semibold mb-3">Upgrade to Premium</h2>
          <p className="text-gray-400 mb-6">
            This feature is only available for premium users. Upgrade your account to get access to real-time pumping coins scanner.
          </p>
          <button className="px-6 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors">
            Upgrade Now
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="card px-4 py-2 flex items-center">
              <span className="text-sm text-gray-400 mr-2">{t('filter')}:</span>
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="appearance-none bg-dark-600 py-1 pl-3 pr-8 rounded border border-dark-500"
                >
                  <option value="all">All</option>
                  <option value="binance">Binance</option>
                  <option value="bybit">Bybit</option>
                  <option value="kucoin">KuCoin</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              Last updated: <span className="text-white">30 seconds ago</span>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-dark-600">
                  <th className="py-3 px-4 text-left">{t('pair')}</th>
                  <th className="py-3 px-4 text-left">{t('change')}</th>
                  <th className="py-3 px-4 text-left">{t('volume')}</th>
                  <th className="py-3 px-4 text-left">{t('action')}</th>
                </tr>
              </thead>
              <tbody>
                {pumpingData
                  .filter(item => filter === 'all' || item.exchangeInfo.toLowerCase() === filter)
                  .map((item) => (
                    <tr key={item.id} className="border-b border-dark-600 last:border-0">
                      <td className="py-3 px-4">
                        <div className="font-medium">{item.pair}</div>
                        <div className="text-xs text-gray-400">{item.exchangeInfo}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-green-500">{item.change}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-primary-500">{item.volume}</div>
                        <div className="text-xs text-gray-400">{item.timeframe}</div>
                      </td>
                      <td className="py-3 px-4">
                        <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded hover:bg-primary-600">
                          {t('details')}
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          
          <div className="card p-4">
            <h2 className="text-lg font-semibold mb-3">Pumping Alerts</h2>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                Get real-time alerts when coins start pumping
              </div>
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-dark-600 rounded-lg text-sm hover:bg-dark-500">
                <span>Configure Alerts</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PumpingNow;