import React from 'react';
import { useTranslation } from 'react-i18next';

const StrategyMaker = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('strategyMaker')}</h1>
      <div className="card p-6">
        <p className="text-gray-400">Strategy Maker page content will be shown here.</p>
      </div>
    </div>
  );
};

export default StrategyMaker;