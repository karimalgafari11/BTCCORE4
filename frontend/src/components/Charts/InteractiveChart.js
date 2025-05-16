import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';

const InteractiveChart = ({ 
  data, 
  pair = 'BTC/USDT', 
  timeframe = '1h', 
  height = 400, 
  width = '100%',
  theme = 'dark',
  showVolume = true
}) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [chartObj, setChartObj] = useState(null);
  
  // Color theme
  const chartColors = {
    dark: {
      background: '#111111',
      text: '#D9D9D9',
      grid: '#1e222d',
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderColor: '#1E222D',
      volumeUpColor: 'rgba(38, 166, 154, 0.3)',
      volumeDownColor: 'rgba(239, 83, 80, 0.3)'
    },
    light: {
      background: '#FFFFFF',
      text: '#292929',
      grid: '#F0F3FA',
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderColor: '#E0E3EB',
      volumeUpColor: 'rgba(38, 166, 154, 0.3)',
      volumeDownColor: 'rgba(239, 83, 80, 0.3)'
    }
  };
  
  const colors = chartColors[theme];
  
  useEffect(() => {
    if (!chartContainerRef.current || !data || data.length === 0) return;
    
    // Clear previous chart if exists
    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }
    
    // Create new chart
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: height,
      layout: {
        background: { color: colors.background },
        textColor: colors.text,
      },
      grid: {
        vertLines: { color: colors.grid },
        horzLines: { color: colors.grid },
      },
      rightPriceScale: {
        borderColor: colors.borderColor,
      },
      timeScale: {
        borderColor: colors.borderColor,
        timeVisible: true,
      },
      crosshair: {
        mode: 0,
      },
    });
    
    // Save chart reference
    chartRef.current = chart;
    setChartObj(chart);
    
    // Add candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: colors.upColor,
      downColor: colors.downColor,
      borderVisible: false,
      wickUpColor: colors.upColor,
      wickDownColor: colors.downColor,
    });
    
    // Add volume series if enabled
    let volumeSeries = null;
    if (showVolume) {
      volumeSeries = chart.addHistogramSeries({
        color: '#26a69a',
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: '',
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });
    }
    
    // Set data
    const ohlcData = data.map(item => ({
      time: item.time,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close
    }));
    
    candlestickSeries.setData(ohlcData);
    
    // Set volume data if enabled
    if (showVolume && volumeSeries) {
      const volumeData = data.map(item => ({
        time: item.time,
        value: item.volume,
        color: item.close >= item.open ? colors.volumeUpColor : colors.volumeDownColor
      }));
      
      volumeSeries.setData(volumeData);
    }
    
    // Fit content to view all data
    chart.timeScale().fitContent();
    
    // Responsive behavior
    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({ 
          width: chartContainerRef.current.clientWidth 
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [data, height, showVolume, theme]);
  
  // Update chart colors if theme changes
  useEffect(() => {
    if (!chartObj) return;
    
    chartObj.applyOptions({
      layout: {
        background: { color: colors.background },
        textColor: colors.text,
      },
      grid: {
        vertLines: { color: colors.grid },
        horzLines: { color: colors.grid },
      },
      rightPriceScale: {
        borderColor: colors.borderColor,
      },
      timeScale: {
        borderColor: colors.borderColor,
      },
    });
  }, [chartObj, theme]);
  
  return (
    <div className="chart-container">
      <div className="chart-header mb-2 flex justify-between items-center">
        <div className="text-lg font-medium">{pair} - {timeframe}</div>
      </div>
      <div ref={chartContainerRef} style={{ height: `${height}px`, width }} />
    </div>
  );
};

export default InteractiveChart;