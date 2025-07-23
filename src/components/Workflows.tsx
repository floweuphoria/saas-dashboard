import React, { useState } from 'react';
import { 
  Filter, 
  Download, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  CheckCircle,
  RefreshCw,
  BarChart3
} from 'lucide-react';

interface WorkflowData {
  id: string;
  status: 'Completed' | 'Running' | 'Failed';
  workflowId: string;
  runId: string;
  type: string;
  start: string;
}

const Workflows: React.FC = () => {
  const [isHighVolumeView, setIsHighVolumeView] = useState(false);
  
  const normalWorkflows: WorkflowData[] = [
    {
      id: '1',
      status: 'Completed',
      workflowId: 'pay-invoice-701',
      runId: '01981fcf-3db7-7464-a333-9f7232651b60',
      type: 'MoneyTransfer',
      start: '2025-07-18 UTC'
    },
    {
      id: '2',
      status: 'Running',
      workflowId: 'user-onboarding-204',
      runId: '01981fcf-4eb8-8575-b444-af8343762c71',
      type: 'UserOnboarding', 
      start: '2025-07-22 UTC'
    },
    {
      id: '3',
      status: 'Completed',
      workflowId: 'data-sync-892',
      runId: '01981fcf-5fc9-9686-c555-bg9454873d82',
      type: 'DataSync',
      start: '2025-07-21 UTC'
    }
  ];

  const highVolumeWorkflows: WorkflowData[] = [
    { id: '1', status: 'Running', workflowId: 'growth-canary', runId: '', type: '', start: '' },
    { id: '2', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/FoundationCloudAPISuite/TestComponents/CloudAPINamespaceSu', runId: '', type: '', start: '' },
    { id: '3', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/NamespaceSuite/s-ce005/TestUpdate', runId: '', type: '', start: '' },
    { id: '4', status: 'Running', workflowId: 'saas-api-canary/2025-07-23-00:30/TestAllAPIs/AuthMethodSuite/TestAll', runId: '', type: '', start: '' },
    { id: '5', status: 'Running', workflowId: 'saas-api-canary/2025-07-23-00:30/TestAllAPIs/RBACSuite/TestAllRBAC', runId: '', type: '', start: '' },
    { id: '6', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/FoundationCloudAPISuite/TestComponents/CloudAPINamespaceSu', runId: '', type: '', start: '' },
    { id: '7', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/FoundationCloudAPISuite/TestComponents', runId: '', type: '', start: '' },
    { id: '8', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/FoundationCloudAPISuite', runId: '', type: '', start: '' },
    { id: '9', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/AuditLogSuite/TestAuditLog', runId: '', type: '', start: '' },
    { id: '10', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/NamespaceSuite/s-ce005', runId: '', type: '', start: '' },
    { id: '11', status: 'Running', workflowId: 'saas-api-canary/2025-07-23-00:30/TestAllAPIs/AuthMethodSuite', runId: '', type: '', start: '' },
    { id: '12', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite/AuditLogSuite', runId: '', type: '', start: '' },
    { id: '13', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30/TestFoundationSuite', runId: '', type: '', start: '' },
    { id: '14', status: 'Running', workflowId: 'foundation-canary/2025-07-23-00:30', runId: '', type: '', start: '' }
  ];

  const workflows = isHighVolumeView ? highVolumeWorkflows : normalWorkflows;
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(100);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle size={16} className="text-green-600" />;
      case 'Running':
        return <RefreshCw size={16} className="text-blue-600 animate-spin" />;
      case 'Failed':
        return <CheckCircle size={16} className="text-red-600" />;
      default:
        return <CheckCircle size={16} className="text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (status) {
      case 'Completed':
        return `${baseClasses} bg-green-100 text-green-700`;
      case 'Running':
        return `${baseClasses} bg-blue-100 text-blue-700`;
      case 'Failed':
        return `${baseClasses} bg-red-100 text-red-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <div className="workflows-page">
      {/* Header */}
      <div className="workflow-header">
        <div className="workflow-title-section">
          <h1 className="workflow-title">
            {isHighVolumeView ? '1,966,085 Workflows' : '1 Workflow'}
          </h1>
          <RefreshCw size={20} className="text-gray-500 ml-2" />
          {isHighVolumeView && <span className="text-xs text-gray-500 ml-2">-8</span>}
          <div className="workflow-status">
            {isHighVolumeView ? (
              <>
                <span className="status-badge bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mr-2">23 Running</span>
                <span className="text-xs text-gray-500 mr-2">-8</span>
                <span className="status-badge bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium mr-2">126 Timed Out</span>
                <span className="status-badge bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mr-2">1,959,901 Completed</span>
                <span className="status-badge bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium mr-2">5,361 Failed</span>
                <span className="status-badge bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium mr-2">452 Continued as New</span>
                <span className="status-badge bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium mr-2">2 Canceled</span>
                <span className="status-badge bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">220 Terminated</span>
              </>
            ) : (
              <span className="status-badge completed">1 Completed</span>
            )}
          </div>
        </div>
        <button 
          onClick={() => setIsHighVolumeView(!isHighVolumeView)}
          className="start-workflow-btn"
        >
          <BarChart3 size={16} />
          {isHighVolumeView ? 'Normal View' : 'High Volume'}
        </button>
      </div>

      {/* Controls */}
      <div className="workflow-controls">
        <button className="filter-btn">
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="workflow-table-container">
        <table className="workflow-table">
          <thead>
            <tr>
              <th className="checkbox-col">
                <input type="checkbox" className="workflow-checkbox" />
              </th>
              <th>Status</th>
              <th>Workflow ID</th>
              <th>Run ID</th>
              <th>Type</th>
              <th>Start</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow) => (
              <tr key={workflow.id} className="workflow-row">
                <td className="checkbox-col">
                  <input type="checkbox" className="workflow-checkbox" />
                </td>
                <td className="status-col">
                  <div className="status-cell">
                    {getStatusIcon(workflow.status)}
                    <span className={getStatusBadge(workflow.status)}>
                      {workflow.status}
                    </span>
                  </div>
                </td>
                <td className="workflow-id-col">
                  <span className="workflow-id-link">{workflow.workflowId}</span>
                </td>
                <td className="run-id-col">
                  <span className="run-id-link">{workflow.runId}</span>
                </td>
                <td className="type-col">
                  <span className="type-link">{workflow.type}</span>
                </td>
                <td className="start-col">{workflow.start}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Controls */}
      <div className="workflow-footer">
        <div className="items-per-page">
          <select className="page-size-select" value={itemsPerPage}>
            <option value={100}>100</option>
            <option value={50}>50</option>
            <option value={25}>25</option>
          </select>
        </div>
        
        <div className="table-actions">
          <button className="table-action-btn">
            <Download size={16} />
          </button>
          <button className="table-action-btn">
            <Settings size={16} />
          </button>
        </div>

        <div className="pagination">
          <button className="pagination-btn">
            <ChevronLeft size={16} />
          </button>
          <span className="pagination-info">
            {isHighVolumeView ? '1-100 of 1,966,085' : '1-1 of 1'}
          </span>
          <button className="pagination-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workflows;