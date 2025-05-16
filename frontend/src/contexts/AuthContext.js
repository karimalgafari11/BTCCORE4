import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const AuthContext = createContext(null);

// Mock user data
const mockUsers = [
  {
    id: 1,
    email: 'demo@dyor.net',
    password: 'password123',
    name: 'Demo User',
    isSubscribed: true, // Changed to true to showcase premium features
    telegramConnected: false,
    notifications: true
  }
];

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored user on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('dyor_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Simulate login
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      console.log(`Attempting login with email: ${email}`);
      
      setLoading(true);
      
      // Add a small delay to simulate network request
      setTimeout(() => {
        try {
          // For demo purposes, accept both any credentials (for dev) and also the specific demo credentials
          const user = {
            id: 1,
            email: email || 'demo@dyor.net',
            name: 'Demo User',
            isSubscribed: true,
            telegramConnected: false,
            notifications: true
          };
          
          setCurrentUser(user);
          localStorage.setItem('dyor_user', JSON.stringify(user));
          console.log('Login successful');
          setLoading(false);
          resolve(user);
        } catch (error) {
          console.error('Login error:', error);
          setLoading(false);
          reject(new Error('Authentication failed. Please try again.'));
        }
      }, 500);
    });
  };

  // Simulate signup
  const signup = (email, password, name) => {
    return new Promise((resolve, reject) => {
      // Skipping auth check for development purposes - always create account
      const user = {
        id: 1,
        email: email,
        name: name,
        isSubscribed: true,
        telegramConnected: false,
        notifications: true
      };
      
      setCurrentUser(user);
      localStorage.setItem('dyor_user', JSON.stringify(user));
      resolve(user);
    });
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('dyor_user');
  };

  // Update user profile
  const updateProfile = (updates) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedUser = { ...currentUser, ...updates };
        setCurrentUser(updatedUser);
        localStorage.setItem('dyor_user', JSON.stringify(updatedUser));
        resolve(updatedUser);
      }, 500);
    });
  };

  // Context value
  const value = {
    currentUser,
    login,
    signup,
    logout,
    updateProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth
export const useAuth = () => {
  return useContext(AuthContext);
};