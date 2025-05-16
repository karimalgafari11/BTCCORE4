import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      return setError('Please fill in all fields');
    }
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card max-w-md w-full p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('login')}</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 text-red-500 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            {t('email')}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            className="w-full"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            {t('password')}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-dark-500 text-primary-500 focus:ring-primary-500"
            />
            <label className="ml-2 text-sm" htmlFor="remember">
              {t('remember')}
            </label>
          </div>
          
          <Link to="/forgot-password" className="text-sm text-primary-500 hover:underline">
            {t('forgotPassword')}
          </Link>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-70"
        >
          {loading ? '...' : t('login')}
        </button>
      </form>
      
      <p className="mt-6 text-center text-sm">
        {t('notRegistered')}{' '}
        <Link to="/signup" className="text-primary-500 hover:underline">
          {t('goToRegistration')}
        </Link>
      </p>
      
      {/* Demo credentials */}
      <div className="mt-4 p-3 bg-dark-600 rounded-lg">
        <p className="text-xs text-center mb-2">Demo credentials</p>
        <p className="text-xs">Email: demo@dyor.net</p>
        <p className="text-xs">Password: password123</p>
      </div>
    </div>
  );
};

export default LoginForm;