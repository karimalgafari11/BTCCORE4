import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cryptoPairs, timeframes } from '../mockData';

// Mock divergence data
const divergenceData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    timeframe: '1d',
    type: 'Regular Bullish',
    indicator: 'RSI',
    strength: 8,
    price: '$66,420',
    detected: '12 hours ago',
    signals: ['Buy', 'Trend Reversal']
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    timeframe: '4h',
    type: 'Hidden Bearish',
    indicator: 'MACD',
    strength: 7,
    price: '$3,560',
    detected: '2 hours ago',
    signals: ['Sell', 'Trend Continuation']
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    timeframe: '1h',
    type: 'Regular Bearish',
    indicator: 'RSI',
    strength: 6,
    price: '$145.30',
    detected: '30 minutes ago',
    signals: ['Sell', 'Trend Reversal']
  },
  {
    id: 4,
    pair: 'BNB/USDT',
    timeframe: '4h',
    type: 'Hidden Bullish',
    indicator: 'RSI',
    strength: 7,
    price: '$540',
    detected: '4 hours ago',
    signals: ['Buy', 'Trend Continuation']
  },
  {
    id: 5,
    pair: 'XRP/USDT',
    timeframe: '1d',
    type: 'Regular Bullish',
    indicator: 'MACD',
    strength: 9,
    price: '$0.52',
    detected: '1 day ago',
    signals: ['Buy', 'Trend Reversal']
  },
  {
    id: 6,
    pair: 'ADA/USDT',
    timeframe: '1d',
    type: 'Regular Bearish',
    indicator: 'RSI',
    strength: 8,
    price: '$0.48',
    detected: '6 hours ago',
    signals: ['Sell', 'Trend Reversal']
  }
];

// Divergence types for filtering
const divergenceTypes = [
  { id: 'all', name: 'All Types' },
  { id: 'regular bullish', name: 'Regular Bullish' },
  { id: 'regular bearish', name: 'Regular Bearish' },
  { id: 'hidden bullish', name: 'Hidden Bullish' },
  { id: 'hidden bearish', name: 'Hidden Bearish' }
];

// Indicator types for filtering
const indicatorTypes = [
  { id: 'all', name: 'All Indicators' },
  { id: 'rsi', name: 'RSI' },
  { id: 'macd', name: 'MACD' },
  { id: 'cci', name: 'CCI' },
  { id: 'stoch', name: 'Stochastic' }
];

const DivergencesAnalysis = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedIndicator, setSelectedIndicator] = useState('all');
  const [selectedPair, setSelectedPair] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [activeDivergence, setActiveDivergence] = useState(null);

  // Filter divergences based on selected filters
  const filteredDivergences = divergenceData.filter(divergence => {
    if (selectedPair !== 'all' && divergence.pair !== selectedPair) return false;
    if (selectedTimeframe !== 'all' && divergence.timeframe !== selectedTimeframe) return false;
    if (selectedType !== 'all' && divergence.type.toLowerCase() !== selectedType) return false;
    if (selectedIndicator !== 'all' && divergence.indicator.toLowerCase() !== selectedIndicator) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Divergences Analysis</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Divergence Type</label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {divergenceTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Indicator</label>
          <div className="relative">
            <select
              value={selectedIndicator}
              onChange={(e) => setSelectedIndicator(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {indicatorTypes.map(indicator => (
                <option key={indicator.id} value={indicator.id}>{indicator.name}</option>
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

      {/* Current Divergences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDivergences.map(divergence => (
          <div 
            key={divergence.id} 
            className={`card p-4 cursor-pointer transition-all ${
              activeDivergence === divergence.id ? 'ring-2 ring-primary-500' : 'hover:bg-dark-600'
            }`}
            onClick={() => setActiveDivergence(activeDivergence === divergence.id ? null : divergence.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{divergence.pair}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400 mr-2">{divergence.timeframe}</span>
                  <span className={`text-sm px-2 py-0.5 rounded ${
                    divergence.type.includes('Bullish') 
                      ? 'bg-green-500 bg-opacity-20 text-green-500'
                      : 'bg-red-500 bg-opacity-20 text-red-500'
                  }`}>
                    {divergence.type}
                  </span>
                </div>
              </div>
              
              <div className="bg-dark-600 px-2 py-1 rounded">
                <div className="text-xs text-gray-400">Indicator</div>
                <div className="text-sm font-medium">{divergence.indicator}</div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Price:</span>
                <span>{divergence.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Detected:</span>
                <span>{divergence.detected}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Strength:</span>
                <div className="flex items-center">
                  {[...Array(10)].map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-3 mx-0.5 rounded-sm ${
                        idx < divergence.strength 
                          ? divergence.type.includes('Bullish')
                            ? 'bg-green-500'
                            : 'bg-red-500'
                          : 'bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {divergence.signals.map((signal, idx) => (
                <span 
                  key={idx} 
                  className={`px-2 py-1 text-xs rounded ${
                    signal === 'Buy' 
                      ? 'bg-green-500 bg-opacity-20 text-green-500' 
                      : signal === 'Sell'
                        ? 'bg-red-500 bg-opacity-20 text-red-500'
                        : 'bg-blue-500 bg-opacity-20 text-blue-500'
                  }`}
                >
                  {signal}
                </span>
              ))}
            </div>

            {activeDivergence === divergence.id && (
              <div className="mt-4 pt-4 border-t border-dark-500">
                <div className="bg-dark-600 rounded p-3 text-sm">
                  <div className="font-medium mb-2">Trading strategy:</div>
                  <p className="text-gray-300">
                    {divergence.type.includes('Regular') 
                      ? "Regular divergence signals potential trend reversal. Consider entry with confirmation." 
                      : "Hidden divergence signals trend continuation. Wait for price action confirmation."}
                  </p>
                </div>
                <button className="w-full mt-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
                  View Chart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divergence Education */}
      <div className="card p-5">
        <h2 className="text-lg font-semibold mb-4">Understanding Divergences</h2>
        <p className="text-gray-300 mb-4">
          A divergence occurs when price action and an indicator move in opposite directions, signaling potential reversals or trend continuations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div>
            <h3 className="font-medium mb-3">Regular Divergence</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <div>
                  <p className="text-sm font-medium text-green-500">Regular Bullish Divergence</p>
                  <p className="text-xs text-gray-400">Lower lows in price but higher lows in indicator</p>
                  <p className="text-xs text-gray-400">Signals potential bullish reversal</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <div>
                  <p className="text-sm font-medium text-red-500">Regular Bearish Divergence</p>
                  <p className="text-xs text-gray-400">Higher highs in price but lower highs in indicator</p>
                  <p className="text-xs text-gray-400">Signals potential bearish reversal</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Hidden Divergence</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                <div>
                  <p className="text-sm font-medium text-green-500">Hidden Bullish Divergence</p>
                  <p className="text-xs text-gray-400">Higher lows in price but lower lows in indicator</p>
                  <p className="text-xs text-gray-400">Signals continuation of bullish trend</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                <div>
                  <p className="text-sm font-medium text-red-500">Hidden Bearish Divergence</p>
                  <p className="text-xs text-gray-400">Lower highs in price but higher highs in indicator</p>
                  <p className="text-xs text-gray-400">Signals continuation of bearish trend</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-3">Best Indicators for Divergence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">RSI</div>
              <p className="text-xs text-gray-400">Relative Strength Index</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">MACD</div>
              <p className="text-xs text-gray-400">Moving Average Convergence Divergence</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">Stochastic</div>
              <p className="text-xs text-gray-400">Stochastic Oscillator</p>
            </div>
            <div className="bg-dark-600 p-3 rounded-lg">
              <div className="font-medium">CCI</div>
              <p className="text-xs text-gray-400">Commodity Channel Index</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivergencesAnalysis;