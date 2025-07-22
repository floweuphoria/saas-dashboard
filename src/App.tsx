import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Frigade from '@frigade/react';
import { NewSidebar } from './components/NewSidebar';
import { NewHeader } from './components/NewHeader';
import { NewWorkflowDashboard } from './components/NewWorkflowDashboard';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import { initUserflow } from './utils/userflow';
import { initChameleon } from './utils/chameleon';
import { getCurrentFakeUser } from './utils/userGenerator';

function App() {
  const fakeUser = getCurrentFakeUser(); // Get consistent fake user for both Userflow and Frigade

  useEffect(() => {
    // Initialize Userflow when the app starts
    initUserflow();
    
    // Initialize Chameleon
    initChameleon();
  }, []);

  return (
    <Frigade.Provider
      apiKey="api_public_EiAi1zT1mFphX4ss8gcJBIq8xVIzQRcxQ2Toi9GB3Hp2JVE8qBolQamgwl0fWPeF"
      userId={fakeUser.userId}
    >
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="flex h-screen w-full bg-white">
              <NewSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <NewHeader />
                <NewWorkflowDashboard />
              </div>
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Frigade.Provider>
  );
}

export default App;
