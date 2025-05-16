import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';

const MyAccount = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('myAccount')}</h1>
      
      <div className="card p-6">
        <h2 className="text-xl font-medium mb-4">Profile Information</h2>
        
        {currentUser && (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
              <div>
                <h3 className="text-lg font-medium">{currentUser.name}</h3>
                <p className="text-gray-400">{currentUser.email}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-dark-600">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Status:</span>
                <span className={currentUser.isSubscribed ? 'text-primary-500' : 'text-gray-400'}>
                  {currentUser.isSubscribed ? t('premium') : t('free')}
                </span>
              </div>
              
              {!currentUser.isSubscribed && (
                <button className="w-full mt-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  {t('upgradeToPremium')}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="card p-6">
        <h2 className="text-xl font-medium mb-4">Account Settings</h2>
        <button className="text-red-500 hover:text-red-400 transition-colors">
          {t('deleteAccount')}
        </button>
      </div>
    </div>
  );
};

export default MyAccount;