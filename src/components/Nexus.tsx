import React, { useEffect } from 'react'
import * as Frigade from '@frigade/react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/segment'

export const Nexus: React.FC = () => {
  const { flow } = Frigade.useFlow('flow_Xk4yQCDK');
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    trackPageView('Nexus Page');
    
    // Mark the NEW badge step as completed when user visits Nexus page
    if (pathName === "/nexus") {
      const firstStep = flow?.steps.get('badge');
      if (firstStep) {
        firstStep.complete();
      }
    }
  }, [flow, pathName]);

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">NEXUS ENDPOINTS</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Started</h2>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-6">
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Temporal Nexus allows you to reliably connect Temporal Applications. It promotes a more 
                modular architecture for sharing a subset of your team's capabilities with well-defined 
                microservice contracts for other teams to use. Nexus was designed with Durable 
                Execution in mind and enables each team to have their own Namespace for improved 
                modularity, security, debugging, and fault isolation.
              </p>
              
              <p className="mb-4">
                <span className="text-blue-600 hover:underline cursor-pointer">Nexus Services</span> are exposed from a <span className="text-blue-600 hover:underline cursor-pointer">Nexus Endpoint</span> created in the <span className="text-blue-600 hover:underline cursor-pointer">Nexus Registry</span>. Adding 
                a Nexus Endpoint to the Nexus Registry deploys the Endpoint, so it is available at runtime 
                to serve Nexus requests.
              </p>
              
              <p className="mb-4">
                A Nexus Endpoint is a reverse proxy that decouples the caller from the handler and routes 
                requests to upstream targets. It currently supports routing to a single target Namespace 
                and Task Queue. Nexus Services and <span className="text-blue-600 hover:underline cursor-pointer">Nexus Operations</span> are often registered in the same 
                Worker as the underlying Temporal primitives they abstract.
              </p>
              
              <p className="mb-6">
                To create Nexus Endpoints you'll need <span className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Developer</span> role or higher and <span className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Namespace Admin</span> 
                permission on the Endpoint's target Namespace that Nexus requests will be routed to. 
                See <span className="text-blue-600 hover:underline cursor-pointer">Nexus roles and permissions</span> for more details.
              </p>
            </div>

            {/* Create Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Create Nexus Endpoint
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="w-80 flex items-start justify-center pt-8">
            <div className="relative">
              {/* Network diagram illustration using CSS */}
              <svg width="280" height="300" viewBox="0 0 280 300" className="text-gray-400">
                {/* Connection lines */}
                <g stroke="currentColor" strokeWidth="2" fill="none">
                  {/* Main connecting lines */}
                  <path d="M140 50 L140 100" />
                  <path d="M140 100 L80 130" />
                  <path d="M140 100 L200 130" />
                  <path d="M140 100 L140 160" />
                  <path d="M140 160 L60 190" />
                  <path d="M140 160 L220 190" />
                  <path d="M140 160 L140 220" />
                  <path d="M140 220 L90 250" />
                  <path d="M140 220 L190 250" />
                  
                  {/* Additional connecting lines */}
                  <path d="M80 130 L60 190" />
                  <path d="M200 130 L220 190" />
                  <path d="M200 130 L140 160" strokeDasharray="5,5" />
                  <path d="M80 130 L140 160" strokeDasharray="5,5" />
                </g>
                
                {/* Nodes */}
                <g>
                  {/* Top node */}
                  <circle cx="140" cy="50" r="12" fill="#10b981" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="140" cy="50" r="4" fill="#ffffff" />
                  
                  {/* Second level */}
                  <circle cx="80" cy="130" r="10" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="200" cy="130" r="10" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="140" cy="100" r="10" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                  
                  {/* Third level */}
                  <circle cx="60" cy="190" r="10" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="220" cy="190" r="10" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="140" cy="160" r="10" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                  
                  {/* Fourth level */}
                  <circle cx="90" cy="250" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="190" cy="250" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="140" cy="220" r="10" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                  
                  {/* Additional nodes */}
                  <circle cx="250" cy="80" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="30" cy="120" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="270" cy="160" r="8" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="10" cy="220" r="8" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}