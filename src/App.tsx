import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Frigade from '@frigade/react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Users from './components/Users';
import Settings from './components/Settings';
import Help from './components/Help';
import UserflowDemo from './components/UserflowDemo';
import FrigadeDemo from './components/FrigadeDemo';
import DashboardLayout from './components/DashboardLayout';
import { initUserflow } from './utils/userflow';
import { getCurrentFakeUser } from './utils/userGenerator';
import './App.css';

function App() {
  const fakeUser = getCurrentFakeUser(); // Get consistent fake user for both Userflow and Frigade

  useEffect(() => {
    // Initialize Userflow when the app starts
    initUserflow();
  }, []);

  return (
    <Frigade.Provider
      apiKey="api_public_EiAi1zT1mFphX4ss8gcJBIq8xVIzQRcxQ2Toi9GB3Hp2JVE8qBolQamgwl0fWPeF"
      userId={fakeUser.userId}
    >
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
              <Route path="frigade" element={<FrigadeDemo />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Frigade.Provider>
  );
}

export default App;
