import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import * as Frigade from '@frigade/react';
import { 
  BarChart3, 
  Menu,
  X,
  Home,
  LineChart,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Zap,
  Rocket,
  Eye
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { icon: Home, label: 'Workflows', path: '/dashboard', active: location.pathname === '/dashboard' },
    { icon: LineChart, label: 'Schedules', path: '/dashboard/schedules', active: location.pathname === '/dashboard/schedules' },
    { icon: Users, label: 'Batch', path: '/dashboard/batch', active: location.pathname === '/dashboard/batch' },
    { icon: Zap, label: 'Deployments', path: '/dashboard/deployments', active: location.pathname === '/dashboard/deployments' },
    { icon: Rocket, label: 'Namespaces', path: '/dashboard/namespaces', active: location.pathname === '/dashboard/namespaces' },
    { icon: Eye, label: 'Nexus', path: '/dashboard/nexus', active: location.pathname === '/dashboard/nexus' },
  ];

  const bottomSidebarItems = [
    { icon: LineChart, label: 'Usage', path: '/dashboard/usage', active: location.pathname === '/dashboard/usage' },
    { icon: Settings, label: 'Billing', path: '/dashboard/billing', active: location.pathname === '/dashboard/billing' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings', active: location.pathname === '/dashboard/settings' },
    { icon: HelpCircle, label: 'Support', path: '/dashboard/support', active: location.pathname === '/dashboard/support' },
    { icon: HelpCircle, label: 'Docs', path: '/dashboard/docs', active: location.pathname === '/dashboard/docs' },
    { icon: HelpCircle, label: 'Welcome', path: '/dashboard/welcome', active: location.pathname === '/dashboard/welcome' },
  ];

  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <BarChart3 size={24} />
            <span>DataFlow Pro</span>
          </div>
          <button 
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <nav className="sidebar-nav-bottom">
          {bottomSidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <div className="sidebar-card-section">
            <div className="plan-card">
              <span className="plan-text">Free Plan</span>
            </div>
            
            <Link to="/dashboard" className="progress-card clickable-progress">
              <div className="frigade-progress-wrapper">
                <Frigade.ProgressBadge flowId="flow_5hqQEJCC" />
              </div>
            </Link>
            
            <div className="user-profile-card">
              <div className="user-avatar-circle">
                <span className="user-initials">JD</span>
              </div>
              <span className="user-name">John Doe</span>
              <span className="user-menu-dots">⋄</span>
            </div>
          </div>
          <Link to="/login" className="sidebar-item">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h1>Dashboard</h1>
          <div className="user-menu">
            <div className="user-avatar">JD</div>
          </div>
        </header>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>

      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;