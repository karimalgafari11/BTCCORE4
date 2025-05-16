import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cryptoPairs, timeframes } from '../mockData';

// Mock key levels data
const keyLevelsData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    timeframe: '1d',
    levels: [
      { type: 'Support', price: '$64,500', strength: 8, timesTested: 4, recentTest: '1 day ago' },
      { type: 'Major Support', price: '$61,200', strength: 9, timesTested: 6, recentTest: '5 days ago' },
      { type: 'Resistance', price: '$68,000', strength: 7, timesTested: 3, recentTest: '3 days ago' }
    ]
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    timeframe: '4h',
    levels: [
      { type: 'Support', price: '$3,420', strength: 7, timesTested: 3, recentTest: '8 hours ago' },
      { type: 'Resistance', price: '$3,650', strength: 8, timesTested: 4, recentTest: '1 day ago' },
      { type: 'Major Resistance', price: '$3,800', strength: 9, timesTested: 5, recentTest: '3 days ago' }
    ]
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    timeframe: '1d',
    levels: [
      { type: 'Support', price: '$138.50', strength: 6, timesTested: 3, recentTest: '2 days ago' },
      { type: 'Major Support', price: '$125.00', strength: 8, timesTested: 5, recentTest: '7 days ago' },
      { type: 'Resistance', price: '$150.00', strength: 7, timesTested: 4, recentTest: '1 day ago' }
    ]
  },
  {
    id: 4,
    pair: 'BNB/USDT',
    timeframe: '1d',
    levels: [
      { type: 'Support', price: '$530.00', strength: 7, timesTested: 3, recentTest: '3 days ago' },
      { type: 'Resistance', price: '$580.00', strength: 6, timesTested: 2, recentTest: '5 days ago' },
      { type: 'Major Resistance', price: '$600.00', strength: 9, timesTested: 6, recentTest: '14 days ago' }
    ]
  },
];

// Level types for filtering
const levelTypes = [
  { id: 'all', name: 'All Levels' },
  { id: 'support', name: 'Support' },
  { id: 'resistance', name: 'Resistance' },
  { id: 'major', name: 'Major Levels' }
];

const KeyLevels = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPair, setSelectedPair] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [activeCard, setActiveCard] = useState(null);

  // Filter key levels based on selected filters
  const filteredLevels = keyLevelsData.filter(item => {
    if (selectedPair !== 'all' && item.pair !== selectedPair) return false;
    if (selectedTimeframe !== 'all' && item.timeframe !== selectedTimeframe) return false;
    return true;
  });

  // Helper function to filter levels within a card based on type
  const filterLevelsByType = (levels) => {
    if (selectedType === 'all') return levels;
    return levels.filter(level => {
      if (selectedType === 'support' && level.type.toLowerCase().includes('support')) return true;
      if (selectedType === 'resistance' && level.type.toLowerCase().includes('resistance')) return true;
      if (selectedType === 'major' && level.type.toLowerCase().includes('major')) return true;
      return false;
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Key Levels</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Level Type</label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {levelTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Pair</label>
          <div className="relative">
            <select
              value={selectedPair}
              onChange={(e) => setSelectedPair(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option value="all">All Pairs</option>
              {cryptoPairs.map(pair => (
                <option key={pair.value} value={pair.value}>{pair.label}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Timeframe</label>
          <div className="relative">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              <option value="all">All Timeframes</option>
              {timeframes.map(tf => (
                <option key={tf.value} value={tf.value}>{tf.label}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Key Levels Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLevels.map(item => {
          const filteredItemLevels = filterLevelsByType(item.levels);
          if (filteredItemLevels.length === 0) return null;
          
          return (
            <div 
              key={item.id} 
              className={`card p-4 cursor-pointer transition-all ${
                activeCard === item.id ? 'ring-2 ring-primary-500' : 'hover:bg-dark-600'
              }`}
              onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium text-lg">{item.pair}</h3>
                  <div className="text-sm text-gray-400">{item.timeframe} Timeframe</div>
                </div>
                
                <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded hover:bg-primary-600">
                  View Chart
                </button>
              </div>
              
              <div className="space-y-3">
                {filteredItemLevels.map((level, idx) => (
                  <div key={idx} className="bg-dark-600 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        level.type.toLowerCase().includes('support') 
                          ? 'bg-green-500 bg-opacity-20 text-green-500'
                          : 'bg-red-500 bg-opacity-20 text-red-500'
                      }`}>
                        {level.type}
                      </span>
                      <span className="font-medium">{level.price}</span>
                    </div>
                    
                    <div className="mt-2 flex justify-between text-xs text-gray-400">
                      <span>Strength:</span>
                      <div className="flex items-center">
                        {[...Array(10)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-3 mx-0.5 rounded-sm ${
                              i < level.strength 
                                ? level.type.toLowerCase().includes('support')
                                  ? 'bg-green-500'
                                  : 'bg-red-500'
                                : 'bg-dark-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-2 flex justify-between text-xs text-gray-400">
                      <span>Times tested:</span>
                      <span>{level.timesTested}</span>
                    </div>
                    
                    <div className="mt-1 flex justify-between text-xs text-gray-400">
                      <span>Last test:</span>
                      <span>{level.recentTest}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {activeCard === item.id && (
                <div className="mt-4 pt-4 border-t border-dark-500">
                  <div className="text-sm mb-2">Trading approach:</div>
                  <div className="space-y-2">
                    <div className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Buy near support levels with stop loss below the level</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Sell near resistance levels with stop loss above the level</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Major levels provide stronger trading signals</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Key Levels Education */}
      <div className="card p-5">
        <h2 className="text-lg font-semibold mb-4">Understanding Key Levels</h2>
        <p className="text-gray-300 mb-4">
          Key levels are significant price points where market participants have historically shown strong interest, 
          resulting in price reversals or temporary pauses in the trend.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div>
            <h3 className="font-medium mb-3">Support Levels</h3>
            <p className="text-sm text-gray-300 mb-3">
              Price levels where buying interest is historically strong enough to prevent prices from falling further.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <p className="text-xs text-gray-400">Act as potential "floors" where price tends to bounce</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <p className="text-xs text-gray-400">More tests of a support level increase its significance</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <p className="text-xs text-gray-400">Broken supports often become future resistances</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Resistance Levels</h3>
            <p className="text-sm text-gray-300 mb-3">
              Price levels where selling interest is historically strong enough to prevent prices from rising further.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <p className="text-xs text-gray-400">Act as potential "ceilings" where price tends to reverse</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <p className="text-xs text-gray-400">Each test that fails to break through adds to their strength</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <p className="text-xs text-gray-400">Broken resistances often become future supports</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-3">Types of Key Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Historical Levels</div>
              <p className="text-xs text-gray-400">Based on significant past price reactions</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Psychological Levels</div>
              <p className="text-xs text-gray-400">Round numbers that attract market attention</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Fibonacci Levels</div>
              <p className="text-xs text-gray-400">Mathematical retracement and extension levels</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Pivot Points</div>
              <p className="text-xs text-gray-400">Calculated levels based on previous price action</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Moving Averages</div>
              <p className="text-xs text-gray-400">Dynamic levels that follow price movement</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Volume Profile Levels</div>
              <p className="text-xs text-gray-400">Areas with historically high trading volume</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLevels;