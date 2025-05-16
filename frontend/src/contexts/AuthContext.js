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
    isSubscribed: false,
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
      setTimeout(() => {
        const user = mockUsers.find(u => u.email === email && u.password === password);
        if (user) {
          const userWithoutPassword = { ...user };
          delete userWithoutPassword.password;
          setCurrentUser(userWithoutPassword);
          localStorage.setItem('dyor_user', JSON.stringify(userWithoutPassword));
          resolve(userWithoutPassword);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  };

  // Simulate signup
  const signup = (email, password, name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find(u => u.email === email);
        if (existingUser) {
          reject(new Error('Email already in use'));
        } else {
          const newUser = {
            id: mockUsers.length + 1,
            email,
            password,
            name,
            isSubscribed: false,
            telegramConnected: false,
            notifications: true
          };
          mockUsers.push(newUser);
          
          const userWithoutPassword = { ...newUser };
          delete userWithoutPassword.password;
          setCurrentUser(userWithoutPassword);
          localStorage.setItem('dyor_user', JSON.stringify(userWithoutPassword));
          resolve(userWithoutPassword);
        }
      }, 500);
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