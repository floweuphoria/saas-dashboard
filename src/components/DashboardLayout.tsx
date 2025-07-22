import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
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
  Rocket
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', active: location.pathname === '/dashboard' },
    { icon: LineChart, label: 'Analytics', path: '/dashboard/analytics', active: location.pathname === '/dashboard/analytics' },
    { icon: Users, label: 'Users', path: '/dashboard/users', active: location.pathname === '/dashboard/users' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings', active: location.pathname === '/dashboard/settings' },
    { icon: Zap, label: 'Userflow Demo', path: '/dashboard/userflow', active: location.pathname === '/dashboard/userflow' },
    { icon: Rocket, label: 'Frigade Demo', path: '/dashboard/frigade', active: location.pathname === '/dashboard/frigade' },
    { icon: HelpCircle, label: 'Help', path: '/dashboard/help', active: location.pathname === '/dashboard/help' },
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
        
        <div className="sidebar-footer">
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