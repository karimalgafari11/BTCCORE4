import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  const { direction } = useLanguage();
  
  return (
    <div className="flex min-h-screen bg-dark-800" dir={direction}>
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;