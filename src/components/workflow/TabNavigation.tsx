import React from 'react'

interface Tab {
  name: string
  count: number | null
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabName: string) => void
  workflowId?: string
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange, workflowId }) => {
  return (
    <div 
      className="border-b border-gray-200 mb-6"
      {...(workflowId === 'pay-invoice-702' && { id: 'tooltip-select-2' })}
    >
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab.name
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.name}
            {tab.count !== null && (
              <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                activeTab === tab.name
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}