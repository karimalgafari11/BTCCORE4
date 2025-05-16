import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cryptoPairs, timeframes } from '../mockData';

// Mock trendline data
const trendlinesData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    timeframe: '1d',
    type: 'Support',
    strength: 8,
    touchPoints: 4,
    status: 'Active',
    lastTested: '2 days ago',
    price: '$66,420'
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    timeframe: '4h',
    type: 'Resistance',
    strength: 7,
    touchPoints: 3,
    status: 'Active',
    lastTested: '8 hours ago',
    price: '$3,560'
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    timeframe: '1d',
    type: 'Support',
    strength: 9,
    touchPoints: 5,
    status: 'Active',
    lastTested: '12 hours ago',
    price: '$145.30'
  },
  {
    id: 4,
    pair: 'BNB/USDT',
    timeframe: '4h',
    type: 'Channel',
    strength: 6,
    touchPoints: 4,
    status: 'Active',
    lastTested: '4 hours ago',
    price: '$540 - $570'
  },
  {
    id: 5,
    pair: 'XRP/USDT',
    timeframe: '1h',
    type: 'Trend',
    strength: 5,
    touchPoints: 3,
    status: 'Breaking',
    lastTested: '1 hour ago',
    price: '$0.52'
  },
  {
    id: 6,
    pair: 'ADA/USDT',
    timeframe: '1d',
    type: 'Resistance',
    strength: 7,
    touchPoints: 4,
    status: 'Active',
    lastTested: '3 days ago',
    price: '$0.48'
  }
];

// Trendline types for filtering
const trendlineTypes = [
  { id: 'all', name: 'All Types' },
  { id: 'support', name: 'Support Lines' },
  { id: 'resistance', name: 'Resistance Lines' },
  { id: 'trend', name: 'Trend Lines' },
  { id: 'channel', name: 'Channels' }
];

// Status types for filtering
const statusTypes = [
  { id: 'all', name: 'All Statuses' },
  { id: 'active', name: 'Active' },
  { id: 'breaking', name: 'Breaking' },
  { id: 'broken', name: 'Broken' }
];

const TrendlinesAnalysis = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPair, setSelectedPair] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  // Filter trendlines based on selected filters
  const filteredTrendlines = trendlinesData.filter(trendline => {
    if (selectedPair !== 'all' && trendline.pair !== selectedPair) return false;
    if (selectedTimeframe !== 'all' && trendline.timeframe !== selectedTimeframe) return false;
    if (selectedType !== 'all' && trendline.type.toLowerCase() !== selectedType) return false;
    if (selectedStatus !== 'all' && trendline.status.toLowerCase() !== selectedStatus) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Trendlines Analysis</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Trendline Type</label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {trendlineTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Status</label>
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {statusTypes.map(status => (
                <option key={status.id} value={status.id}>{status.name}</option>
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

      {/* Create Trendline Button */}
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Create Custom Trendline
        </button>
      </div>

      {/* Trendlines Table */}
      <div className="card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-dark-600">
              <th className="py-3 px-4 text-left">Pair</th>
              <th className="py-3 px-4 text-left">Timeframe</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Strength</th>
              <th className="py-3 px-4 text-left">Touch Points</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Last Tested</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrendlines.map(trendline => (
              <tr key={trendline.id} className="border-b border-dark-600 last:border-0 hover:bg-dark-700">
                <td className="py-3 px-4">{trendline.pair}</td>
                <td className="py-3 px-4">{trendline.timeframe}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    trendline.type === 'Support' ? 'bg-green-500 bg-opacity-20 text-green-500' :
                    trendline.type === 'Resistance' ? 'bg-red-500 bg-opacity-20 text-red-500' :
                    trendline.type === 'Channel' ? 'bg-purple-500 bg-opacity-20 text-purple-500' :
                    'bg-blue-500 bg-opacity-20 text-blue-500'
                  }`}>
                    {trendline.type}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    {[...Array(10)].map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-1.5 h-3 mx-0.5 rounded-sm ${
                          idx < trendline.strength 
                            ? trendline.type === 'Support' 
                              ? 'bg-green-500' 
                              : trendline.type === 'Resistance' 
                                ? 'bg-red-500'
                                : trendline.type === 'Channel'
                                  ? 'bg-purple-500'
                                  : 'bg-blue-500' 
                            : 'bg-dark-600'
                        }`}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">{trendline.touchPoints}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    trendline.status === 'Active' ? 'bg-green-500 bg-opacity-20 text-green-500' :
                    trendline.status === 'Breaking' ? 'bg-yellow-500 bg-opacity-20 text-yellow-500' :
                    'bg-red-500 bg-opacity-20 text-red-500'
                  }`}>
                    {trendline.status}
                  </span>
                </td>
                <td className="py-3 px-4">{trendline.lastTested}</td>
                <td className="py-3 px-4">{trendline.price}</td>
                <td className="py-3 px-4">
                  <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded hover:bg-primary-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trendline Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">Trendline Detection</h2>
          <p className="text-gray-300 mb-4">
            Our system uses advanced algorithms to detect and analyze trendlines across multiple timeframes. 
            These lines represent significant levels where price has reacted multiple times.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
              <p className="text-sm">
                <span className="font-medium text-green-500">Support Trendlines</span> - Prevent price from falling further, often act as buying zones.
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
              <p className="text-sm">
                <span className="font-medium text-red-500">Resistance Trendlines</span> - Prevent price from rising further, often act as selling zones.
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <p className="text-sm">
                <span className="font-medium text-blue-500">Trend Trendlines</span> - Connect series of higher lows (uptrend) or lower highs (downtrend).
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
              <p className="text-sm">
                <span className="font-medium text-purple-500">Channels</span> - Two parallel trendlines containing price movement in a corridor.
              </p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">Trading Trendlines</h2>
          <p className="text-gray-300 mb-4">
            Trendlines are powerful tools for identifying potential entry and exit points in the market.
          </p>
          <div className="bg-dark-600 rounded p-4 mb-4">
            <h3 className="font-medium mb-2">Trading Strategy Tips</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Buy near support trendlines with stop loss below the line</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Sell near resistance trendlines with stop loss above the line</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Watch for breakouts with increased volume for trend reversals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Multiple timeframe analysis confirms stronger trendlines</span>
              </li>
            </ul>
          </div>
          <button className="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
            View Advanced Trendline Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendlinesAnalysis;