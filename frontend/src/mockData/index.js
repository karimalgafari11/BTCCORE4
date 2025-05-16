// Mock data for the application

// Currency pairs
export const cryptoPairs = [
  { value: 'BTC/USDT', label: 'BTC/USDT' },
  { value: 'ETH/USDT', label: 'ETH/USDT' },
  { value: 'SOL/USDT', label: 'SOL/USDT' },
  { value: 'BNB/USDT', label: 'BNB/USDT' },
  { value: 'XRP/USDT', label: 'XRP/USDT' },
  { value: 'ADA/USDT', label: 'ADA/USDT' },
  { value: 'AVAX/USDT', label: 'AVAX/USDT' },
  { value: 'DOGE/USDT', label: 'DOGE/USDT' },
  { value: 'SHIB/USDT', label: 'SHIB/USDT' },
  { value: 'DOT/USDT', label: 'DOT/USDT' },
  { value: 'MATIC/USDT', label: 'MATIC/USDT' },
  { value: 'LTC/USDT', label: 'LTC/USDT' },
];

// Timeframes
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

// Technical indicators
export const indicators = [
  { value: 'macd', label: 'MACD' },
  { value: 'rsi', label: 'RSI' },
  { value: 'cci', label: 'CCI' },
  { value: 'bbands', label: 'Bollinger Bands' },
  { value: 'ema', label: 'EMA' },
  { value: 'sma', label: 'SMA' },
  { value: 'adx', label: 'ADX' },
  { value: 'stoch', label: 'Stochastic' },
];

// Trend scanner data
export const trendScannerData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    timeframe: '4h',
    trend: 'bullish',
    strength: 8,
    signals: {
      macd: 'buy',
      rsi: 'neutral',
      ema: 'buy'
    }
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    timeframe: '1h',
    trend: 'bullish',
    strength: 7,
    signals: {
      macd: 'buy',
      rsi: 'buy',
      ema: 'buy'
    }
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    timeframe: '1d',
    trend: 'bullish',
    strength: 9,
    signals: {
      macd: 'buy',
      rsi: 'buy',
      ema: 'buy'
    }
  },
  {
    id: 4,
    pair: 'XRP/USDT',
    timeframe: '4h',
    trend: 'bearish',
    strength: 6,
    signals: {
      macd: 'sell',
      rsi: 'sell',
      ema: 'neutral'
    }
  },
  {
    id: 5,
    pair: 'ADA/USDT',
    timeframe: '1h',
    trend: 'neutral',
    strength: 4,
    signals: {
      macd: 'neutral',
      rsi: 'neutral',
      ema: 'buy'
    }
  },
  {
    id: 6,
    pair: 'AVAX/USDT',
    timeframe: '1d',
    trend: 'bullish',
    strength: 7,
    signals: {
      macd: 'buy',
      rsi: 'neutral',
      ema: 'buy'
    }
  },
];

// Strategy data
export const strategiesData = [
  {
    id: 1,
    name: 'Golden Cross',
    description: 'EMA 50 crosses above EMA 200',
    pairs: ['BTC/USDT', 'ETH/USDT'],
    timeframes: ['4h', '1d'],
    indicators: ['ema'],
    conditions: ['EMA(50) > EMA(200)', 'Volume > 200%'],
    enabled: true
  },
  {
    id: 2,
    name: 'RSI Oversold',
    description: 'RSI drops below 30 and starts recovering',
    pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT'],
    timeframes: ['1h', '4h'],
    indicators: ['rsi'],
    conditions: ['RSI < 30', 'RSI(now) > RSI(prev)'],
    enabled: true
  },
  {
    id: 3,
    name: 'MACD Signal Cross',
    description: 'MACD line crosses above Signal line',
    pairs: ['BTC/USDT'],
    timeframes: ['1h'],
    indicators: ['macd'],
    conditions: ['MACD > Signal', 'Histogram increasing'],
    enabled: false
  }
];

// Cointracker data
export const cointrackerData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    exchange: 'Binance',
    indicators: ['Price breaks $60,000', 'Volume spike'],
    alert: true,
    status: 'enabled'
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    exchange: 'Bybit',
    indicators: ['RSI over 70', 'New ATH'],
    alert: true,
    status: 'enabled'
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    exchange: 'KuCoin',
    indicators: ['50% up from bottom', 'Support test'],
    alert: false,
    status: 'enabled'
  }
];

// Price Action Scanner data
export const priceActionData = [
  {
    id: 1,
    pair: 'BTC/USDT',
    timeframe: '1d',
    pattern: 'Engulfing Bullish',
    trend: 'bullish',
    strength: 8
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    timeframe: '4h',
    pattern: 'Doji',
    trend: 'neutral',
    strength: 5
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    timeframe: '1h',
    pattern: 'RSI Divergence',
    trend: 'bullish',
    strength: 7
  },
  {
    id: 4,
    pair: 'XRP/USDT',
    timeframe: '4h',
    pattern: 'Support Bounce',
    trend: 'bullish',
    strength: 6
  }
];

// Pumping Now data
export const pumpingData = [
  {
    id: 1,
    pair: 'PEPE/USDT',
    change: '16.8%',
    volume: '245%',
    timeframe: '1h',
    exchangeInfo: 'Binance'
  },
  {
    id: 2,
    pair: 'SHIB/USDT',
    change: '7.5%',
    volume: '178%',
    timeframe: '1h',
    exchangeInfo: 'Binance'
  },
  {
    id: 3,
    pair: 'APT/USDT',
    change: '5.2%',
    volume: '135%',
    timeframe: '1h',
    exchangeInfo: 'Bybit'
  },
  {
    id: 4,
    pair: 'DOGE/USDT',
    change: '4.1%',
    volume: '120%',
    timeframe: '1h',
    exchangeInfo: 'KuCoin'
  }
];

// Subscription plans
export const subscriptionPlans = [
  {
    id: 'free',
    name: 'Free Plan',
    price: 0,
    features: [
      'Basic TrendScanner',
      'Limited Strategy Maker',
      'Limited Cointracker',
      'Email alerts only',
      'Price Action Scanner'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 49.99,
    features: [
      'Full TrendScanner',
      'Advanced Strategy Maker',
      'Unlimited Cointracker',
      'Telegram & Email alerts',
      'Price Action Scanner',
      'Pumping Now scanner',
      'Priority support'
    ]
  }
];

// Market overview
export const marketOverview = {
  status: 'bullish', // 'bullish', 'bearish', or 'neutral'
  btcDominance: 43.2,
  totalMarketCap: '$2.45T',
  dailyVolume: '$127B',
  fearGreedIndex: 75
};