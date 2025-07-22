import React, { useState } from 'react';
import { 
  Search, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  HelpCircle
} from 'lucide-react';

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. Enter your email address and we'll send you a reset link."
    },
    {
      id: 2,
      question: "How do I upgrade my subscription?",
      answer: "Go to Settings > Billing & Subscription and click 'Change Plan'. You can upgrade to a higher tier at any time, and the change will take effect immediately."
    },
    {
      id: 3,
      question: "Can I export my data?",
      answer: "Yes! You can export your data from the Analytics page by clicking the 'Export' button. Data can be exported in CSV, Excel, or JSON formats."
    },
    {
      id: 4,
      question: "How do I add team members?",
      answer: "Navigate to the Users page and click 'Add User'. Enter their email address and select their role. They'll receive an invitation email to join your team."
    },
    {
      id: 5,
      question: "What's included in the Pro plan?",
      answer: "The Pro plan includes advanced analytics, team collaboration features, priority support, and up to 10 team members. Check our pricing page for full details."
    },
    {
      id: 6,
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from Settings > Billing. Your account will remain active until the end of your current billing period."
    }
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const filteredFaq = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-page">
      <div className="page-header">
        <h1>Help & Support</h1>
        <p>Find answers to your questions and get the help you need</p>
      </div>

      <div className="help-search">
        <div className="search-bar large">
          <Search size={24} />
          <input
            type="text"
            placeholder="Search help articles, FAQs, and documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="help-content">
        <div className="help-categories">
          <div className="category-card">
            <div className="category-icon">
              <Book size={32} />
            </div>
            <h3>Documentation</h3>
            <p>Comprehensive guides and tutorials to help you get the most out of our platform</p>
            <a href="#" className="category-link">
              Browse Docs <ExternalLink size={16} />
            </a>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <MessageCircle size={32} />
            </div>
            <h3>Live Chat</h3>
            <p>Get instant help from our support team during business hours</p>
            <button className="category-link btn-style">
              Start Chat
            </button>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Mail size={32} />
            </div>
            <h3>Email Support</h3>
            <p>Send us a detailed message and we'll get back to you within 24 hours</p>
            <a href="mailto:support@dataflowpro.com" className="category-link">
              Send Email <ExternalLink size={16} />
            </a>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Phone size={32} />
            </div>
            <h3>Phone Support</h3>
            <p>Call our support line for urgent issues (Pro and Enterprise plans only)</p>
            <a href="tel:+1-555-123-4567" className="category-link">
              Call Now <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-description">
            Quick answers to common questions. Can't find what you're looking for? 
            <a href="#" className="inline-link"> Contact our support team</a>
          </p>

          <div className="faq-list">
            {filteredFaq.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <HelpCircle size={20} />
                  <span>{faq.question}</span>
                  {expandedFaq === faq.id ? 
                    <ChevronDown size={20} /> : 
                    <ChevronRight size={20} />
                  }
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaq.length === 0 && searchTerm && (
            <div className="no-results">
              <HelpCircle size={48} />
              <h3>No results found</h3>
              <p>Try adjusting your search terms or browse our documentation</p>
              <button className="btn btn-primary">Browse All FAQs</button>
            </div>
          )}
        </div>

        <div className="help-footer">
          <div className="help-footer-content">
            <h3>Still need help?</h3>
            <p>Our support team is here to help you succeed</p>
            <div className="help-actions">
              <button className="btn btn-primary">Contact Support</button>
              <button className="btn btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;