import React from 'react';
import { getCurrentFakeUser, resetCurrentUser } from '../utils/userGenerator';
import { RefreshCw, HelpCircle, Zap, Target } from 'lucide-react';

const ChameleonDemo: React.FC = () => {
  const currentUser = getCurrentFakeUser();

  const handleResetUser = () => {
    resetCurrentUser();
    window.location.reload(); // Reload to get new user in all SDKs
  };

  return (
    <div className="chameleon-demo">
      <div className="demo-header">
        <h2>🦎 Chameleon Integration Demo</h2>
        <p>Test user onboarding with Chameleon flows and experiences</p>
      </div>

      <div className="demo-section">
        <h3>Current User</h3>
        <div className="user-info-card">
          <div className="user-details">
            <strong>User ID:</strong> {currentUser.userId}<br/>
            <strong>Name:</strong> {currentUser.name}<br/>
            <strong>Email:</strong> {currentUser.email}<br/>
            <strong>Company:</strong> DataFlow Pro<br/>
            <strong>Plan:</strong> Free Plan<br/>
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
        <h3>🎯 Chameleon Features</h3>
        <div className="chameleon-features">
          <div className="feature-card">
            <Target size={24} />
            <h4>Product Tours</h4>
            <p>Interactive guided tours that help users discover features and complete key actions</p>
          </div>
          
          <div className="feature-card">
            <Zap size={24} />
            <h4>Tooltips & Hotspots</h4>
            <p>Contextual help that appears when users need guidance on specific UI elements</p>
          </div>
          
          <div className="feature-card">
            <HelpCircle size={24} />
            <h4>Surveys & Feedback</h4>
            <p>Collect user feedback through targeted surveys and microsurveys</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>📊 Integration Details</h3>
        <div className="integration-notes">
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Shared User ID:</strong>
              <p>Chameleon, Userflow, and Frigade all use the same generated user ID for consistency</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>API Key:</strong>
              <p>SXhM1amPRRoR2TPYuc50qIPxzw7EWuDcQtkVlqGnN3nESR-1UDYoI-G3F3xKyeOos2W8Z0</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>Fast URL:</strong>
              <p>Using https://fast.chameleon.io/ for optimized performance</p>
            </div>
          </div>
          <div className="note-item">
            <HelpCircle size={20} />
            <div>
              <strong>User Properties:</strong>
              <p>Email, name, signup date, plan type, and company are automatically synced</p>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>🚀 How to Use</h3>
        <div className="usage-guide">
          <ol>
            <li><strong>Dashboard Setup:</strong> Log into your Chameleon dashboard to create tours and experiences</li>
            <li><strong>Targeting:</strong> Use user properties (plan, signup date, etc.) to target specific user segments</li>
            <li><strong>Triggers:</strong> Set up tours to trigger on page load, element clicks, or custom events</li>
            <li><strong>Analytics:</strong> Monitor completion rates and user engagement in the Chameleon dashboard</li>
          </ol>
        </div>
      </div>

      <div className="demo-section">
        <h3>🔗 SDK Integration</h3>
        <div className="code-example">
          <h4>Installation & Setup:</h4>
          <pre><code>{`// Install Chameleon
npm install --save @chamaeleonidae/chmln

// Initialize in your app
const chameleon = require('@chamaeleonidae/chmln');
chameleon.init('YOUR_API_KEY', { fastUrl: 'https://fast.chameleon.io/' });

// Identify users
chameleon.identify(userId, {
  email: user.email,
  name: user.name,
  plan: 'Free Plan'
});`}</code></pre>
        </div>
      </div>
    </div>
  );
};

export default ChameleonDemo;