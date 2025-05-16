import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cryptoPairs, timeframes } from '../mockData';

// Mock volume analysis data
const volumeData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    timeframe: '1d',
    volume: '$24.5B',
    change: '+35%',
    vwap: '$65,820',
    obv: 'Rising',
    volumeProfiles: ['High at $66K', 'Low at $63K'],
    signals: ['Volume Breakout', 'Accumulation']
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    timeframe: '4h',
    volume: '$5.2B',
    change: '+18%',
    vwap: '$3,540',
    obv: 'Rising',
    volumeProfiles: ['High at $3.6K', 'Support at $3.4K'],
    signals: ['Volume Spike', 'Accumulation']
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    timeframe: '1h',
    volume: '$850M',
    change: '-12%',
    vwap: '$142.80',
    obv: 'Declining',
    volumeProfiles: ['Resistance at $146', 'Support at $140'],
    signals: ['Declining Volume', 'Distribution']
  },
  {
    id: 4,
    pair: 'BNB/USDT',
    timeframe: '1d',
    volume: '$1.2B',
    change: '+8%',
    vwap: '$535.50',
    obv: 'Neutral',
    volumeProfiles: ['High at $545', 'Low at $525'],
    signals: ['Normal Volume', 'Consolidation']
  },
  {
    id: 5,
    pair: 'XRP/USDT',
    timeframe: '1d',
    volume: '$980M',
    change: '+65%',
    vwap: '$0.53',
    obv: 'Rising Sharply',
    volumeProfiles: ['Peak at $0.54', 'Support at $0.48'],
    signals: ['Volume Climax', 'Accumulation']
  },
  {
    id: 6,
    pair: 'ADA/USDT',
    timeframe: '4h',
    volume: '$530M',
    change: '-5%',
    vwap: '$0.47',
    obv: 'Declining',
    volumeProfiles: ['Resistance at $0.49', 'Low at $0.45'],
    signals: ['Dying Volume', 'Distribution']
  }
];

// Volume patterns for filtering
const volumePatterns = [
  { id: 'all', name: 'All Patterns' },
  { id: 'rising', name: 'Rising Volume' },
  { id: 'declining', name: 'Declining Volume' },
  { id: 'breakout', name: 'Volume Breakouts' },
  { id: 'climax', name: 'Volume Climax' },
  { id: 'divergence', name: 'Volume Divergence' }
];

// Signals for filtering
const volumeSignals = [
  { id: 'all', name: 'All Signals' },
  { id: 'accumulation', name: 'Accumulation' },
  { id: 'distribution', name: 'Distribution' },
  { id: 'consolidation', name: 'Consolidation' },
  { id: 'breakout', name: 'Breakout' }
];

