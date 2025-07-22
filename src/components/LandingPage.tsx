import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Shield, Zap, Users, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <BarChart3 className="brand-icon" />
            <span className="brand-name">DataFlow Pro</span>
          </div>
          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">
              Transform Your Data Into 
              <span className="highlight"> Actionable Insights</span>
            </h1>
            <p className="hero-subtitle">
              The most powerful analytics platform for modern businesses. 
              Get real-time insights, automated reports, and AI-powered recommendations.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">
                Start Free Trial <ArrowRight size={20} />
              </Link>
              <button className="btn btn-secondary">Watch Demo</button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <h2 className="features-title">Why Choose DataFlow Pro?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <BarChart3 size={40} />
                </div>
                <h3>Advanced Analytics</h3>
                <p>Get deep insights with our AI-powered analytics engine. Real-time data processing and visualization.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Shield size={40} />
                </div>
                <h3>Enterprise Security</h3>
                <p>Bank-level security with end-to-end encryption. SOC 2 compliant and GDPR ready.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Zap size={40} />
                </div>
                <h3>Lightning Fast</h3>
                <p>Process millions of data points in seconds. Optimized for speed and performance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Users size={40} />
                </div>
                <h3>Team Collaboration</h3>
                <p>Share insights across your organization. Real-time collaboration and commenting.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of companies already using DataFlow Pro</p>
            <Link to="/signup" className="btn btn-primary btn-large">
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 DataFlow Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;