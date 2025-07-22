import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Users from './components/Users';
import Settings from './components/Settings';
import Help from './components/Help';
import UserflowDemo from './components/UserflowDemo';
import DashboardLayout from './components/DashboardLayout';
import { initUserflow } from './utils/userflow';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Userflow when the app starts
    initUserflow();
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="userflow" element={<UserflowDemo />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
