import React from 'react';
import * as Frigade from '@frigade/react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  BarChart3
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Dashboard: React.FC = () => {

  const lineData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
  ];

  const barData = [
    { name: 'Product A', sales: 4000 },
    { name: 'Product B', sales: 3000 },
    { name: 'Product C', sales: 2000 },
    { name: 'Product D', sales: 2780 },
  ];

  const pieData = [
    { name: 'Desktop', value: 400, color: '#0088FE' },
    { name: 'Mobile', value: 300, color: '#00C49F' },
    { name: 'Tablet', value: 300, color: '#FFBB28' },
    { name: 'Other', value: 200, color: '#FF8042' },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Frigade Collapsible Checklist */}
      <div className="dashboard-checklist">
        <Frigade.Checklist.Collapsible flowId="flow_5hqQEJCC" />
      </div>

      <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <h3>Total Users</h3>
                <p className="stat-value">12,345</p>
                <span className="stat-change positive">+12%</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <DollarSign size={24} />
              </div>
              <div className="stat-info">
                <h3>Revenue</h3>
                <p className="stat-value">$45,678</p>
                <span className="stat-change positive">+8%</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <div className="stat-info">
                <h3>Growth Rate</h3>
                <p className="stat-value">23.5%</p>
                <span className="stat-change positive">+5%</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={24} />
              </div>
              <div className="stat-info">
                <h3>Conversion</h3>
                <p className="stat-value">3.2%</p>
                <span className="stat-change negative">-2%</span>
              </div>
            </div>
          </div>

          <div className="charts-grid">
            <div className="chart-card">
              <h3>Revenue Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Product Sales</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Traffic Sources</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
    </div>
  );
};

export default Dashboard;