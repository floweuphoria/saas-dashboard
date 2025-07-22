import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, Eye, EyeOff } from 'lucide-react';
import { trackEvent } from '../utils/userflow';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track login event (user is already identified automatically on app load)
    trackEvent('user_login', { email });
    
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-brand">
            <BarChart3 size={32} />
            <span>DataFlow Pro</span>
          </Link>
        </div>
        
        <div className="auth-form-container">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to your account to continue</p>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
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
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">
              Sign In
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Don't have an account? 
              <Link to="/signup" className="auth-link"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;