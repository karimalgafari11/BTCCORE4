import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { 
  ArrowTrendingUpIcon, 
  Cog6ToothIcon, 
  CurrencyDollarIcon, 
  ViewColumnsIcon, 
  SparklesIcon,
  ChartPieIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { marketOverview } from '../../mockData';

// Wrap the Responsive component with WidthProvider which automatically measures width
const ResponsiveGridLayout = WidthProvider(Responsive);

// List of available widgets
const availableWidgets = [
  {
    id: 'market-overview',
    title: 'Market Overview',
    minW: 1,
    minH: 2,
    component: 'MarketOverview'
  },
  {
    id: 'trend-scanner',
    title: 'TrendScanner',
    minW: 2,
    minH: 2,
    component: 'TrendScanner',
    icon: ArrowTrendingUpIcon,
    color: 'from-blue-500 to-cyan-400',
    description: 'Scan for bullish/bearish trends'
  },
  {
    id: 'strategy-maker',
    title: 'Strategy Maker',
    minW: 2,
    minH: 2,
    component: 'StrategyMaker',
    icon: Cog6ToothIcon,
    color: 'from-purple-500 to-violet-400',
    description: 'Create custom trading strategies'
  },
  {
    id: 'cointracker',
    title: 'Cointracker',
    minW: 2,
    minH: 2,
    component: 'Cointracker',
    icon: CurrencyDollarIcon,
    color: 'from-green-500 to-emerald-400',
    description: 'Track specific coins'
  },
  {
    id: 'price-action',
    title: 'Price Action',
    minW: 2,
    minH: 2,
    component: 'PriceAction',
    icon: ViewColumnsIcon,
    color: 'from-orange-500 to-amber-400',
    description: 'Detect candlestick patterns'
  },
  {
    id: 'pumping-now',
    title: 'Pumping Now',
    minW: 2,
    minH: 2,
    component: 'PumpingNow',
    icon: SparklesIcon,
    color: 'from-red-500 to-pink-400',
    description: 'Find coins with sudden increases',
    premium: true
  },
  {
    id: 'patterns',
    title: 'Chart Patterns',
    minW: 2,
    minH: 2,
    component: 'Patterns',
    icon: ChartPieIcon,
    color: 'from-indigo-500 to-indigo-400',
    description: 'Identify technical patterns'
  },
  {
    id: 'trendlines',
    title: 'Trendlines',
    minW: 2,
    minH: 2,
    component: 'Trendlines',
    icon: ArrowPathIcon,
    color: 'from-teal-500 to-teal-400',
    description: 'Analyze support and resistance'
  }
];

// Widget components
const MarketOverview = () => {
  const { theme } = useTheme();
  
  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-4">Market Status</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Status:</span>
          <span className={
            marketOverview.status === 'bullish' ? 'text-green-500' : 
            marketOverview.status === 'bearish' ? 'text-red-500' : 
            'text-yellow-500'
          }>
            {marketOverview.status.toUpperCase()}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">BTC Dominance:</span>
          <span>{marketOverview.btcDominance}%</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Market Cap:</span>
          <span>{marketOverview.totalMarketCap}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">24h Volume:</span>
          <span>{marketOverview.dailyVolume}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Fear & Greed:</span>
          <span className={
            marketOverview.fearGreedIndex > 60 ? 'text-green-500' : 
            marketOverview.fearGreedIndex < 40 ? 'text-red-500' : 
            'text-yellow-500'
          }>
            {marketOverview.fearGreedIndex} - {
              marketOverview.fearGreedIndex > 75 ? 'Extreme Greed' : 
              marketOverview.fearGreedIndex > 60 ? 'Greed' : 
              marketOverview.fearGreedIndex > 40 ? 'Neutral' : 
              marketOverview.fearGreedIndex > 25 ? 'Fear' : 
              'Extreme Fear'
            }
          </span>
        </div>
      </div>
    </div>
  );
};

// Generic info card component
const InfoCard = ({ title, icon: Icon, color, description }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
  );
};

// Render the appropriate component for a widget
const WidgetRenderer = ({ widget }) => {
  switch (widget.component) {
    case 'MarketOverview':
      return <MarketOverview />;
    case 'TrendScanner':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    case 'StrategyMaker':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    case 'Cointracker':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    case 'PriceAction':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    case 'PumpingNow':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    case 'Patterns':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    case 'Trendlines':
      return <InfoCard 
        title={widget.title} 
        icon={widget.icon} 
        color={widget.color} 
        description={widget.description} 
      />;
    default:
      return <div>Unknown widget: {widget.component}</div>;
  }
};

const CustomizableDashboard = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [layouts, setLayouts] = useState(null);
  const [activeWidgets, setActiveWidgets] = useState([]);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [availableForAdding, setAvailableForAdding] = useState([]);
  
  // Initialize dashboard on component mount
  useEffect(() => {
    // Load layouts from localStorage if available
    const savedLayouts = localStorage.getItem('dyor_dashboard_layouts');
    const savedWidgets = localStorage.getItem('dyor_dashboard_widgets');
    
    if (savedLayouts && savedWidgets) {
      setLayouts(JSON.parse(savedLayouts));
      setActiveWidgets(JSON.parse(savedWidgets));
    } else {
      // Default layout
      const defaultWidgets = [
        { ...availableWidgets[0], i: 'market-overview', x: 0, y: 0, w: 1, h: 2 },
        { ...availableWidgets[1], i: 'trend-scanner', x: 1, y: 0, w: 1, h: 2 },
        { ...availableWidgets[2], i: 'strategy-maker', x: 2, y: 0, w: 1, h: 2 },
        { ...availableWidgets[3], i: 'cointracker', x: 0, y: 2, w: 1, h: 2 },
        { ...availableWidgets[4], i: 'price-action', x: 1, y: 2, w: 1, h: 2 },
        { ...availableWidgets[5], i: 'pumping-now', x: 2, y: 2, w: 1, h: 2 }
      ];
      
      setActiveWidgets(defaultWidgets);
      
      const defaultLayouts = {
        lg: defaultWidgets.map(widget => ({
          i: widget.i,
          x: widget.x,
          y: widget.y,
          w: widget.w,
          h: widget.h,
          minW: widget.minW,
          minH: widget.minH
        }))
      };
      
      setLayouts(defaultLayouts);
    }
    
    // Update available widgets for adding
    updateAvailableWidgets();
  }, []);
  
  // Update available widgets when active widgets change
  useEffect(() => {
    updateAvailableWidgets();
  }, [activeWidgets]);
  
  // Update the list of widgets that can be added
  const updateAvailableWidgets = () => {
    const activeWidgetIds = activeWidgets.map(widget => widget.id);
    const available = availableWidgets.filter(widget => !activeWidgetIds.includes(widget.id));
    setAvailableForAdding(available);
  };
  
  // Save layouts when they change
  const handleLayoutChange = (currentLayout, allLayouts) => {
    setLayouts(allLayouts);
    localStorage.setItem('dyor_dashboard_layouts', JSON.stringify(allLayouts));
    
    // Update active widgets with new positions
    const updatedWidgets = activeWidgets.map(widget => {
      const layoutItem = currentLayout.find(item => item.i === widget.i);
      if (layoutItem) {
        return {
          ...widget,
          x: layoutItem.x,
          y: layoutItem.y,
          w: layoutItem.w,
          h: layoutItem.h
        };
      }
      return widget;
    });
    
    setActiveWidgets(updatedWidgets);
    localStorage.setItem('dyor_dashboard_widgets', JSON.stringify(updatedWidgets));
  };
  
  // Add a widget to the dashboard
  const addWidget = (widgetToAdd) => {
    // Find the highest y value in the current layout
    const highestY = Math.max(...activeWidgets.map(w => w.y + w.h), 0);
    
    const newWidget = {
      ...widgetToAdd,
      i: widgetToAdd.id,
      x: 0,
      y: highestY,
      w: widgetToAdd.minW || 1,
      h: widgetToAdd.minH || 2
    };
    
    const newWidgets = [...activeWidgets, newWidget];
    setActiveWidgets(newWidgets);
    localStorage.setItem('dyor_dashboard_widgets', JSON.stringify(newWidgets));
    
    // Update layouts
    if (layouts) {
      const newLayouts = { ...layouts };
      
      Object.keys(newLayouts).forEach(breakpoint => {
        newLayouts[breakpoint] = [
          ...newLayouts[breakpoint],
          {
            i: newWidget.i,
            x: newWidget.x,
            y: newWidget.y,
            w: newWidget.w,
            h: newWidget.h,
            minW: newWidget.minW,
            minH: newWidget.minH
          }
        ];
      });
      
      setLayouts(newLayouts);
      localStorage.setItem('dyor_dashboard_layouts', JSON.stringify(newLayouts));
    }
  };
  
  // Remove a widget from the dashboard
  const removeWidget = (widgetId) => {
    const newWidgets = activeWidgets.filter(widget => widget.i !== widgetId);
    setActiveWidgets(newWidgets);
    localStorage.setItem('dyor_dashboard_widgets', JSON.stringify(newWidgets));
    
    // Update layouts
    if (layouts) {
      const newLayouts = { ...layouts };
      
      Object.keys(newLayouts).forEach(breakpoint => {
        newLayouts[breakpoint] = newLayouts[breakpoint].filter(item => item.i !== widgetId);
      });
      
      setLayouts(newLayouts);
      localStorage.setItem('dyor_dashboard_layouts', JSON.stringify(newLayouts));
    }
  };
  
  // Reset dashboard to default
  const resetDashboard = () => {
    localStorage.removeItem('dyor_dashboard_layouts');
    localStorage.removeItem('dyor_dashboard_widgets');
    window.location.reload();
  };
  
  // Toggle customization mode
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  
  if (!layouts) {
    return <div>Loading dashboard...</div>;
  }
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('dashboard')}</h1>
        
        <div className="space-x-3">
          <button
            onClick={toggleCustomization}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              isCustomizing 
                ? 'bg-primary-500 text-white' 
                : theme === 'light' 
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                  : 'bg-dark-700 hover:bg-dark-600'
            }`}
          >
            {isCustomizing ? 'Done Customizing' : 'Customize Dashboard'}
          </button>
          
          {isCustomizing && (
            <button
              onClick={resetDashboard}
              className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
            >
              Reset Dashboard
            </button>
          )}
        </div>
      </div>
      
      {isCustomizing && (
        <div className={`card p-4 ${theme === 'light' ? 'bg-white' : 'bg-dark-700'}`}>
          <h2 className="text-lg font-semibold mb-4">Available Widgets</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {availableForAdding.map(widget => (
              <div 
                key={widget.id} 
                className="border border-dashed border-gray-500 p-3 rounded-lg hover:bg-opacity-10 hover:bg-primary-500 cursor-pointer"
                onClick={() => addWidget(widget)}
              >
                <h3 className="font-medium">{widget.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{widget.description}</p>
              </div>
            ))}
            
            {availableForAdding.length === 0 && (
              <p className="text-gray-400 col-span-4">All available widgets are already on your dashboard.</p>
            )}
          </div>
        </div>
      )}
      
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={150}
        isDraggable={isCustomizing}
        isResizable={isCustomizing}
        onLayoutChange={handleLayoutChange}
      >
        {activeWidgets.map(widget => (
          <div 
            key={widget.i} 
            className={`card relative ${theme === 'light' ? 'bg-white' : 'bg-dark-700'}`}
          >
            {isCustomizing && (
              <button
                onClick={() => removeWidget(widget.i)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center z-10"
              >
                ×
              </button>
            )}
            <div className="p-4 h-full">
              <WidgetRenderer widget={widget} />
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default CustomizableDashboard;