// Generate mock candlestick data for demo purposes
const generateMockCandlestickData = (symbol, timeframe, length = 100) => {
  const data = [];
  const now = new Date();
  
  // Different time intervals in milliseconds
  const intervals = {
    '1m': 60 * 1000,
    '5m': 5 * 60 * 1000,
    '15m': 15 * 60 * 1000,
    '30m': 30 * 60 * 1000,
    '1h': 60 * 60 * 1000,
    '4h': 4 * 60 * 60 * 1000,
    '1d': 24 * 60 * 60 * 1000,
    '1w': 7 * 24 * 60 * 60 * 1000,
  };
  
  const interval = intervals[timeframe] || intervals['1h'];
  
  // Base price depends on the symbol
  let basePrice;
  switch (symbol) {
    case 'BTC/USDT':
      basePrice = 65000;
      break;
    case 'ETH/USDT':
      basePrice = 3500;
      break;
    case 'SOL/USDT':
      basePrice = 140;
      break;
    case 'BNB/USDT':
      basePrice = 550;
      break;
    case 'XRP/USDT':
      basePrice = 0.5;
      break;
    default:
      basePrice = 100;
  }
  
  // Volatility depends on the symbol
  let volatility;
  switch (symbol) {
    case 'BTC/USDT':
      volatility = 0.02; // 2%
      break;
    case 'ETH/USDT':
      volatility = 0.025; // 2.5%
      break;
    case 'SOL/USDT':
      volatility = 0.035; // 3.5%
      break;
    default:
      volatility = 0.03; // 3%
  }
  
  // Generate data points
  let lastClose = basePrice;
  for (let i = 0; i < length; i++) {
    // Time for this candle
    const time = new Date(now.getTime() - (length - i) * interval);
    
    // Generate random price movements
    const change = lastClose * volatility * (Math.random() - 0.5);
    const open = lastClose;
    const close = open + change;
    const high = Math.max(open, close) + lastClose * volatility * Math.random() * 0.5;
    const low = Math.min(open, close) - lastClose * volatility * Math.random() * 0.5;
    
    // Volume is higher when price moves more
    const volume = basePrice * Math.abs(change / open) * 100 * (1 + Math.random());
    
    // Add data point
    data.push({
      time: Math.floor(time.getTime() / 1000),
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: parseFloat(volume.toFixed(2))
    });
    
    lastClose = close;
  }
  
  return data;
};

// Create mock data for different symbols and timeframes
export const mockChartData = {
  'BTC/USDT': {
    '1h': generateMockCandlestickData('BTC/USDT', '1h', 150),
    '4h': generateMockCandlestickData('BTC/USDT', '4h', 120),
    '1d': generateMockCandlestickData('BTC/USDT', '1d', 90)
  },
  'ETH/USDT': {
    '1h': generateMockCandlestickData('ETH/USDT', '1h', 150),
    '4h': generateMockCandlestickData('ETH/USDT', '4h', 120),
    '1d': generateMockCandlestickData('ETH/USDT', '1d', 90)
  },
  'SOL/USDT': {
    '1h': generateMockCandlestickData('SOL/USDT', '1h', 150),
    '4h': generateMockCandlestickData('SOL/USDT', '4h', 120),
    '1d': generateMockCandlestickData('SOL/USDT', '1d', 90)
  },
  'BNB/USDT': {
    '1h': generateMockCandlestickData('BNB/USDT', '1h', 150),
    '4h': generateMockCandlestickData('BNB/USDT', '4h', 120),
    '1d': generateMockCandlestickData('BNB/USDT', '1d', 90)
  },
  'XRP/USDT': {
    '1h': generateMockCandlestickData('XRP/USDT', '1h', 150),
    '4h': generateMockCandlestickData('XRP/USDT', '4h', 120),
    '1d': generateMockCandlestickData('XRP/USDT', '1d', 90)
  }
};