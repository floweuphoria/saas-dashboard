import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as Frigade from '@frigade/react'
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

  const workflowData = workflowId === 'pay-invoice-702' ? {
    start: '2025-07-19 UTC 14:22:08.45',
    end: '2025-07-19 UTC 14:22:41.92',
    duration: '33s 470ms',
    runId: '02981fcf-4db8-8575-b444-8f8343762c71',
    workflowType: 'MoneyTransfer',
    taskQueue: 'TRANSFER_MONEY_TASK_QUEUE',
    historySize: '2698',
    billableActions: '3',
    sdk: 'Go 1.33.0'
  } : {
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

  const inputData = workflowId === 'pay-invoice-702' ? `{
  "SourceAccount": "92-380",
  "TargetAccount": "67-245",
  "Amount": 175,
  "ReferenceID": "67890"
}` : `{
  "SourceAccount": "85-150",
  "TargetAccount": "43-812",
  "Amount": 250,
  "ReferenceID": "12345"
}`

  const resultData = workflowId === 'pay-invoice-702' ? 
    `"Transfer complete (transaction IDs: W1903885412, D8263501798)"` :
    `"Transfer complete (transaction IDs: W1903885358, D8263501742)"`

  const sampleEvents = workflowId === 'pay-invoice-702' ? [
    {
      id: 1,
      eventType: 'WorkflowExecutionStarted',
      timestamp: '2025-07-19 14:22:08.450 UTC',
      details: 'Workflow execution started with input parameters'
    },
    {
      id: 2,
      eventType: 'ActivityTaskScheduled',
      timestamp: '2025-07-19 14:22:08.555 UTC',
      details: 'Withdraw activity scheduled for account 92-380'
    },
    {
      id: 3,
      eventType: 'ActivityTaskStarted',
      timestamp: '2025-07-19 14:22:11.230 UTC',
      details: 'Withdraw activity started'
    },
    {
      id: 4,
      eventType: 'ActivityTaskCompleted',
      timestamp: '2025-07-19 14:22:25.180 UTC',
      details: 'Withdraw completed successfully - Transaction ID: W1903885412'
    },
    {
      id: 5,
      eventType: 'ActivityTaskScheduled',
      timestamp: '2025-07-19 14:22:25.225 UTC',
      details: 'Deposit activity scheduled for account 67-245'
    },
    {
      id: 6,
      eventType: 'ActivityTaskStarted',
      timestamp: '2025-07-19 14:22:27.100 UTC',
      details: 'Deposit activity started'
    },
    {
      id: 7,
      eventType: 'ActivityTaskCompleted',
      timestamp: '2025-07-19 14:22:41.895 UTC',
      details: 'Deposit completed successfully - Transaction ID: D8263501798'
    },
    {
      id: 8,
      eventType: 'WorkflowExecutionCompleted',
      timestamp: '2025-07-19 14:22:41.920 UTC',
      details: 'Workflow execution completed successfully'
    }
  ] : [
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
        <WorkflowDetails workflowData={workflowData} workflowId={workflowId} />
        
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          workflowId={workflowId}
        />
        
        <InputResultPanel 
          input={inputData}
          result={resultData}
        />
        
        <EventHistory />
        
        <EventTable events={sampleEvents} />
      </div>
      
      {workflowId === 'pay-invoice-702' && (
        <Frigade.Tour
          flowId="flow_finkx80Z" 
        />
      )}
    </div>
  )
}