import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useTheme } from '../../contexts/ThemeContext';

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex ${theme === 'light' ? 'bg-gray-50' : 'bg-dark-900'}`}>
      <Sidebar />
      
      <div className="flex-1 ml-64">
        <Header />
        <main className="container mx-auto px-6 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;