// Mock data for the dashboard
export const marketOverview = {
  status: 'bullish', // 'bullish', 'bearish', 'neutral'
  btcDominance: 46.5, 
  totalMarketCap: '$1.75T',
  dailyVolume: '$126.8B',
  fearGreedIndex: 72 // 0-100
};

// Mock coins data
export const trackedCoins = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 41289.75,
    change24h: 2.56,
    marketCap: 798432156740,
    volume: 28735124540,
    status: 'bullish',
    alerts: [
      { id: 'a1', type: 'price', condition: 'above', value: 42000, triggered: false },
      { id: 'a2', type: 'rsi', condition: 'above', value: 70, triggered: true, date: '2023-06-15' }
    ]
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2198.43,
    change24h: -1.23,
    marketCap: 262947583920,
    volume: 18392745321,
    status: 'neutral',
    alerts: [
      { id: 'a3', type: 'price', condition: 'below', value: 2000, triggered: false }
    ]
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    price: 98.76,
    change24h: 5.82,
    marketCap: 41293847321,
    volume: 3182938476,
    status: 'bullish',
    alerts: []
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.65,
    change24h: 1.05,
    marketCap: 22847362981,
    volume: 967483923,
    status: 'neutral',
    alerts: []
  },
  {
    id: 'polkadot',
    symbol: 'DOT',
    name: 'Polkadot',
    price: 7.32,
    change24h: -2.87,
    marketCap: 9362534897,
    volume: 534289763,
    status: 'bearish',
    alerts: []
  }
];

// Mock trend scanner data
export const trendScannerResults = [
  {
    id: 't1',
    pair: 'BTC/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bullish',
    strength: 87,
    since: '2023-06-10',
    signals: ['Golden Cross', 'Higher Lows', 'Bullish Engulfing']
  },
  {
    id: 't2',
    pair: 'ETH/USDT',
    exchange: 'Binance',
    timeframe: '1d',
    trend: 'neutral',
    strength: 52,
    since: '2023-06-01',
    signals: ['RSI Neutral', 'Consolidation']
  },
  {
    id: 't3',
    pair: 'SOL/USDT',
    exchange: 'Binance',
    timeframe: '1h',
    trend: 'bullish',
    strength: 92,
    since: '2023-06-14',
    signals: ['Volume Spike', 'Bullish Divergence']
  },
  {
    id: 't4',
    pair: 'ADA/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'neutral',
    strength: 48,
    since: '2023-06-05',
    signals: ['Range Bound', 'Low Volatility']
  },
  {
    id: 't5',
    pair: 'DOT/USDT',
    exchange: 'Binance',
    timeframe: '1d',
    trend: 'bearish',
    strength: 71,
    since: '2023-05-20',
    signals: ['Death Cross', 'Lower Highs', 'Lower Lows']
  }
];

// Mock strategies
export const strategies = [
  {
    id: 's1',
    name: 'BTC Breakout',
    description: 'Alert when BTC breaks above major resistance',
    coin: 'BTC',
    conditions: [
      { type: 'price', operator: 'above', value: 42000 },
      { type: 'volume', operator: 'above', value: '1.5x average' }
    ],
    timeframe: '4h',
    active: true,
    createdAt: '2023-06-01'
  },
  {
    id: 's2',
    name: 'ETH Golden Cross',
    description: 'Alert on MA crossover',
    coin: 'ETH',
    conditions: [
      { type: 'ma_cross', operator: 'crosses_above', value: { fast: 50, slow: 200 } }
    ],
    timeframe: '1d',
    active: true,
    createdAt: '2023-05-15'
  },
  {
    id: 's3',
    name: 'SOL RSI Oversold',
    description: 'Alert when SOL RSI goes below 30',
    coin: 'SOL',
    conditions: [
      { type: 'rsi', operator: 'below', value: 30 }
    ],
    timeframe: '4h',
    active: false,
    createdAt: '2023-06-10'
  }
];

// Mock price action patterns
export const priceActionPatterns = [
  {
    id: 'p1',
    pair: 'BTC/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    pattern: 'Bullish Engulfing',
    significance: 'Strong',
    detectedAt: '2023-06-15T08:00:00Z',
    priceAtDetection: 40123.45
  },
  {
    id: 'p2',
    pair: 'ETH/USDT',
    exchange: 'Binance',
    timeframe: '1d',
    pattern: 'Double Bottom',
    significance: 'Very Strong',
    detectedAt: '2023-06-10T00:00:00Z',
    priceAtDetection: 2056.78
  },
  {
    id: 'p3',
    pair: 'SOL/USDT',
    exchange: 'Binance',
    timeframe: '1h',
    pattern: 'Bullish Flag',
    significance: 'Moderate',
    detectedAt: '2023-06-16T16:00:00Z',
    priceAtDetection: 95.43
  },
  {
    id: 'p4',
    pair: 'DOT/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    pattern: 'Evening Star',
    significance: 'Strong',
    detectedAt: '2023-06-14T12:00:00Z',
    priceAtDetection: 7.65
  }
];

// Mock pumping coins
export const pumpingCoins = [
  {
    id: 'pump1',
    coin: 'INJ',
    name: 'Injective Protocol',
    timeframe: '1h',
    priceChange: 15.7,
    volumeChange: 312.4,
    currentPrice: 22.45,
    exchange: 'Binance'
  },
  {
    id: 'pump2',
    coin: 'FET',
    name: 'Fetch.ai',
    timeframe: '1h',
    priceChange: 12.3,
    volumeChange: 245.8,
    currentPrice: 1.78,
    exchange: 'Binance'
  },
  {
    id: 'pump3',
    coin: 'RNDR',
    name: 'Render Token',
    timeframe: '1h',
    priceChange: 8.9,
    volumeChange: 178.3,
    currentPrice: 4.32,
    exchange: 'Binance'
  }
];