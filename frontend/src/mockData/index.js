// Mock crypto pairs
export const cryptoPairs = [
  { value: 'BTC/USDT', label: 'BTC/USDT' },
  { value: 'ETH/USDT', label: 'ETH/USDT' },
  { value: 'SOL/USDT', label: 'SOL/USDT' },
  { value: 'BNB/USDT', label: 'BNB/USDT' },
  { value: 'XRP/USDT', label: 'XRP/USDT' }
];

// Mock timeframes
export const timeframes = [
  { value: '1m', label: '1m' },
  { value: '5m', label: '5m' },
  { value: '15m', label: '15m' },
  { value: '30m', label: '30m' },
  { value: '1h', label: '1h' },
  { value: '4h', label: '4h' },
  { value: '1d', label: '1d' },
  { value: '1w', label: '1w' },
];

// Mock market overview data
export const marketOverview = {
  status: 'bullish',
  btcDominance: 47.8,
  totalMarketCap: '$2.38T',
  dailyVolume: '$126B',
  fearGreedIndex: 72
};

// Mock trend scanner results
export const trendScannerResults = [
  {
    id: 1,
    pair: 'BTC/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bullish',
    strength: 82,
    signals: ['MA Cross', 'RSI Bullish']
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bullish',
    strength: 76,
    signals: ['MACD Bullish', 'Volume Increase']
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bullish',
    strength: 85,
    signals: ['MA Cross', 'RSI Bullish', 'Volume Increase']
  },
  {
    id: 4,
    pair: 'XRP/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'neutral',
    strength: 50,
    signals: ['Range Bound']
  },
  {
    id: 5,
    pair: 'ADA/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bearish',
    strength: 65,
    signals: ['MA Cross Down', 'RSI Bearish']
  },
  {
    id: 6,
    pair: 'DOT/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bearish',
    strength: 60,
    signals: ['MACD Bearish', 'Lower Highs']
  },
  {
    id: 7,
    pair: 'AVAX/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    trend: 'bullish',
    strength: 78,
    signals: ['Breakout', 'Volume Spike']
  }
];

// Mock price action scanner patterns
export const priceActionPatterns = [
  {
    id: 1,
    pair: 'BTC/USDT',
    exchange: 'Binance',
    timeframe: '1d',
    pattern: 'Bullish Engulfing',
    significance: 'Strong',
    detectedAt: '2023-06-10T14:30:00Z'
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    pattern: 'Double Bottom',
    significance: 'Very Strong',
    detectedAt: '2023-06-10T18:00:00Z'
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    exchange: 'Binance',
    timeframe: '1d',
    pattern: 'Bullish Flag',
    significance: 'Strong',
    detectedAt: '2023-06-09T00:00:00Z'
  },
  {
    id: 4,
    pair: 'BNB/USDT',
    exchange: 'Binance',
    timeframe: '4h',
    pattern: 'Ascending Triangle',
    significance: 'Moderate',
    detectedAt: '2023-06-10T16:00:00Z'
  },
  {
    id: 5,
    pair: 'DOT/USDT',
    exchange: 'Binance',
    timeframe: '1d',
    pattern: 'Bearish Harami',
    significance: 'Moderate',
    detectedAt: '2023-06-09T00:00:00Z'
  }
];

// Mock tracked coins data
export const trackedCoins = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 65873.42,
    change24h: 2.5,
    marketCap: 1285790000000,
    volume: 42789000000,
    status: 'bullish',
    alerts: [
      {
        id: 1,
        type: 'price',
        condition: 'above',
        value: '$65,000',
        triggered: true,
        date: 'Today at 9:45 AM'
      }
    ]
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3521.78,
    change24h: 3.2,
    marketCap: 425360000000,
    volume: 18547000000,
    status: 'bullish',
    alerts: [
      {
        id: 2,
        type: 'price',
        condition: 'above',
        value: '$3,500',
        triggered: true,
        date: 'Today at 10:12 AM'
      }
    ]
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 142.53,
    change24h: 4.8,
    marketCap: 67450000000,
    volume: 5621000000,
    status: 'bullish',
    alerts: []
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.52,
    change24h: -1.2,
    marketCap: 18740000000,
    volume: 875000000,
    status: 'bearish',
    alerts: []
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: 6.73,
    change24h: -0.5,
    marketCap: 9250000000,
    volume: 432000000,
    status: 'neutral',
    alerts: [
      {
        id: 3,
        type: 'volume',
        condition: 'above',
        value: '$500M',
        triggered: false
      }
    ]
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

// Mock volume analysis data
export const volumeAnalysisData = {
  totalVolume: 126800000000, // $126.8B
  volumeChange: 7.2,
  topGainer: 'Binance',
  topGainerPercent: 12.5,
  topLoser: 'Gate.io',
  topLoserPercent: -8.3,
  unusualVolumeCount: 14,
  
  exchanges: [
    {
      name: 'Binance',
      location: 'Global',
      volume24h: 43560000000, // $43.56B
      change: 12.5,
      marketShare: 34.4,
      coins: 752,
      trustScore: 9
    },
    {
      name: 'Coinbase',
      location: 'USA',
      volume24h: 14980000000, // $14.98B
      change: 3.2,
      marketShare: 11.8,
      coins: 478,
      trustScore: 8
    },
    {
      name: 'Kraken',
      location: 'USA',
      volume24h: 7840000000, // $7.84B
      change: -1.3,
      marketShare: 6.2,
      coins: 372,
      trustScore: 8
    },
    {
      name: 'KuCoin',
      location: 'Seychelles',
      volume24h: 6520000000, // $6.52B
      change: 5.6,
      marketShare: 5.1,
      coins: 687,
      trustScore: 7
    },
    {
      name: 'OKX',
      location: 'Seychelles',
      volume24h: 9780000000, // $9.78B
      change: 2.8,
      marketShare: 7.7,
      coins: 638,
      trustScore: 7
    },
    {
      name: 'Bybit',
      location: 'UAE',
      volume24h: 8230000000, // $8.23B
      change: 4.7,
      marketShare: 6.5,
      coins: 431,
      trustScore: 6
    },
    {
      name: 'Gate.io',
      location: 'Cayman Islands',
      volume24h: 4120000000, // $4.12B
      change: -8.3,
      marketShare: 3.2,
      coins: 1453,
      trustScore: 6
    }
  ],
  
  topPairs: [
    {
      pair: 'BTC/USDT',
      exchange: 'Binance',
      price: 41289.75,
      volume24h: 12750000000, // $12.75B
      volumeChange: 8.6
    },
    {
      pair: 'ETH/USDT',
      exchange: 'Binance',
      price: 2198.43,
      volume24h: 8430000000, // $8.43B
      volumeChange: 5.2
    },
    {
      pair: 'SOL/USDT',
      exchange: 'Binance',
      price: 98.76,
      volume24h: 3210000000, // $3.21B
      volumeChange: 14.7
    },
    {
      pair: 'XRP/USDT',
      exchange: 'Binance',
      price: 0.5423,
      volume24h: 1870000000, // $1.87B
      volumeChange: -2.3
    },
    {
      pair: 'BNB/USDT',
      exchange: 'Binance',
      price: 387.21,
      volume24h: 2340000000, // $2.34B
      volumeChange: 6.8
    },
    {
      pair: 'DOGE/USDT',
      exchange: 'Binance',
      price: 0.0876,
      volume24h: 1540000000, // $1.54B
      volumeChange: 11.2
    }
  ]
};