const VolumeAnalysis = () => {
  const { t } = useTranslation();
  const [selectedPattern, setSelectedPattern] = useState('all');
  const [selectedSignal, setSelectedSignal] = useState('all');
  const [selectedPair, setSelectedPair] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [activeVolume, setActiveVolume] = useState(null);

  // Filter volume data based on selected filters
  // This is a simplified filter - in a real app we'd have more sophisticated filtering
  const filteredVolume = volumeData.filter(item => {
    if (selectedPair !== 'all' && item.pair !== selectedPair) return false;
    if (selectedTimeframe !== 'all' && item.timeframe !== selectedTimeframe) return false;
    if (selectedPattern !== 'all') {
      if (selectedPattern === 'rising' && !item.obv.toLowerCase().includes('rising')) return false;
      if (selectedPattern === 'declining' && !item.obv.toLowerCase().includes('declining')) return false;
      if (selectedPattern === 'breakout' && !item.signals.some(s => s.toLowerCase().includes('breakout'))) return false;
      if (selectedPattern === 'climax' && !item.signals.some(s => s.toLowerCase().includes('climax'))) return false;
      if (selectedPattern === 'divergence' && !item.signals.some(s => s.toLowerCase().includes('divergence'))) return false;
    }
    if (selectedSignal !== 'all') {
      if (!item.signals.some(s => s.toLowerCase().includes(selectedSignal))) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Volume Analysis</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Volume Pattern</label>
          <div className="relative">
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {volumePatterns.map(pattern => (
                <option key={pattern.id} value={pattern.id}>{pattern.name}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="card">
          <label className="block text-sm text-gray-400 mb-2">Volume Signal</label>
          <div className="relative">
            <select
              value={selectedSignal}
              onChange={(e) => setSelectedSignal(e.target.value)}
              className="appearance-none w-full bg-dark-600 p-2.5 pr-10 rounded border border-dark-500"
            >
              {volumeSignals.map(signal => (
                <option key={signal.id} value={signal.id}>{signal.name}</option>
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

      {/* Volume Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVolume.map(volume => (
          <div 
            key={volume.id} 
            className={`card p-4 cursor-pointer transition-all ${
              activeVolume === volume.id ? 'ring-2 ring-primary-500' : 'hover:bg-dark-600'
            }`}
            onClick={() => setActiveVolume(activeVolume === volume.id ? null : volume.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{volume.pair}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400 mr-2">{volume.timeframe}</span>
                  <span className={`text-sm px-2 py-0.5 rounded ${
                    volume.change.startsWith('+') 
                      ? 'bg-green-500 bg-opacity-20 text-green-500'
                      : 'bg-red-500 bg-opacity-20 text-red-500'
                  }`}>
                    {volume.change}
                  </span>
                </div>
              </div>
              
              <div className="bg-dark-600 px-2 py-1 rounded">
                <div className="text-xs text-gray-400">Volume</div>
                <div className="text-sm font-medium">{volume.volume}</div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div>
                <div className="text-xs text-gray-400">VWAP</div>
                <div className="text-sm">{volume.vwap}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">OBV</div>
                <div className={`text-sm ${
                  volume.obv.toLowerCase().includes('rising')
                    ? 'text-green-500'
                    : volume.obv.toLowerCase().includes('declining')
                      ? 'text-red-500'
                      : 'text-gray-300'
                }`}>{volume.obv}</div>
              </div>
            </div>

            <div className="mt-3">
              <div className="text-xs text-gray-400 mb-1">Volume Profiles</div>
              <div className="space-y-1">
                {volume.volumeProfiles.map((profile, idx) => (
                  <div key={idx} className="text-xs bg-dark-600 px-2 py-1 rounded">{profile}</div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <div className="text-xs text-gray-400 mb-1">Signals</div>
              <div className="flex flex-wrap gap-2">
                {volume.signals.map((signal, idx) => (
                  <span 
                    key={idx} 
                    className={`px-2 py-1 text-xs rounded ${
                      signal.includes('Accumulation') || signal.includes('Breakout')
                        ? 'bg-green-500 bg-opacity-20 text-green-500' 
                        : signal.includes('Distribution') || signal.includes('Dying')
                          ? 'bg-red-500 bg-opacity-20 text-red-500'
                          : 'bg-blue-500 bg-opacity-20 text-blue-500'
                    }`}
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            {activeVolume === volume.id && (
              <div className="mt-4 pt-4 border-t border-dark-500">
                <div className="bg-dark-600 rounded p-3 text-sm">
                  <div className="font-medium mb-2">Trading insight:</div>
                  <p className="text-gray-300">
                    {volume.obv.toLowerCase().includes('rising')
                      ? "Increasing volume confirms the trend. Consider position entries in the direction of the trend."
                      : volume.obv.toLowerCase().includes('declining')
                        ? "Decreasing volume suggests weakening trend. Be cautious with new positions."
                        : "Neutral volume suggests consolidation. Wait for breakout confirmation."}
                  </p>
                </div>
                <button className="w-full mt-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
                  View Volume Chart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Volume Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">Volume Indicators</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Volume</h3>
              <p className="text-sm text-gray-300">
                Basic measure of trading activity. Higher volume suggests stronger trends and more significant price moves.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">On-Balance Volume (OBV)</h3>
              <p className="text-sm text-gray-300">
                Cumulative indicator that adds volume on up days and subtracts volume on down days. Used to confirm price trends.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Volume-Weighted Average Price (VWAP)</h3>
              <p className="text-sm text-gray-300">
                Average price weighted by volume. Important reference for intraday traders to determine value.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Volume Profile</h3>
              <p className="text-sm text-gray-300">
                Shows trading activity at specific price levels. Identifies support/resistance based on where most trading has occurred.
              </p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">Volume Patterns</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
              <div>
                <p className="text-sm font-medium">Volume Breakout</p>
                <p className="text-xs text-gray-400">Sharp increase in volume accompanying a price breakout. Confirms the strength of the breakout.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
              <div>
                <p className="text-sm font-medium">Volume Climax</p>
                <p className="text-xs text-gray-400">Extreme spike in volume often marking the end of a trend. May indicate exhaustion or capitulation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <div>
                <p className="text-sm font-medium">Volume Divergence</p>
                <p className="text-xs text-gray-400">When price makes new highs/lows but volume doesn't confirm. Suggests potential trend weakness.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
              <div>
                <p className="text-sm font-medium">Decreasing Volume</p>
                <p className="text-xs text-gray-400">Gradual decrease in volume during a trend. Often precedes consolidation or reversal.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
              <div>
                <p className="text-sm font-medium">Churn</p>
                <p className="text-xs text-gray-400">High volume but little price movement. Often occurs at major support/resistance areas.</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-3">Trading Tips</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Volume precedes price - volume often increases before significant price movements</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Breakouts with high volume are more reliable than those with low volume</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Volume should increase in the direction of the trend in healthy markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Low volume during price rises in a downtrend often signals a false rally</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeAnalysis;