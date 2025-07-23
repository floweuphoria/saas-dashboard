import React from 'react'
import { RefreshCw, Copy } from 'lucide-react'

interface WorkflowDetailsProps {
  workflowData: {
    start: string
    end: string
    duration: string
    runId: string
    workflowType: string
    taskQueue: string
    historySize: string
    billableActions: string
    sdk: string
  }
  workflowId?: string
}

export const WorkflowDetails: React.FC<WorkflowDetailsProps> = ({ workflowData, workflowId }) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 mb-6"
      {...(workflowId === 'pay-invoice-702' && { id: 'tooltip-select-1' })}
    >
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
            <div className="text-sm">{workflowData.start}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">End</div>
            <div className="text-sm">{workflowData.end}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Duration</div>
            <div className="text-sm">{workflowData.duration}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-sm text-gray-600">Run ID</div>
            <div className="text-sm flex items-center">
              {workflowData.runId}
              <button className="ml-1 text-gray-400 hover:text-gray-600">
                <Copy size={12} />
              </button>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Workflow Type</div>
            <div className="text-sm flex items-center">
              {workflowData.workflowType}
              <button className="ml-1 text-gray-400 hover:text-gray-600">
                <Copy size={12} />
              </button>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Task Queue</div>
            <div className="text-sm">{workflowData.taskQueue}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-sm text-gray-600">History Size (Bytes)</div>
            <div className="text-sm">{workflowData.historySize}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Billable Actions (estimate)</div>
            <div className="text-sm">{workflowData.billableActions}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">SDK</div>
            <div className="text-sm flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
              {workflowData.sdk}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}