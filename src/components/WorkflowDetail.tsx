import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronDown,
  Copy,
  RefreshCw,
  ArrowUpDown,
  Minimize,
  Filter,
  Pause,
  Download,
  ChevronUp,
} from 'lucide-react'

export const WorkflowDetail: React.FC = () => {
  const { workflowId } = useParams<{ workflowId: string }>()
  const [activeTab, setActiveTab] = useState('History')

  const tabs = [
    { name: 'History', count: 17 },
    { name: 'Relationships', count: 0 },
    { name: 'Workers', count: 0 },
    { name: 'Pending Activities', count: 0 },
    { name: 'Call Stack', count: null },
    { name: 'Queries', count: null },
    { name: 'Metadata', count: null },
  ]

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mr-4">
              <ArrowLeft size={16} className="mr-1" />
              <span className="text-sm">Back to Workflows</span>
            </Link>
            <div className="flex items-center">
              <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded mr-3">
                Completed
              </span>
              <h1 className="text-2xl font-medium">{workflowId || 'pay-invoice-701'}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded text-sm">
              Reset
            </button>
            <button className="p-1.5 border border-gray-300 rounded hover:bg-gray-50">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Current Details Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium flex items-center">
              <span className="w-4 h-4 bg-indigo-600 rounded mr-2"></span>
              Current Details
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <RefreshCw size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-600">Start</div>
                <div className="text-sm">2025-07-18 UTC 23:12:12.21</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">End</div>
                <div className="text-sm">2025-07-18 UTC 23:12:48.07</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Duration</div>
                <div className="text-sm">35s 856ms</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-600">Run ID</div>
                <div className="text-sm flex items-center">
                  01981fcf-3db7-7464-a333-9f7232651b60
                  <button className="ml-1 text-gray-400 hover:text-gray-600">
                    <Copy size={12} />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Workflow Type</div>
                <div className="text-sm flex items-center">
                  MoneyTransfer
                  <button className="ml-1 text-gray-400 hover:text-gray-600">
                    <Copy size={12} />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Task Queue</div>
                <div className="text-sm">TRANSFER_MONEY_TASK_QUEUE</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-600">History Size (Bytes)</div>
                <div className="text-sm">2704</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Billable Actions (estimate)</div>
                <div className="text-sm">3</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">SDK</div>
                <div className="text-sm flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                  Go 1.33.0
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
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

        {/* Input/Result Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Input</h3>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                <Copy size={14} />
              </button>
              <pre className="text-sm text-gray-800">
{`{
  "SourceAccount": "85-150",
  "TargetAccount": "43-812",
  "Amount": 250,
  "ReferenceID": "12345"
}`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Result</h3>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                <Copy size={14} />
              </button>
              <pre className="text-sm text-gray-800">
                "Transfer complete (transaction IDs: W1903885358, D8263501742)"
              </pre>
            </div>
          </div>
        </div>

        {/* Event History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Event History</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
                <ArrowUpDown size={14} className="mr-1" />
                Descending
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
                <Minimize size={14} className="mr-1" />
                Minimized
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
                <Filter size={14} className="mr-1" />
                Filter
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
                <Pause size={14} className="mr-1" />
                Freeze
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
                <Download size={14} className="mr-1" />
                Download
              </button>
            </div>
          </div>
          
          {/* Timeline Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="relative h-32">
              {/* Timeline background */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-1 bg-gray-200 rounded"></div>
              </div>
              
              {/* Timeline events */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>
                  <span className="text-xs text-gray-600 mt-1">Start</span>
                  <span className="text-xs text-gray-500">23:12:12</span>
                </div>
                
                {/* Progress bar */}
                <div className="flex-1 mx-4 relative">
                  <div className="h-1 bg-green-500 rounded"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>
                  <span className="text-xs text-gray-600 mt-1">Deposit</span>
                  <span className="text-xs text-gray-500">23:12:30</span>
                </div>
                
                <div className="flex flex-col items-center ml-8">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>
                  <span className="text-xs text-gray-600 mt-1">Withdraw</span>
                  <span className="text-xs text-gray-500">23:12:48</span>
                </div>
              </div>
            </div>
            
            {/* Scroll down indicator */}
            <div className="flex justify-center mt-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}