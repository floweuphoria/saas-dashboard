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
          
          <div className="component-demo">
            <h4><Zap size={20} /> Secondary Collection</h4>
            <p>Additional collection: collection_4jIPvkZt</p>
            <div className="component-wrapper collection-wrapper">
              <Frigade.Collection collectionId="collection_4jIPvkZt" />
            </div>
          </div>
        </div>
        
        <div className="collection-demo">
          <div className="component-demo">
            <h4><Zap size={20} /> Frigade Announcement</h4>
            <p>Inline announcement component (appears if configured in dashboard)</p>
            <div className="component-wrapper collection-wrapper">
              <Frigade.Announcement flowId="flow_announcement_demo" />
            </div>
          </div>
          
          <div className="component-demo">
            <h4><Zap size={20} /> Frigade Banner</h4>
            <p>Banner component for promotions/announcements</p>
            <div className="component-wrapper collection-wrapper">
              <Frigade.Banner flowId="flow_banner_demo" />
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>📊 NPS Survey Component</h3>
        <div className="survey-demo">
          <div className="component-demo">
            <h4><HelpCircle size={20} /> Net Promoter Score Survey</h4>
            <p>Customer satisfaction survey with flow ID: flow_mWc4jwB5</p>
            <div className="component-wrapper survey-wrapper">
              <Frigade.Survey.NPS flowId="flow_mWc4jwB5" />
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
              <strong>Collections (No-Code):</strong>
              <p>Collection IDs: collection_YlC44X2h & collection_4jIPvkZt</p>
              <p><strong>Note:</strong> Collections will only display content if flows are configured and active in your Frigade dashboard. Create flows in the dashboard and assign them to collections to see content.</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>NPS Survey:</strong>
              <p>Net Promoter Score survey with Flow ID: flow_mWc4jwB5</p>
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
        <h3>Available Frigade Hooks & Components</h3>
        <div className="hooks-info">
          <strong>Hooks:</strong><br/>
          <code>useFrigade()</code> - Main Frigade hook<br/>
          <code>useUser()</code> - Get current user data<br/>
          <code>useFlow(flowId)</code> - Get specific flow state<br/>
          <code>useGroup()</code> - Group functionality<br/>
          <br/>
          <strong>Survey Components:</strong><br/>
          <code>Frigade.Survey.NPS</code> - Net Promoter Score survey<br/>
          <code>Frigade.Survey.CSAT</code> - Customer Satisfaction survey<br/>
          <code>Frigade.Survey.Custom</code> - Custom survey forms<br/>
        </div>
      </div>
    </div>
  );
};

export default FrigadeDemo;