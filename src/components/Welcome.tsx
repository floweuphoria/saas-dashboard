import React, { useState } from 'react'
import { 
  ExternalLink, 
  Check, 
  Clock, 
  FileText, 
  Users, 
  MessageCircle,
  Settings 
} from 'lucide-react'

interface ActivityCardProps {
  title: string;
  description: string;
  timeEstimate: string;
  linkText: string;
  linkUrl: string;
  isCompleted?: boolean;
  onMarkDone?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  timeEstimate,
  linkText,
  linkUrl,
  isCompleted = false,
  onMarkDone
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-medium text-gray-900 mr-3">{title}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Clock size={12} className="mr-1" />
              {timeEstimate}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <a 
              href={linkUrl}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <ExternalLink size={14} className="mr-1" />
              {linkText}
            </a>
            <div className="flex items-center">
              {isCompleted ? (
                <span className="inline-flex items-center text-green-600 text-sm font-medium">
                  <Check size={16} className="mr-1" />
                  Mark as Done
                </span>
              ) : (
                <button 
                  onClick={onMarkDone}
                  className="inline-flex items-center text-gray-600 hover:text-green-600 text-sm font-medium"
                >
                  Mark as Done
                  <Check size={16} className="ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
  const [completedActivities, setCompletedActivities] = useState<Set<string>>(new Set())

  const markActivityDone = (activityId: string) => {
    setCompletedActivities(prev => new Set(Array.from(prev).concat(activityId)))
  }

  const activities = [
    {
      id: 'quickstart',
      title: 'Quickstart Guide',
      description: 'Use the Quickstart Guide to setup your local environment, run a sample workflow, and to connect your workflows to Temporal Cloud.',
      timeEstimate: '10-15 min activity',
      linkText: 'Launch Guide',
      linkUrl: '#'
    },
    {
      id: 'users',
      title: 'Add users',
      description: 'Learn how to invite users, set account-level roles, and assign Namespace permissions.',
      timeEstimate: '2 min activity',
      linkText: 'Invite users',
      linkUrl: '#'
    },
    {
      id: 'application',
      title: 'What is a Temporal Application?',
      description: 'Dive into how Temporal delivers Durable Execution for your applications and services.',
      timeEstimate: '5 min read',
      linkText: 'Go to Docs',
      linkUrl: '#'
    },
    {
      id: 'environment',
      title: 'Set up your local environment',
      description: 'Start your journey here by setting up your development environment, running an existing Temporal app, and then building your first app from scratch using our SDKs',
      timeEstimate: '5 min activity',
      linkText: 'Show Me How',
      linkUrl: '#'
    }
  ]

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Getting started with Temporal</h1>
            
            <div className="space-y-6">
              {activities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  title={activity.title}
                  description={activity.description}
                  timeEstimate={activity.timeEstimate}
                  linkText={activity.linkText}
                  linkUrl={activity.linkUrl}
                  isCompleted={completedActivities.has(activity.id)}
                  onMarkDone={() => markActivityDone(activity.id)}
                />
              ))}
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
            
            <SidebarCard
              title="Got Questions?"
              description="Ask in Slack or browse Community forum"
              linkText="Community forum"
              linkUrl="#"
              icon={<Users size={24} />}
              variant="purple"
            />
            
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