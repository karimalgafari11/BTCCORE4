import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { BellIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const NotificationSettings = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  // Notification channels
  const [channels, setChannels] = useState({
    email: true,
    telegram: false,
    push: true
  });
  
  // Notification types
  const [notifications, setNotifications] = useState({
    priceAlerts: true,
    trendChanges: true,
    patternDetection: false,
    newCoins: true,
    pumpingCoins: true,
    newsAlerts: false
  });
  
  // Frequency settings
  const [frequency, setFrequency] = useState('immediate');
  
  // Toggle a notification channel
  const toggleChannel = (channel) => {
    setChannels({
      ...channels,
      [channel]: !channels[channel]
    });
  };
  
  // Toggle a notification type
  const toggleNotification = (type) => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type]
    });
  };
  
  // Handle frequency change
  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };
  
  // Handle save settings
  const saveSettings = () => {
    // This would normally save to a backend
    alert('Notification settings saved!');
    
    // In a real app, we would store these in the user's profile
    localStorage.setItem('notification_channels', JSON.stringify(channels));
    localStorage.setItem('notification_types', JSON.stringify(notifications));
    localStorage.setItem('notification_frequency', frequency);
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('notifications')}</h1>
      
      {/* Notification Channels */}
      <div className={`card ${theme === 'light' ? 'bg-white' : 'bg-dark-700'}`}>
        <h2 className="text-lg font-semibold mb-4">Notification Channels</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg border ${
            theme === 'light' ? 'border-gray-200' : 'border-dark-600'
          } ${channels.email ? 'ring-2 ring-primary-500' : ''}`}>
            <div className="flex items-start">
              <div className={`p-2 rounded-lg ${
                channels.email ? 'bg-primary-500 text-white' : theme === 'light' ? 'bg-gray-200' : 'bg-dark-600'
              }`}>
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              
              <div className="ml-3">
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-400">Receive alerts in your inbox</p>
              </div>
              
              <div className="ml-auto">
                <button
                  onClick={() => toggleChannel('email')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    channels.email ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
                  }`}
                >
                  <span 
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      channels.email ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg border ${
            theme === 'light' ? 'border-gray-200' : 'border-dark-600'
          } ${channels.telegram ? 'ring-2 ring-primary-500' : ''}`}>
            <div className="flex items-start">
              <div className={`p-2 rounded-lg ${
                channels.telegram ? 'bg-primary-500 text-white' : theme === 'light' ? 'bg-gray-200' : 'bg-dark-600'
              }`}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.17.733-3.074 13.2-3.074 13.2s-.128.493-.603.51c-.165.005-.378-.061-.524-.189-.433-.381-1.266-1.095-1.872-1.584a6.47 6.47 0 0 0 1.304-1.154c.218-.275 4.086-4.16 4.18-4.318.138-.228.029-.392-.228-.26-.86.452-5.176 3.278-5.676 3.609-.16.107-.561.355-.824.355-.162 0-.407-.057-.609-.16-.679-.349-1.235-.64-1.235-.64s-.464-.257-.295-.838l.775-2.611c.246-.838 2.189-7.219 2.189-7.219.128-.487.624-.726 1.182-.454.387.19 4.093 1.609 4.93 1.94.32.126.524.385.38.753z" />
                </svg>
              </div>
              
              <div className="ml-3">
                <h3 className="font-medium">Telegram</h3>
                <p className="text-sm text-gray-400">Get instant telegram messages</p>
              </div>
              
              <div className="ml-auto">
                <button
                  onClick={() => toggleChannel('telegram')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    channels.telegram ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
                  }`}
                >
                  <span 
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      channels.telegram ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg border ${
            theme === 'light' ? 'border-gray-200' : 'border-dark-600'
          } ${channels.push ? 'ring-2 ring-primary-500' : ''}`}>
            <div className="flex items-start">
              <div className={`p-2 rounded-lg ${
                channels.push ? 'bg-primary-500 text-white' : theme === 'light' ? 'bg-gray-200' : 'bg-dark-600'
              }`}>
                <DevicePhoneMobileIcon className="w-6 h-6" />
              </div>
              
              <div className="ml-3">
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-gray-400">Browser notifications</p>
              </div>
              
              <div className="ml-auto">
                <button
                  onClick={() => toggleChannel('push')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    channels.push ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
                  }`}
                >
                  <span 
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      channels.push ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Types */}
      <div className={`card ${theme === 'light' ? 'bg-white' : 'bg-dark-700'}`}>
        <h2 className="text-lg font-semibold mb-4">Notification Types</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0">
            <div>
              <h3 className="font-medium">Price Alerts</h3>
              <p className="text-sm text-gray-400">Get notified when price reaches targets</p>
            </div>
            
            <button
              onClick={() => toggleNotification('priceAlerts')}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.priceAlerts ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.priceAlerts ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0">
            <div>
              <h3 className="font-medium">Trend Changes</h3>
              <p className="text-sm text-gray-400">Alerts when trends change direction</p>
            </div>
            
            <button
              onClick={() => toggleNotification('trendChanges')}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.trendChanges ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.trendChanges ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0">
            <div>
              <h3 className="font-medium">Pattern Detection</h3>
              <p className="text-sm text-gray-400">Notifications for detected chart patterns</p>
            </div>
            
            <button
              onClick={() => toggleNotification('patternDetection')}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.patternDetection ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.patternDetection ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0">
            <div>
              <h3 className="font-medium">New Coins</h3>
              <p className="text-sm text-gray-400">Alerts about new coin listings</p>
            </div>
            
            <button
              onClick={() => toggleNotification('newCoins')}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.newCoins ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.newCoins ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0">
            <div>
              <h3 className="font-medium">Pumping Coins</h3>
              <p className="text-sm text-gray-400">Notifications about sudden price increases</p>
            </div>
            
            <button
              onClick={() => toggleNotification('pumpingCoins')}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.pumpingCoins ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.pumpingCoins ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-dark-600 last:border-0">
            <div>
              <h3 className="font-medium">News Alerts</h3>
              <p className="text-sm text-gray-400">Important cryptocurrency news</p>
            </div>
            
            <button
              onClick={() => toggleNotification('newsAlerts')}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                notifications.newsAlerts ? 'bg-primary-500' : theme === 'light' ? 'bg-gray-300' : 'bg-dark-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.newsAlerts ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Delivery Frequency */}
      <div className={`card ${theme === 'light' ? 'bg-white' : 'bg-dark-700'}`}>
        <h2 className="text-lg font-semibold mb-4">Delivery Frequency</h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="immediate"
              name="frequency"
              value="immediate"
              checked={frequency === 'immediate'}
              onChange={handleFrequencyChange}
              className="mr-2"
            />
            <label htmlFor="immediate" className="cursor-pointer">
              <div className="font-medium">Immediate</div>
              <p className="text-sm text-gray-400">Send notifications as events occur</p>
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="hourly"
              name="frequency"
              value="hourly"
              checked={frequency === 'hourly'}
              onChange={handleFrequencyChange}
              className="mr-2"
            />
            <label htmlFor="hourly" className="cursor-pointer">
              <div className="font-medium">Hourly Digest</div>
              <p className="text-sm text-gray-400">Bundle notifications and send hourly</p>
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="daily"
              name="frequency"
              value="daily"
              checked={frequency === 'daily'}
              onChange={handleFrequencyChange}
              className="mr-2"
            />
            <label htmlFor="daily" className="cursor-pointer">
              <div className="font-medium">Daily Summary</div>
              <p className="text-sm text-gray-400">Receive a daily digest of all notifications</p>
            </label>
          </div>
        </div>
      </div>
      
      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={saveSettings}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Save Notification Settings
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;