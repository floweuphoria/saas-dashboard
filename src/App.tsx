import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Frigade from '@frigade/react';
import { NewSidebar } from './components/NewSidebar';
import { NewHeader } from './components/NewHeader';
import { NewWorkflowDashboard } from './components/NewWorkflowDashboard';
import { WorkflowDetail } from './components/WorkflowDetail';
import { Welcome } from './components/Welcome';
import { SignupForm } from './components/SignupForm';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import { initUserflow } from './utils/userflow';
import { initChameleon } from './utils/chameleon';
import { saveUserData, clearUserData, getOrCreateUserData } from './utils/userStorage';
import segment, { trackUserSignup, trackUserLogout, trackPageView } from './utils/segment';
import { syncUserWithFrigade } from './utils/frigadeApi';

function App() {
  const userData = getOrCreateUserData(); // Use stored/generated user data

  useEffect(() => {
    // Initialize analytics services with stored user data
    initUserflow();
    initChameleon();
    
    // Sync user properties with Frigade API
    syncUserWithFrigade(userData);
    
    // Initialize Segment with stored user data
    segment.ready(() => {
      segment.identify(userData.email, {
        email: userData.email,
        sdk: userData.sdk,
        useCase: userData.useCase,
        signedUpViaForm: userData.signedUp
      });
      
      // Track initial page view
      trackPageView('App Loaded');
    });
  }, [userData.email]); // Re-init when user changes

  const handleSignup = (signupData: { email: string; sdk: string; useCase: string }) => {
    saveUserData(signupData);
    
    // Sync new user data with Frigade
    syncUserWithFrigade({ ...signupData, signedUp: true });
    
    // Track signup event
    trackUserSignup(signupData);
    
    // Force reload to use new user data
    window.location.href = '/';
  };

  const handleLogout = () => {
    // Track logout event before clearing data
    trackUserLogout();
    
    clearUserData();
    
    // Reset Segment session
    segment.reset();
    
    // Force page reload to regenerate random user data
    window.location.href = '/';
  };

  return (
    <Frigade.Provider
      apiKey="api_public_EiAi1zT1mFphX4ss8gcJBIq8xVIzQRcxQ2Toi9GB3Hp2JVE8qBolQamgwl0fWPeF"
      userId={userData.email}
    >
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm onSignup={handleSignup} />} />
          <Route path="/" element={
            <div className="flex h-screen w-full bg-white">
              <NewSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <NewHeader onLogout={handleLogout} />
                <NewWorkflowDashboard />
              </div>
            </div>
          } />
          <Route path="/workflow/:workflowId" element={
            <div className="flex h-screen w-full bg-white">
              <NewSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <NewHeader onLogout={handleLogout} />
                <WorkflowDetail />
              </div>
            </div>
          } />
          <Route path="/welcome" element={
            <div className="flex h-screen w-full bg-white">
              <NewSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <NewHeader onLogout={handleLogout} />
                <Welcome />
              </div>
            </div>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Frigade.Provider>
  );
}

export default App;
