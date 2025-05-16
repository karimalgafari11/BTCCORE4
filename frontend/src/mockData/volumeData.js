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