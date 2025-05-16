import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem('dyor_theme') || 'dark';
    changeTheme(storedTheme);
  }, []);

  // Apply theme to document
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('dyor_theme', newTheme);
    
    // Apply theme to document
    document.documentElement.dataset.theme = newTheme;
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    changeTheme(newTheme);
  };

  // Context value
  const value = {
    theme,
    changeTheme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  return useContext(ThemeContext);
};