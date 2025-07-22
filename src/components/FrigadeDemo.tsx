import React from 'react';
import * as Frigade from '@frigade/react';
import { getCurrentFakeUser, resetCurrentUser } from '../utils/userGenerator';
import { Play, Users, Zap, RefreshCw, HelpCircle } from 'lucide-react';

const FrigadeDemo: React.FC = () => {
  const currentUser = getCurrentFakeUser();

  const handleResetUser = () => {
    resetCurrentUser();
    window.location.reload(); // Reload to get new user in both Userflow and Frigade
  };

  return (
    <div className="frigade-demo">
      <div className="demo-header">
        <h2>🚀 Frigade Integration Demo</h2>
        <p>Test user onboarding with Frigade flows and components</p>
      </div>

      <div className="demo-section">
        <h3>Current User</h3>
        <div className="user-info-card">
          <div className="user-details">
            <strong>User ID:</strong> {currentUser.userId}<br/>
            <strong>Name:</strong> {currentUser.name}<br/>
            <strong>Email:</strong> {currentUser.email}<br/>
            <strong>Signed Up:</strong> {new Date(currentUser.signed_up_at).toLocaleDateString()}
          </div>
          <button 
            className="btn btn-secondary"
            onClick={handleResetUser}
          >
            <RefreshCw size={20} />
            Generate New User
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>🎯 Frigade Collection (No-Code Components)</h3>
        <div className="collection-demo">
          <div className="component-demo">
            <h4><Zap size={20} /> Your Frigade Collection</h4>
            <p>No-code components from your Frigade dashboard</p>
            <div className="component-wrapper collection-wrapper">
              <Frigade.Collection collectionId="collection_YlC44X2h" />
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>🔧 Individual Frigade Flows</h3>
        <div className="frigade-components">
          
          {/* Frigade Flow */}
          <div className="component-demo">
            <h4><Users size={20} /> Frigade Flow</h4>
            <p>Generic flow component - works with any flow type</p>
            <div className="component-wrapper">
              <Frigade.Flow flowId="flow_example_onboarding" />
            </div>
          </div>

          {/* Alternative Flow Examples */}
          <div className="component-demo">
            <h4><Play size={20} /> Welcome Flow</h4>
            <p>User onboarding flow</p>
            <div className="component-wrapper">
              <Frigade.Flow flowId="flow_welcome_tour" />
            </div>
          </div>

          {/* Frigade Banner */}
          <div className="component-demo">
            <h4><Zap size={20} /> Feature Announcement</h4>
            <p>Announcement flow</p>
            <div className="component-wrapper">
              <Frigade.Flow flowId="flow_feature_announcement" />
            </div>
          </div>

          {/* Frigade Survey */}
          <div className="component-demo">
            <h4><HelpCircle size={20} /> User Feedback</h4>
            <p>Survey or feedback flow</p>
            <div className="component-wrapper">
              <Frigade.Flow flowId="flow_user_survey" />
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Integration Notes</h3>
        <div className="integration-notes">
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Shared User ID:</strong>
              <p>Both Userflow and Frigade use the same generated user ID for consistency</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Collection (No-Code):</strong>
              <p>Using Collection ID: collection_YlC44X2h - All components designed in Frigade dashboard</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Individual Flows:</strong>
              <p>Create specific flows in dashboard and reference by flowId</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>API Key:</strong>
              <p>api_public_EiAi1zT1mFphX4ss8gcJBIq8xVIzQRcxQ2Toi9GB3Hp2JVE8qBolQamgwl0fWPeF</p>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Available Frigade Hooks</h3>
        <div className="hooks-info">
          <code>useFrigade()</code> - Main Frigade hook<br/>
          <code>useUser()</code> - Get current user data<br/>
          <code>useFlow(flowId)</code> - Get specific flow state<br/>
          <code>useGroup()</code> - Group functionality<br/>
        </div>
      </div>
    </div>
  );
};

export default FrigadeDemo;