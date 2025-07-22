import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Moon,
  Sun,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  });
  const [theme, setTheme] = useState('light');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'preferences', label: 'Preferences', icon: Globe }
  ];

  const handleNotificationChange = (type: string) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="settings-content">
            <h2>Profile Settings</h2>
            <p className="content-description">Update your personal information and profile details</p>
            
            <div className="form-section">
              <div className="profile-photo-section">
                <div className="profile-photo">
                  <div className="profile-avatar">JD</div>
                  <button className="change-photo-btn">Change Photo</button>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" defaultValue="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              
              <div className="form-group">
                <label>Bio</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about yourself..."
                  defaultValue="Product manager with 5+ years of experience in SaaS applications."
                />
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="settings-content">
            <h2>Notification Settings</h2>
            <p className="content-description">Manage how you receive notifications</p>
            
            <div className="notification-settings">
              <div className="notification-item">
                <div className="notification-info">
                  <h4>Email Notifications</h4>
                  <p>Receive notifications via email</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-item">
                <div className="notification-info">
                  <h4>Push Notifications</h4>
                  <p>Receive push notifications in your browser</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.push}
                    onChange={() => handleNotificationChange('push')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-item">
                <div className="notification-info">
                  <h4>SMS Notifications</h4>
                  <p>Receive important updates via SMS</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.sms}
                    onChange={() => handleNotificationChange('sms')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-item">
                <div className="notification-info">
                  <h4>Marketing Communications</h4>
                  <p>Receive product updates and promotional content</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.marketing}
                    onChange={() => handleNotificationChange('marketing')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="settings-content">
            <h2>Security Settings</h2>
            <p className="content-description">Manage your account security and privacy</p>
            
            <div className="security-section">
              <h3>Change Password</h3>
              <div className="form-group">
                <label>Current Password</label>
                <div className="password-input">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
            </div>
            
            <div className="security-section">
              <h3>Two-Factor Authentication</h3>
              <div className="security-option">
                <div>
                  <h4>Enable 2FA</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <button className="btn btn-secondary">Setup 2FA</button>
              </div>
            </div>
            
            <div className="security-section">
              <h3>Login History</h3>
              <div className="login-history">
                <div className="login-item">
                  <div>
                    <strong>Chrome on MacOS</strong>
                    <p>192.168.1.100 • 2 hours ago</p>
                  </div>
                  <span className="current-session">Current</span>
                </div>
                <div className="login-item">
                  <div>
                    <strong>Safari on iPhone</strong>
                    <p>192.168.1.45 • Yesterday</p>
                  </div>
                  <button className="logout-btn">Sign Out</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="settings-content">
            <h2>Billing & Subscription</h2>
            <p className="content-description">Manage your subscription and billing information</p>
            
            <div className="billing-section">
              <div className="current-plan">
                <h3>Current Plan</h3>
                <div className="plan-info">
                  <div className="plan-details">
                    <h4>Pro Plan</h4>
                    <p>$29/month • Billed monthly</p>
                    <p>Next billing date: March 15, 2024</p>
                  </div>
                  <button className="btn btn-secondary">Change Plan</button>
                </div>
              </div>
              
              <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="card-info">
                  <div className="card-details">
                    <strong>•••• •••• •••• 4242</strong>
                    <p>Expires 12/25</p>
                  </div>
                  <button className="btn btn-secondary">Update</button>
                </div>
              </div>
              
              <div className="billing-history">
                <h3>Billing History</h3>
                <div className="invoice-list">
                  <div className="invoice-item">
                    <div>
                      <strong>Invoice #1234</strong>
                      <p>February 15, 2024 • $29.00</p>
                    </div>
                    <button className="download-btn">Download</button>
                  </div>
                  <div className="invoice-item">
                    <div>
                      <strong>Invoice #1233</strong>
                      <p>January 15, 2024 • $29.00</p>
                    </div>
                    <button className="download-btn">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="settings-content">
            <h2>Preferences</h2>
            <p className="content-description">Customize your application experience</p>
            
            <div className="preferences-section">
              <h3>Appearance</h3>
              <div className="theme-selector">
                <div className="theme-option">
                  <input 
                    type="radio" 
                    id="light" 
                    name="theme" 
                    value="light"
                    checked={theme === 'light'}
                    onChange={(e) => setTheme(e.target.value)}
                  />
                  <label htmlFor="light" className="theme-label">
                    <Sun size={20} />
                    <span>Light Mode</span>
                  </label>
                </div>
                
                <div className="theme-option">
                  <input 
                    type="radio" 
                    id="dark" 
                    name="theme" 
                    value="dark"
                    checked={theme === 'dark'}
                    onChange={(e) => setTheme(e.target.value)}
                  />
                  <label htmlFor="dark" className="theme-label">
                    <Moon size={20} />
                    <span>Dark Mode</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="preferences-section">
              <h3>Language & Region</h3>
              <div className="form-group">
                <label>Language</label>
                <select defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Timezone</label>
                <select defaultValue="UTC-5">
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC-7">Mountain Time (UTC-7)</option>
                  <option value="UTC-6">Central Time (UTC-6)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your account and application preferences</p>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <nav className="settings-nav">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="settings-main">
          {renderTabContent()}
          
          <div className="settings-actions">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;