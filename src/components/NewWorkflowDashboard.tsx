import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  RefreshCw,
  Filter,
  Zap,
  Download,
  Settings2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import { trackPageView } from '../utils/segment'

export const NewWorkflowDashboard: React.FC = () => {
  useEffect(() => {
    trackPageView('Dashboard');
  }, []);
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium mr-2">1 Workflow</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <RefreshCw size={18} />
          </button>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center">
          <Zap size={18} className="mr-2" />
          <span>Start Workflow</span>
        </button>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded">
          1 Completed
        </span>
      </div>
      <div className="relative mb-4">
        <button className="border border-gray-300 rounded px-4 py-2 flex items-center">
          <Filter size={16} className="mr-2" />
          <span>Filter</span>
        </button>
        <div className="absolute top-full mt-1 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none">
          Click to go back, hold to see history
        </div>
      </div>
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Workflow ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Run ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Start
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <Zap size={16} className="mr-1 text-green-600" />
                  <span className="text-sm text-green-600">Completed</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <Link 
                  to="/workflow/pay-invoice-701" 
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  pay-invoice-701
                </Link>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  01981fcf-3db7-7464-a333-9f7232651b60
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  MoneyTransfer
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">2025-07-18 UTC</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <div>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>100</option>
              <option>50</option>
              <option>25</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Download size={18} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Settings2 size={18} />
            </button>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ArrowLeft size={18} />
              </button>
              <span className="text-sm">1-1 of 1</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}