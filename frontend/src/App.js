import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useAuth } from "./contexts/AuthContext";

// Layouts
import MainLayout from "./components/Layout/MainLayout";
import AuthLayout from "./components/Auth/AuthLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import TrendScanner from "./pages/TrendScanner";
import StrategyMaker from "./pages/StrategyMaker";
import Cointracker from "./pages/Cointracker";
import PriceActionScanner from "./pages/PriceActionScanner";
import PumpingNow from "./pages/PumpingNow";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// New Analysis Pages
import PatternsAnalysis from "./pages/PatternsAnalysis";
import TrendlinesAnalysis from "./pages/TrendlinesAnalysis";
import DivergencesAnalysis from "./pages/DivergencesAnalysis";
import KeyLevels from "./pages/KeyLevels";
import VolumeAnalysis from "./pages/VolumeAnalysis";

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// App routes
const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      
      {/* Protected routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="trend-scanner" element={<TrendScanner />} />
        <Route path="strategy-maker" element={<StrategyMaker />} />
        <Route path="cointracker" element={<Cointracker />} />
        <Route path="price-action-scanner" element={<PriceActionScanner />} />
        <Route path="pumping-now" element={<PumpingNow />} />
        <Route path="my-account" element={<MyAccount />} />
      </Route>
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;