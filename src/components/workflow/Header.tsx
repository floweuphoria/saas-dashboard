import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronDown } from 'lucide-react'

interface HeaderProps {
  workflowId: string
  status: string
}

export const Header: React.FC<HeaderProps> = ({ workflowId, status }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mr-4">
            <ArrowLeft size={16} className="mr-1" />
            <span className="text-sm">Back to Workflows</span>
          </Link>
          <div className="flex items-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded mr-3">
              {status}
            </span>
            <h1 className="text-2xl font-medium">
              {workflowId === 'pay-invoice-701' ? 'pay-invoice-701 (uf)' : 
               workflowId === 'pay-invoice-702' ? 'pay-invoice-702 (fr)' : workflowId}
            </h1>
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
  )
}