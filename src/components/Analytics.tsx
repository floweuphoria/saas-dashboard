import React from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Eye,
  MousePointer,
  Clock,
  Users
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';

const Analytics: React.FC = () => {
  const pageViewsData = [
    { date: '2024-01-01', views: 1200, unique: 980 },
    { date: '2024-01-02', views: 1350, unique: 1100 },
    { date: '2024-01-03', views: 1180, unique: 950 },
    { date: '2024-01-04', views: 1420, unique: 1200 },
    { date: '2024-01-05', views: 1680, unique: 1350 },
    { date: '2024-01-06', views: 1540, unique: 1280 },
    { date: '2024-01-07', views: 1720, unique: 1400 },
  ];

  const conversionData = [
    { month: 'Jan', conversion: 3.2, revenue: 45000 },
    { month: 'Feb', conversion: 3.8, revenue: 52000 },
    { month: 'Mar', conversion: 4.1, revenue: 48000 },
    { month: 'Apr', conversion: 3.9, revenue: 61000 },
    { month: 'May', conversion: 4.5, revenue: 55000 },
    { month: 'Jun', conversion: 4.2, revenue: 67000 },
  ];

  const topPagesData = [
    { page: '/dashboard', views: 15420, percentage: 32 },
    { page: '/analytics', views: 8960, percentage: 19 },
    { page: '/users', views: 7340, percentage: 15 },
    { page: '/settings', views: 5680, percentage: 12 },
    { page: '/help', views: 4230, percentage: 9 },
  ];

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Detailed insights into your application performance</p>
      </div>

      <div className="analytics-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Eye size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Page Views</h3>
            <p className="stat-value">127,456</p>
            <span className="stat-change positive">
              <TrendingUp size={16} /> +15.3%
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>Unique Visitors</h3>
            <p className="stat-value">84,320</p>
            <span className="stat-change positive">
              <TrendingUp size={16} /> +8.7%
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h3>Avg. Session Duration</h3>
            <p className="stat-value">4m 32s</p>
            <span className="stat-change negative">
              <TrendingDown size={16} /> -2.1%
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <MousePointer size={24} />
          </div>
          <div className="stat-info">
            <h3>Bounce Rate</h3>
            <p className="stat-value">34.2%</p>
            <span className="stat-change positive">
              <TrendingUp size={16} /> -5.4%
            </span>
          </div>
        </div>
      </div>

      <div className="analytics-charts">
        <div className="chart-card large">
          <h3>Page Views Over Time</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={pageViewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="views" 
                stackId="1"
                stroke="#667eea" 
                fill="#667eea"
                fillOpacity={0.3}
              />
              <Area 
                type="monotone" 
                dataKey="unique" 
                stackId="2"
                stroke="#fbbf24" 
                fill="#fbbf24"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Conversion Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="conversion" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-table">
          <h3>Top Pages</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Views</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {topPagesData.map((item, index) => (
                  <tr key={index}>
                    <td className="page-path">{item.page}</td>
                    <td>{item.views.toLocaleString()}</td>
                    <td>
                      <div className="percentage-bar">
                        <div 
                          className="percentage-fill" 
                          style={{ width: `${item.percentage}%` }}
                        />
                        <span>{item.percentage}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;