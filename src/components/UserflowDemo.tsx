import React from 'react';
import { Play, Users, Settings, BarChart3, HelpCircle } from 'lucide-react';
import { startFlow, trackEvent, identifyUser } from '../utils/userflow';

const UserflowDemo: React.FC = () => {
  // Example flow IDs - replace with your actual Userflow flow IDs
  const flows = {
    welcome: 'welcome-tour',
    dashboard: 'dashboard-overview', 
    analytics: 'analytics-features',
    users: 'user-management',
    settings: 'settings-walkthrough'
  };

  const handleStartFlow = (flowId: string, flowName: string) => {
    trackEvent('flow_started', { flowName });
    startFlow(flowId);
  };

  const handleIdentifyUser = () => {
    // Generate new fake user data
    const firstNames = ['Alex', 'Jordan', 'Casey', 'Riley', 'Morgan', 'Taylor', 'Jamie', 'Avery'];
    const lastNames = ['Thompson', 'Anderson', 'Wilson', 'Taylor', 'Moore', 'Jackson', 'White', 'Harris'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const userId = `demo_user_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@demo.com`;
    
    identifyUser(userId, {
      name: `${firstName} ${lastName}`,
      email: email,
      plan: 'Pro',
      role: 'Demo User',
      signed_up_at: new Date().toISOString()
    });
    
    trackEvent('manual_user_identification', { userId });
    alert(`New user identified: ${firstName} ${lastName} (${email})`);
  };

  return (
    <div className="userflow-demo">
      <div className="demo-header">
        <h2>🎯 Userflow Integration Demo</h2>
        <p>Test user onboarding flows and product tours</p>
      </div>

      <div className="demo-section">
        <h3>User Identification</h3>
        <button 
          className="btn btn-primary"
          onClick={handleIdentifyUser}
        >
          <Users size={20} />
          Identify Demo User
        </button>
        <p className="demo-description">
          Identify users to personalize their experience and track progress
        </p>
      </div>

      <div className="demo-section">
        <h3>Available Flows</h3>
        <div className="flows-grid">
          <div className="flow-card">
            <div className="flow-icon">
              <Play size={24} />
            </div>
            <h4>Welcome Tour</h4>
            <p>Introduce new users to the platform</p>
            <button 
              className="btn btn-secondary"
              onClick={() => handleStartFlow(flows.welcome, 'Welcome Tour')}
            >
              Start Flow
            </button>
          </div>

          <div className="flow-card">
            <div className="flow-icon">
              <BarChart3 size={24} />
            </div>
            <h4>Dashboard Overview</h4>
            <p>Show key metrics and navigation</p>
            <button 
              className="btn btn-secondary"
              onClick={() => handleStartFlow(flows.dashboard, 'Dashboard Overview')}
            >
              Start Flow
            </button>
          </div>

          <div className="flow-card">
            <div className="flow-icon">
              <BarChart3 size={24} />
            </div>
            <h4>Analytics Features</h4>
            <p>Explain analytics and reporting</p>
            <button 
              className="btn btn-secondary"
              onClick={() => handleStartFlow(flows.analytics, 'Analytics Features')}
            >
              Start Flow
            </button>
          </div>

          <div className="flow-card">
            <div className="flow-icon">
              <Users size={24} />
            </div>
            <h4>User Management</h4>
            <p>Guide through user administration</p>
            <button 
              className="btn btn-secondary"
              onClick={() => handleStartFlow(flows.users, 'User Management')}
            >
              Start Flow
            </button>
          </div>

          <div className="flow-card">
            <div className="flow-icon">
              <Settings size={24} />
            </div>
            <h4>Settings Walkthrough</h4>
            <p>Tour of configuration options</p>
            <button 
              className="btn btn-secondary"
              onClick={() => handleStartFlow(flows.settings, 'Settings Walkthrough')}
            >
              Start Flow
            </button>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Integration Notes</h3>
        <div className="integration-notes">
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Setup Required:</strong>
              <p>Add your Userflow token to environment variables as REACT_APP_USERFLOW_TOKEN</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Create Flows:</strong>
              <p>Design your onboarding flows in the Userflow dashboard and update flow IDs</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Event Tracking:</strong>
              <p>Track user actions and flow completions for analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserflowDemo;