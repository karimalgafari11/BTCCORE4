import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CandlestickChart = ({ 
  data, 
  pair = 'BTC/USDT', 
  timeframe = '1h', 
  height = 400, 
  width = '100%',
  showVolume = true,
  theme = 'dark'
}) => {
  // Format the data for ApexCharts
  const ohlc = data.map(item => ({
    x: new Date(item.time * 1000),
    y: [item.open, item.high, item.low, item.close]
  }));
  
  const volume = data.map(item => ({
    x: new Date(item.time * 1000),
    y: item.volume,
    fillColor: item.close >= item.open ? '#26a69a' : '#ef5350'
  }));
  
  // Chart options
  const options = {
    chart: {
      type: 'candlestick',
      height: height,
      id: 'candles',
      toolbar: {
        autoSelected: 'pan',
        show: true
      },
      background: 'transparent',
      foreColor: theme === 'dark' ? '#D9D9D9' : '#333333',
      zoom: {
        enabled: true
      },
    },
    title: {
      text: `${pair} - ${timeframe}`,
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: theme === 'dark' ? '#D9D9D9' : '#333333'
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: theme === 'dark' ? '#D9D9D9' : '#333333'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(2);
        },
        style: {
          colors: theme === 'dark' ? '#D9D9D9' : '#333333'
        }
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      borderColor: theme === 'dark' ? '#1e222d' : '#e0e0e0',
      strokeDashArray: 2,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#26a69a',
          downward: '#ef5350'
        },
        wick: {
          useFillColor: true,
        }
      }
    },
    tooltip: {
      theme: theme,
      intersect: false,
      shared: false
    }
  };
  
  // Volume chart options
  const volumeOptions = {
    chart: {
      height: 160,
      type: 'bar',
      brush: {
        enabled: true,
        target: 'candles'
      },
      selection: {
        enabled: true,
        xaxis: {
          min: data.length > 0 ? new Date(data[0].time * 1000).getTime() : null,
          max: data.length > 0 ? new Date(data[data.length - 1].time * 1000).getTime() : null
        }
      },
      background: 'transparent',
      foreColor: theme === 'dark' ? '#D9D9D9' : '#333333',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
        colors: {
          ranges: [{
            from: 0,
            to: 10000000000,
            color: '#546E7A'
          }]
        }
      }
    },
    stroke: {
      width: 0
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      borderColor: theme === 'dark' ? '#1e222d' : '#e0e0e0',
    },
    tooltip: {
      theme: theme,
      intersect: false,
      shared: false
    },
    title: {
      text: 'Volume',
      align: 'left',
      style: {
        fontSize: '14px',
        color: theme === 'dark' ? '#D9D9D9' : '#333333'
      }
    }
  };
  
  return (
    <div className={`chart-container ${theme}`}>
      <div className="main-chart">
        <ReactApexChart
          options={options}
          series={[{ data: ohlc }]}
          type="candlestick"
          height={height}
          width={width}
          id="main-chart"
        />
      </div>
      
      {showVolume && (
        <div className="volume-chart mt-2">
          <ReactApexChart
            options={volumeOptions}
            series={[{ name: 'Volume', data: volume }]}
            type="bar"
            height={160}
            width={width}
            id="volume-chart"
          />
        </div>
      )}
    </div>
  );
};

export default CandlestickChart;