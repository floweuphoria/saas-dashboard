import React, { useEffect } from 'react'
import * as Frigade from '@frigade/react'
import { 
  Users, 
  MessageCircle,
  Settings,
  X
} from 'lucide-react'
import { trackPageView } from '../utils/segment'

interface SidebarCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  icon: React.ReactNode;
  variant: 'blue' | 'purple' | 'gray';
}

const SidebarCard: React.FC<SidebarCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  icon,
  variant
}) => {
  const variantClasses = {
    blue: 'bg-blue-50 border-blue-200',
    purple: 'bg-purple-50 border-purple-200', 
    gray: 'bg-gray-50 border-gray-200'
  }

  const iconClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    gray: 'text-gray-600'
  }

  return (
    <div className={`border rounded-lg p-4 ${variantClasses[variant]}`}>
      <div className={`w-8 h-8 mb-3 ${iconClasses[variant]}`}>
        {icon}
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <a 
        href={linkUrl}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        {linkText}
      </a>
    </div>
  )
}

export const Welcome: React.FC = () => {
  useEffect(() => {
    trackPageView('Welcome Page');
  }, []);

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Getting Started</h1>
            
            <div className="space-y-6">
              <Frigade.Collection collectionId="collection_od1b24Rb" />
              <Frigade.Checklist.Collapsible
                flowId="flow_2rHXV1G1" 
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 space-y-4">
            <SidebarCard
              title="Talk to an Expert"
              description="Our Sales & Solution Architects are here to help answer any questions you have."
              linkText="Book a meeting"
              linkUrl="#"
              icon={<MessageCircle size={24} />}
              variant="blue"
            />
            
            <div className="frigade-got-questions-card">
              <Frigade.Card
                flowId="flow_yBmJ4eIi"
                dismissible={true}
              />
            </div>
            
            <SidebarCard
              title="Explore Professional Services"
              description="Get tailored solutions and expert guidance for your Temporal Cloud needs."
              linkText="Learn more"
              linkUrl="#"
              icon={<Settings size={24} />}
              variant="gray"
            />
          </div>
        </div>
      </div>
    </div>
  )
}