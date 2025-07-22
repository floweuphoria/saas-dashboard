import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal,
  UserPlus,
  Mail,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const usersData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      joinDate: '2024-01-15',
      location: 'New York, USA',
      avatar: 'JD',
      subscription: 'Pro'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      joinDate: '2024-02-03',
      location: 'Los Angeles, USA',
      avatar: 'SW',
      subscription: 'Basic'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      phone: '+1 (555) 345-6789',
      status: 'inactive',
      joinDate: '2024-01-28',
      location: 'San Francisco, USA',
      avatar: 'MC',
      subscription: 'Enterprise'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@example.com',
      phone: '+1 (555) 456-7890',
      status: 'active',
      joinDate: '2024-03-12',
      location: 'Miami, USA',
      avatar: 'ER',
      subscription: 'Pro'
    },
    {
      id: 5,
      name: 'David Thompson',
      email: 'david.thompson@example.com',
      phone: '+1 (555) 567-8901',
      status: 'pending',
      joinDate: '2024-03-20',
      location: 'Chicago, USA',
      avatar: 'DT',
      subscription: 'Basic'
    },
  ];

  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'pending': return 'status-pending';
      default: return 'status-active';
    }
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case 'Basic': return 'subscription-basic';
      case 'Pro': return 'subscription-pro';
      case 'Enterprise': return 'subscription-enterprise';
      default: return 'subscription-basic';
    }
  };

  return (
    <div className="users-page">
      <div className="page-header">
        <div>
          <h1>Users</h1>
          <p>Manage and monitor your user base</p>
        </div>
        <button className="btn btn-primary">
          <UserPlus size={20} />
          Add User
        </button>
      </div>

      <div className="users-controls">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <Filter size={20} />
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      <div className="users-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-value">1,234</p>
          <span className="stat-label">+12% this month</span>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p className="stat-value">1,089</p>
          <span className="stat-label">88% of total</span>
        </div>
        <div className="stat-card">
          <h3>New Users</h3>
          <p className="stat-value">156</p>
          <span className="stat-label">This month</span>
        </div>
        <div className="stat-card">
          <h3>Churn Rate</h3>
          <p className="stat-value">2.3%</p>
          <span className="stat-label">-0.5% vs last month</span>
        </div>
      </div>

      <div className="users-table-container">
        <div className="table-header">
          <h3>User Directory</h3>
          <p>Showing {filteredUsers.length} of {usersData.length} users</p>
        </div>
        
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Subscription</th>
                <th>Join Date</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">{user.avatar}</div>
                      <div>
                        <div className="user-name">{user.name}</div>
                        <div className="user-id">ID: #{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <div className="contact-item">
                        <Mail size={16} />
                        <span>{user.email}</span>
                      </div>
                      <div className="contact-item">
                        <Phone size={16} />
                        <span>{user.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <span className={`subscription-badge ${getSubscriptionColor(user.subscription)}`}>
                      {user.subscription}
                    </span>
                  </td>
                  <td>
                    <div className="date-info">
                      <Calendar size={16} />
                      <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                    </div>
                  </td>
                  <td>
                    <div className="location-info">
                      <MapPin size={16} />
                      <span>{user.location}</span>
                    </div>
                  </td>
                  <td>
                    <button className="action-button">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;