import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cointrackerData } from '../mockData';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const Cointracker = () => {
  const { t } = useTranslation();
  const [trackers, setTrackers] = useState(cointrackerData);
  
  const toggleTracker = (id) => {
    setTrackers(trackers.map(tracker => {
      if (tracker.id === id) {
        return { ...tracker, status: tracker.status === 'enabled' ? 'disabled' : 'enabled' };
      }
      return tracker;
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('cointracker')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {trackers.map((tracker) => (
            <div key={tracker.id} className="card p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{tracker.pair}</h3>
                  <p className="text-sm text-gray-400">{tracker.exchange}</p>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm mr-2">
                    {tracker.status === 'enabled' ? t('enabled') : t('disabled')}
                  </span>
                  <button
                    onClick={() => toggleTracker(tracker.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      tracker.status === 'enabled' ? 'bg-primary-500' : 'bg-dark-600'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        tracker.status === 'enabled' ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  
                  <ChevronRightIcon className="w-5 h-5 ml-2 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-3 space-y-2">
                {tracker.indicators.map((indicator, idx) => (
                  <div key={idx} className="text-xs text-gray-400 flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2 bg-primary-500"></span>
                    {indicator}
                  </div>
                ))}
              </div>
              
              <div className="mt-3 flex justify-between items-center text-sm">
                <span className="text-gray-400">{t('telegramAlerts')}:</span>
                <div className="flex items-center">
                  <span className="mr-2">
                    {tracker.alert ? t('enabled') : t('disabled')}
                  </span>
                  <button
                    className={`w-10 h-5 rounded-full relative transition-colors ${
                      tracker.alert ? 'bg-primary-500' : 'bg-dark-600'
                    }`}
                  >
                    <span 
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                        tracker.alert ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4">Add New Tracker</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Select Pair</label>
              <div className="relative">
                <select className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500">
                  <option>Select pair</option>
                </select>
                <ChevronRightIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Exchange</label>
              <div className="relative">
                <select className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500">
                  <option>Binance</option>
                  <option>Bybit</option>
                  <option>KuCoin</option>
                </select>
                <ChevronRightIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Price Alerts</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>Price</option>
                  </select>
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>greater than</option>
                  </select>
                  <input type="text" placeholder="50000" className="appearance-none bg-dark-600 p-2 rounded border border-dark-500" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Technical Indicators</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>RSI</option>
                  </select>
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>crosses below</option>
                  </select>
                  <input type="text" placeholder="30" className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 w-20" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Alert Settings</label>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="email-alerts"
                  className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="email-alerts" className="text-sm">
                  Email alerts
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="telegram-alerts"
                  className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="telegram-alerts" className="text-sm">
                  Telegram alerts
                </label>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end space-x-3">
              <button className="px-4 py-2 bg-dark-600 hover:bg-dark-500 text-white rounded-lg text-sm transition-colors">
                {t('cancel')}
              </button>
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm transition-colors">
                {t('add')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card p-4">
        <h2 className="text-lg font-semibold mb-4">{t('status')}</h2>
        
        <div className="space-y-3">
          {trackers.map((tracker) => (
            <div key={tracker.id} className="flex justify-between items-center py-2 border-b border-dark-600 last:border-0">
              <div>
                <h3 className="font-medium">{tracker.pair}</h3>
                <div className="flex space-x-2 text-xs text-gray-400">
                  <span>{tracker.exchange}</span>
                  <span>•</span>
                  <span>Last updated: 5 min ago</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className={`text-sm mr-3 ${
                  tracker.status === 'enabled' ? 'text-green-500' : 'text-gray-400'
                }`}>
                  {tracker.status === 'enabled' ? t('enabled') : t('disabled')}
                </span>
                <button className="bg-dark-600 hover:bg-dark-500 text-sm px-3 py-1 rounded">{t('all')}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cointracker;