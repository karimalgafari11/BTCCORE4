import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Layouts
import AppLayout from "./components/Layout/AppLayout";
import AuthLayout from "./components/Layout/AuthLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import TrendScanner from "./pages/TrendScanner";
import StrategyMaker from "./pages/StrategyMaker";
import CoinTracker from "./pages/CoinTracker";
import PriceActionScanner from "./pages/PriceActionScanner";
import PumpingNow from "./pages/PumpingNow";
import CustomizableDashboard from "./pages/CustomizableDashboard";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chart from "./pages/Chart";
import Patterns from "./pages/Patterns";
import TrendLines from "./pages/TrendLines";
import Divergences from "./pages/Divergences";
import KeyLevels from "./pages/KeyLevels";
import VolumeAnalysis from "./pages/VolumeAnalysis";

// Custom hook to check if user is authenticated
const useRequireAuth = () => {
  const { currentUser, loading } = React.useContext(AuthProvider);

  // For demo purposes, bypass authentication check
  return { isAuthenticated: true, loading: false, user: { name: "Demo User", isSubscribed: true } };
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useRequireAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// App routes definition
const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      
      {/* App routes - protected */}
      <Route path="/" element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="trend-scanner" element={<TrendScanner />} />
        <Route path="strategy-maker" element={<StrategyMaker />} />
        <Route path="cointracker" element={<CoinTracker />} />
        <Route path="price-action-scanner" element={<PriceActionScanner />} />
        <Route path="pumping-now" element={<PumpingNow />} />
        <Route path="customizable-dashboard" element={<CustomizableDashboard />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="chart" element={<Chart />} />
        <Route path="patterns" element={<Patterns />} />
        <Route path="trendlines" element={<TrendLines />} />
        <Route path="divergences" element={<Divergences />} />
        <Route path="key-levels" element={<KeyLevels />} />
        <Route path="volume" element={<VolumeAnalysis />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;