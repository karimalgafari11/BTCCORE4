import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cryptoPairs, timeframes } from '../mockData';
import { mockChartData } from '../mockData/chartData';
import CandlestickChart from '../components/Charts/CandlestickChart';

const ChartAnalysis = () => {
  const { t } = useTranslation();
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1h');
  const [selectedTool, setSelectedTool] = useState('crosshair');
  
  // Drawing tools
  const drawingTools = [
    { id: 'crosshair', name: 'Crosshair' },
    { id: 'line', name: 'Line' },
    { id: 'horizontal', name: 'Horizontal Line' },
    { id: 'rectangle', name: 'Rectangle' },
    { id: 'fibonacci', name: 'Fibonacci' },
    { id: 'text', name: 'Text' }
  ];
  
  // Chart types
  const chartTypes = [
    { id: 'candles', name: 'Candlesticks' },
    { id: 'line', name: 'Line' },
    { id: 'area', name: 'Area' },
    { id: 'bars', name: 'Bars' }
  ];
  
  // Indicators
  const indicators = [
    { id: 'ma', name: 'Moving Average' },
    { id: 'ema', name: 'EMA' },
    { id: 'rsi', name: 'RSI' },
    { id: 'macd', name: 'MACD' },
    { id: 'bollinger', name: 'Bollinger Bands' },
    { id: 'volume', name: 'Volume' }
  ];
  
  // Get chart data
  const chartData = mockChartData[selectedPair]?.[selectedTimeframe] || [];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('chart')}</h1>
      
      {/* Chart Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Pair</label>
          <div className="relative">
            <select
              value={selectedPair}
              onChange={(e) => setSelectedPair(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
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
              {timeframes.map(tf => (
                <option key={tf.value} value={tf.value}>{tf.label}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Drawing Tool</label>
          <div className="relative">
            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {drawingTools.map(tool => (
                <option key={tool.id} value={tool.id}>{tool.name}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Add Indicator</label>
          <div className="relative">
            <select
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
              defaultValue=""
            >
              <option value="" disabled>Select Indicator</option>
              {indicators.map(indicator => (
                <option key={indicator.id} value={indicator.id}>{indicator.name}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Chart Container */}
      <div className="card p-4">
        <CandlestickChart 
          data={chartData} 
          pair={selectedPair} 
          timeframe={selectedTimeframe} 
          height={500} 
          theme="dark"
          showVolume={true}
        />
      </div>
      
      {/* Additional Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">Chart Patterns</h2>
          <p className="text-gray-300 mb-4">
            Automatically detect chart patterns on your selected instrument.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="head-shoulders"
                className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
              />
              <label htmlFor="head-shoulders" className="text-sm">
                Head and Shoulders
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="double-top"
                className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
              />
              <label htmlFor="double-top" className="text-sm">
                Double Top/Bottom
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="triangles"
                className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
              />
              <label htmlFor="triangles" className="text-sm">
                Triangles (Ascending/Descending)
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rectangles"
                className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
              />
              <label htmlFor="rectangles" className="text-sm">
                Rectangles
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="channels"
                className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500 mr-2"
              />
              <label htmlFor="channels" className="text-sm">
                Channels
              </label>
            </div>
          </div>
          
          <button className="w-full mt-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
            Apply Pattern Detection
          </button>
        </div>
        
        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">Key Price Levels</h2>
          
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Support/Resistance Method</div>
            <div className="grid grid-cols-3 gap-2">
              <button className="py-1 text-sm bg-primary-500 text-white rounded">Fractals</button>
              <button className="py-1 text-sm bg-dark-600 hover:bg-dark-500 rounded">Swing</button>
              <button className="py-1 text-sm bg-dark-600 hover:bg-dark-500 rounded">Volume</button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="bg-dark-600 p-3 rounded flex justify-between items-center">
              <div>
                <div className="text-sm text-green-500">Support</div>
                <div className="font-medium">${selectedPair === 'BTC/USDT' ? '64,500' : selectedPair === 'ETH/USDT' ? '3,420' : '140.00'}</div>
              </div>
              <div className="text-xs text-gray-400">Strength: High</div>
              <button className="px-2 py-1 text-xs bg-dark-500 rounded">Show</button>
            </div>
            
            <div className="bg-dark-600 p-3 rounded flex justify-between items-center">
              <div>
                <div className="text-sm text-red-500">Resistance</div>
                <div className="font-medium">${selectedPair === 'BTC/USDT' ? '68,000' : selectedPair === 'ETH/USDT' ? '3,650' : '150.00'}</div>
              </div>
              <div className="text-xs text-gray-400">Strength: Medium</div>
              <button className="px-2 py-1 text-xs bg-dark-500 rounded">Show</button>
            </div>
            
            <div className="bg-dark-600 p-3 rounded flex justify-between items-center">
              <div>
                <div className="text-sm text-blue-500">Moving Average</div>
                <div className="font-medium">MA(200): ${selectedPair === 'BTC/USDT' ? '63,200' : selectedPair === 'ETH/USDT' ? '3,350' : '135.00'}</div>
              </div>
              <div className="text-xs text-gray-400">Key Level</div>
              <button className="px-2 py-1 text-xs bg-dark-500 rounded">Show</button>
            </div>
          </div>
          
          <button className="w-full mt-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
            Refresh Levels
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartAnalysis;