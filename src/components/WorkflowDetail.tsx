import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from './workflow/Header'
import { WorkflowDetails } from './workflow/WorkflowDetails'
import { TabNavigation } from './workflow/TabNavigation'
import { InputResultPanel } from './workflow/InputResultPanel'
import { EventHistory } from './workflow/EventHistory'
import { EventTable } from './workflow/EventTable'
import { trackWorkflowView, trackPageView } from '../utils/segment'

export const WorkflowDetail: React.FC = () => {
  const { workflowId } = useParams<{ workflowId: string }>()
  const [activeTab, setActiveTab] = useState('History')

  useEffect(() => {
    if (workflowId) {
      trackWorkflowView(workflowId)
      trackPageView('Workflow Detail', { workflowId })
    }
  }, [workflowId])

  const tabs = [
    { name: 'History', count: 17 },
    { name: 'Relationships', count: 0 },
    { name: 'Workers', count: 0 },
    { name: 'Pending Activities', count: 0 },
    { name: 'Call Stack', count: null },
    { name: 'Queries', count: null },
    { name: 'Metadata', count: null },
  ]

  const workflowData = {
    start: '2025-07-18 UTC 23:12:12.21',
    end: '2025-07-18 UTC 23:12:48.07',
    duration: '35s 856ms',
    runId: '01981fcf-3db7-7464-a333-9f7232651b60',
    workflowType: 'MoneyTransfer',
    taskQueue: 'TRANSFER_MONEY_TASK_QUEUE',
    historySize: '2704',
    billableActions: '3',
    sdk: 'Go 1.33.0'
  }

  const inputData = `{
  "SourceAccount": "85-150",
  "TargetAccount": "43-812",
  "Amount": 250,
  "ReferenceID": "12345"
}`

  const resultData = `"Transfer complete (transaction IDs: W1903885358, D8263501742)"`

  const sampleEvents = [
    {
      id: 1,
      eventType: 'WorkflowExecutionStarted',
      timestamp: '2025-07-18 23:12:12.210 UTC',
      details: 'Workflow execution started with input parameters'
    },
    {
      id: 2,
      eventType: 'ActivityTaskScheduled',
      timestamp: '2025-07-18 23:12:12.315 UTC',
      details: 'Withdraw activity scheduled for account 85-150'
    },
    {
      id: 3,
      eventType: 'ActivityTaskStarted',
      timestamp: '2025-07-18 23:12:15.120 UTC',
      details: 'Withdraw activity started'
    },
    {
      id: 4,
      eventType: 'ActivityTaskCompleted',
      timestamp: '2025-07-18 23:12:30.580 UTC',
      details: 'Withdraw completed successfully - Transaction ID: W1903885358'
    },
    {
      id: 5,
      eventType: 'ActivityTaskScheduled',
      timestamp: '2025-07-18 23:12:30.625 UTC',
      details: 'Deposit activity scheduled for account 43-812'
    },
    {
      id: 6,
      eventType: 'ActivityTaskStarted',
      timestamp: '2025-07-18 23:12:32.100 UTC',
      details: 'Deposit activity started'
    },
    {
      id: 7,
      eventType: 'ActivityTaskCompleted',
      timestamp: '2025-07-18 23:12:48.045 UTC',
      details: 'Deposit completed successfully - Transaction ID: D8263501742'
    },
    {
      id: 8,
      eventType: 'WorkflowExecutionCompleted',
      timestamp: '2025-07-18 23:12:48.070 UTC',
      details: 'Workflow execution completed successfully'
    }
  ]

  return (
    <div className="flex-1 overflow-auto">
      <Header 
        workflowId={workflowId || 'pay-invoice-701'} 
        status="Completed" 
      />
      
      <div className="p-6">
        <WorkflowDetails workflowData={workflowData} />
        
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <InputResultPanel 
          input={inputData}
          result={resultData}
        />
        
        <EventHistory />
        
        <EventTable events={sampleEvents} />
      </div>
    </div>
  )
}