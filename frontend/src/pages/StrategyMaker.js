import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { strategiesData } from '../mockData';

const StrategyMaker = () => {
  const { t } = useTranslation();
  const [strategies, setStrategies] = useState(strategiesData);
  
  const toggleStrategy = (id) => {
    setStrategies(strategies.map(strategy => {
      if (strategy.id === id) {
        return { ...strategy, enabled: !strategy.enabled };
      }
      return strategy;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('strategyMaker')}</h1>
        
        <button className="flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm transition-colors">
          <PlusIcon className="w-5 h-5 mr-2" />
          {t('addCoin')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">{t('strategies')}</h2>
          
          {strategies.map((strategy) => (
            <div key={strategy.id} className="card p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{strategy.name}</h3>
                  <p className="text-sm text-gray-400">{strategy.description}</p>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm mr-2">{strategy.enabled ? t('enabled') : t('disabled')}</span>
                  <button
                    onClick={() => toggleStrategy(strategy.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      strategy.enabled ? 'bg-primary-500' : 'bg-dark-600'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        strategy.enabled ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  
                  <ChevronRightIcon className="w-5 h-5 ml-2 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {strategy.pairs.map((pair, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-dark-600 rounded">
                    {pair}
                  </span>
                ))}
                
                {strategy.timeframes.map((tf, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-dark-600 rounded">
                    {tf}
                  </span>
                ))}
              </div>
              
              <div className="mt-3 space-y-2">
                {strategy.conditions.map((condition, idx) => (
                  <div key={idx} className="text-xs text-gray-400 flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2 bg-primary-500"></span>
                    {condition}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4">Create New Strategy</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Strategy Name</label>
              <input type="text" placeholder="My Strategy" className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Description</label>
              <input type="text" placeholder="Strategy description..." className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Select Pairs</label>
              <div className="relative">
                <select className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500">
                  <option>Select trading pairs</option>
                </select>
                <ChevronRightIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Timeframes</label>
              <div className="relative">
                <select className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500">
                  <option>Select timeframes</option>
                </select>
                <ChevronRightIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Entry Conditions</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>MACD</option>
                  </select>
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>crosses above</option>
                  </select>
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500">
                    <option>Signal Line</option>
                  </select>
                  <button className="ml-2">
                    <PlusIcon className="w-5 h-5 text-primary-500" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Exit Conditions</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>RSI</option>
                  </select>
                  <select className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 mr-2">
                    <option>greater than</option>
                  </select>
                  <input type="text" placeholder="70" className="appearance-none bg-dark-600 p-2 rounded border border-dark-500 w-20" />
                  <button className="ml-2">
                    <PlusIcon className="w-5 h-5 text-primary-500" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Alerts</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="telegram-alerts"
                  className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
                />
                <label htmlFor="telegram-alerts" className="text-sm">
                  Send Telegram alerts
                </label>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end space-x-3">
              <button className="px-4 py-2 bg-dark-600 hover:bg-dark-500 text-white rounded-lg text-sm transition-colors">
                {t('cancel')}
              </button>
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm transition-colors">
                {t('create')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyMaker;