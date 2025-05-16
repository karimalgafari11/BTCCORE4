import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cryptoPairs, timeframes } from '../mockData';

// Chart mock pattern data
const patternData = [
  {
    id: 1,
    name: 'Head and Shoulders',
    description: 'A bearish reversal pattern that signals a bullish-to-bearish trend change',
    success_rate: 75,
    timeframes: ['4h', '1d'],
    pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT'],
  },
  {
    id: 2,
    name: 'Double Top',
    description: 'A bearish reversal pattern with two consecutive peaks of similar height',
    success_rate: 68,
    timeframes: ['1h', '4h', '1d'],
    pairs: ['BTC/USDT', 'ETH/USDT'],
  },
  {
    id: 3,
    name: 'Cup and Handle',
    description: 'A bullish continuation pattern resembling a cup with a handle',
    success_rate: 83,
    timeframes: ['1d', '1w'],
    pairs: ['BTC/USDT', 'ETH/USDT', 'BNB/USDT'],
  },
  {
    id: 4,
    name: 'Ascending Triangle',
    description: 'A bullish continuation pattern with a flat upper trendline and rising lower trendline',
    success_rate: 78,
    timeframes: ['4h', '1d'],
    pairs: ['BTC/USDT', 'ETH/USDT'],
  },
  {
    id: 5,
    name: 'Bullish Flag',
    description: 'A bullish continuation pattern resembling a flag on a pole',
    success_rate: 72,
    timeframes: ['1h', '4h'],
    pairs: ['SOL/USDT', 'BNB/USDT', 'XRP/USDT'],
  },
  {
    id: 6,
    name: 'Descending Triangle',
    description: 'A bearish continuation pattern with a flat lower trendline and descending upper trendline',
    success_rate: 70,
    timeframes: ['4h', '1d'],
    pairs: ['ADA/USDT', 'DOT/USDT'],
  }
];

// All pattern types for filter
const patternTypes = [
  { id: 'all', name: 'All Patterns' },
  { id: 'bullish', name: 'Bullish Patterns' },
  { id: 'bearish', name: 'Bearish Patterns' },
  { id: 'reversal', name: 'Reversal Patterns' },
  { id: 'continuation', name: 'Continuation Patterns' }
];

const PatternsAnalysis = () => {
  const { t } = useTranslation();
  const [selectedPatternType, setSelectedPatternType] = useState('all');
  const [selectedPair, setSelectedPair] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [activePattern, setActivePattern] = useState(null);

  // Filter patterns based on selected filters
  const filteredPatterns = patternData.filter(pattern => {
    if (selectedPair !== 'all' && !pattern.pairs.includes(selectedPair)) return false;
    if (selectedTimeframe !== 'all' && !pattern.timeframes.includes(selectedTimeframe)) return false;
    // Pattern type filtering is simplified for now
    // In a real implementation, we would categorize patterns properly
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Chart Patterns Analysis</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Pattern Type</label>
          <div className="relative">
            <select
              value={selectedPatternType}
              onChange={(e) => setSelectedPatternType(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {patternTypes.map(type => (
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

      {/* Patterns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPatterns.map(pattern => (
          <div 
            key={pattern.id} 
            className={`card p-4 cursor-pointer transition-all ${
              activePattern === pattern.id ? 'ring-2 ring-primary-500' : 'hover:bg-dark-600'
            }`}
            onClick={() => setActivePattern(activePattern === pattern.id ? null : pattern.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{pattern.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{pattern.description}</p>
              </div>
              <div className="bg-primary-500 bg-opacity-20 text-primary-500 px-2 py-1 rounded text-sm">
                {pattern.success_rate}% success
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-400 mb-2">Common timeframes</div>
              <div className="flex flex-wrap gap-2">
                {pattern.timeframes.map((tf, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-dark-600 rounded">{tf}</span>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <div className="text-xs text-gray-400 mb-2">Recent pairs</div>
              <div className="flex flex-wrap gap-2">
                {pattern.pairs.map((pair, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-dark-600 rounded">{pair}</span>
                ))}
              </div>
            </div>

            {activePattern === pattern.id && (
              <div className="mt-4 pt-4 border-t border-dark-500">
                <div className="bg-dark-600 rounded p-3 text-sm">
                  <div className="font-medium mb-2">Trading strategy:</div>
                  <p className="text-gray-300">
                    {pattern.id % 2 === 0 ? 
                      "Wait for pattern completion, confirm with volume, place entry on breakout with stop loss below support." :
                      "Enter after pattern confirmation, set stop loss at pattern low, target profit at 1:2 risk-reward ratio."}
                  </p>
                </div>
                <button className="w-full mt-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
                  View Detection Guide
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pattern Education Section */}
      <div className="card p-5">
        <h2 className="text-lg font-semibold mb-4">Pattern Detection Training</h2>
        <p className="text-gray-300 mb-4">
          Learn how to identify and trade chart patterns with our interactive guides and examples.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-600 rounded-lg p-4">
            <div className="font-medium mb-2">Beginner Guide</div>
            <p className="text-sm text-gray-400 mb-3">Introduction to basic chart patterns and their significance</p>
            <button className="w-full py-1.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
              Start Learning
            </button>
          </div>

          <div className="bg-dark-600 rounded-lg p-4">
            <div className="font-medium mb-2">Practice Scenarios</div>
            <p className="text-sm text-gray-400 mb-3">Test your pattern recognition skills on historical charts</p>
            <button className="w-full py-1.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
              Start Practice
            </button>
          </div>

          <div className="bg-dark-600 rounded-lg p-4">
            <div className="font-medium mb-2">Advanced Patterns</div>
            <p className="text-sm text-gray-400 mb-3">Complex patterns with higher accuracy for experienced traders</p>
            <button className="w-full py-1.5 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors text-sm">
              Premium Feature
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsAnalysis;