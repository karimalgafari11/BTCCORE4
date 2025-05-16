import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { subscriptionPlans } from '../mockData';

const MyAccount = () => {
  const { t } = useTranslation();
  const { currentUser, updateProfile } = useAuth();
  
  const [telegramConnected, setTelegramConnected] = useState(currentUser?.telegramConnected || false);
  const [notifications, setNotifications] = useState(currentUser?.notifications || false);
  
  const toggleTelegram = () => {
    const newValue = !telegramConnected;
    setTelegramConnected(newValue);
    updateProfile({ telegramConnected: newValue });
  };
  
  const toggleNotifications = () => {
    const newValue = !notifications;
    setNotifications(newValue);
    updateProfile({ notifications: newValue });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('myAccount')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="card p-5">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
              <div>
                <h2 className="text-xl font-semibold">{currentUser?.name}</h2>
                <p className="text-gray-400">{currentUser?.email}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-dark-600">
                <div>
                  <div className="font-medium">{t('subscription')}</div>
                  <div className="text-sm text-gray-400">
                    {currentUser?.isSubscribed ? t('premium') : t('free')}
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-dark-600 hover:bg-dark-500 rounded-lg text-sm">
                  {t('manage')}
                </button>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-dark-600">
                <div>
                  <div className="font-medium">{t('telegram')}</div>
                  <div className="text-sm text-gray-400">
                    {telegramConnected ? t('connected') : t('disconnected')}
                  </div>
                </div>
                <button
                  onClick={toggleTelegram}
                  className={`px-4 py-1.5 rounded-lg text-sm ${
                    telegramConnected ? 'bg-dark-600 hover:bg-dark-500' : 'bg-primary-500 hover:bg-primary-600'
                  }`}
                >
                  {telegramConnected ? t('disconnect') : t('connect')}
                </button>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-dark-600">
                <div>
                  <div className="font-medium">{t('notifications')}</div>
                  <div className="text-sm text-gray-400">
                    {notifications ? 'On' : 'Off'}
                  </div>
                </div>
                <button
                  onClick={toggleNotifications}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    notifications ? 'bg-primary-500' : 'bg-dark-600'
                  }`}
                >
                  <span 
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{t('password')}</div>
                  <div className="text-sm text-gray-400">********</div>
                </div>
                <button className="px-4 py-1.5 bg-dark-600 hover:bg-dark-500 rounded-lg text-sm">
                  {t('change')}
                </button>
              </div>
            </div>
          </div>
          
          <div className="card p-5">
            <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
            <div className="space-y-3">
              <div className="border-b border-dark-600 pb-3 last:border-0 last:pb-0">
                <div className="text-sm">Strategy "Golden Cross" created</div>
                <div className="text-xs text-gray-400">Today, 10:45 AM</div>
              </div>
              <div className="border-b border-dark-600 pb-3 last:border-0 last:pb-0">
                <div className="text-sm">Added BTC/USDT to Cointracker</div>
                <div className="text-xs text-gray-400">Yesterday, 3:22 PM</div>
              </div>
              <div className="border-b border-dark-600 pb-3 last:border-0 last:pb-0">
                <div className="text-sm">Received alert for ETH/USDT</div>
                <div className="text-xs text-gray-400">2 days ago, 7:15 PM</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-5">
          <h2 className="text-lg font-semibold mb-4">{t('subscriptions')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subscriptionPlans.map((plan) => (
              <div key={plan.id} className="border border-dark-600 rounded-lg p-4 flex flex-col">
                <h3 className="text-lg font-medium mb-2">{t(plan.id === 'free' ? 'freePlan' : 'paidPlan')}</h3>
                <div className="text-2xl font-bold mb-3">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  {plan.price !== 0 && <span className="text-sm font-normal text-gray-400">/month</span>}
                </div>
                
                <ul className="space-y-2 flex-1 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-2 rounded-lg ${
                    plan.id === 'free' ? 'bg-dark-600 hover:bg-dark-500' : 'bg-secondary-500 hover:bg-secondary-600'
                  }`}
                >
                  {plan.id === 'free' ? 'Current Plan' : t('subscribe')}
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-dark-600 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Need Help?</h3>
            <p className="text-sm text-gray-400 mb-3">
              If you have any questions about your subscription or account, please contact our support team.
            </p>
            <button className="text-sm text-primary-500 hover:underline">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;