import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  RefreshCw,
  Filter,
  Zap,
  Download,
  Settings2,
  ArrowLeft,
  ArrowRight,
  BarChart3,
} from 'lucide-react'
import { trackPageView } from '../utils/segment'

type ViewState = 'normal' | 'highVolume' | 'empty';

export const NewWorkflowDashboard: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('normal');
  
  useEffect(() => {
    trackPageView('Dashboard');
  }, []);

  const cycleViewState = () => {
    setViewState(prev => {
      switch (prev) {
        case 'normal': return 'highVolume';
        case 'highVolume': return 'empty';
        case 'empty': return 'normal';
        default: return 'normal';
      }
    });
  };

  const getButtonText = () => {
    switch (viewState) {
      case 'normal': return 'High Volume';
      case 'highVolume': return 'Empty State';
      case 'empty': return 'Normal View';
      default: return 'High Volume';
    }
  };
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium mr-2">
            {viewState === 'empty' ? '0 Workflows' : 
             viewState === 'highVolume' ? '1,966,085 Workflows' : '1 Workflow'}
          </h1>
          <button className="text-gray-500 hover:text-gray-700">
            <RefreshCw size={18} />
          </button>
          {viewState === 'highVolume' && <span className="text-sm text-gray-500 ml-2">-8</span>}
        </div>
        <button 
          onClick={cycleViewState}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <BarChart3 size={18} className="mr-2" />
          <span>{getButtonText()}</span>
        </button>
      </div>
      <div className="mb-4">
        {viewState === 'empty' ? null : 
         viewState === 'highVolume' ? (
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-0.5 rounded">23 Running</span>
            <span className="text-sm text-gray-500">-8</span>
            <span className="inline-block bg-orange-100 text-orange-800 text-sm px-2 py-0.5 rounded">126 Timed Out</span>
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded">1,959,901 Completed</span>
            <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-0.5 rounded">5,361 Failed</span>
            <span className="inline-block bg-purple-100 text-purple-800 text-sm px-2 py-0.5 rounded">452 Continued as New</span>
            <span className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-0.5 rounded">2 Canceled</span>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-2 py-0.5 rounded">220 Terminated</span>
          </div>
        ) : (
          <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded">
            1 Completed
          </span>
        )}
      </div>
      <div className="relative mb-4">
        {viewState === 'empty' ? (
          <div className="flex items-center gap-4">
            <button className="border border-gray-300 rounded px-4 py-2 flex items-center relative">
              <Filter size={16} className="mr-2" />
              <span>Filter</span>
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Clear all</button>
            <button className="text-gray-400 hover:text-gray-600">
              <Download size={16} />
            </button>
          </div>
        ) : (
          <button className="border border-gray-300 rounded px-4 py-2 flex items-center">
            <Filter size={16} className="mr-2" />
            <span>Filter</span>
          </button>
        )}
        <div className="absolute top-full mt-1 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none">
          Click to go back, hold to see history
        </div>
      </div>
      {viewState === 'empty' && (
        <div className="mb-4">
          <span className="inline-block bg-blue-50 border border-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">
            WorkflowType = "adfsdfasafds"
            <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
          </span>
        </div>
      )}
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
              {viewState === 'empty' && (
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  End
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {viewState === 'empty' ? (
              <tr>
                <td colSpan={6} className="px-4 py-16 text-center">
                  <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-500">
                    <div className="mb-8 relative">
                      {/* Simple illustration with CSS */}
                      <div className="w-32 h-20 border-2 border-gray-300 rounded-lg bg-gray-50 relative">
                        <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 rounded-full"></div>
                        <div className="absolute bottom-2 right-8 w-8 h-8 border-2 border-gray-400 rounded-full bg-white"></div>
                        <div className="absolute -bottom-2 left-4 w-16 h-4 bg-purple-200 rounded-full opacity-60"></div>
                        <div className="absolute -bottom-4 right-2 w-12 h-6 bg-gray-200 rounded-full opacity-40"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No Results</h3>
                    <p className="text-gray-600 mb-1">There are no results for the applied filters.</p>
                    <p className="text-gray-600">Try adjusting or clearing the filters to see the Workflows running on this Namespace.</p>
                  </div>
                </td>
              </tr>
            ) : viewState === 'highVolume' ? (
              <>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <RefreshCw size={16} className="mr-1 text-blue-600 animate-spin" />
                      <span className="text-sm text-blue-600">Running</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">growth-canary</span>
                  </td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <RefreshCw size={16} className="mr-1 text-blue-600 animate-spin" />
                      <span className="text-sm text-blue-600">Running</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">foundation-canary/2025-07-23-00:30/TestFoundationSuite/FoundationCloudAPISuite/TestComponents/CloudAPINamespaceSu</span>
                  </td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <RefreshCw size={16} className="mr-1 text-blue-600 animate-spin" />
                      <span className="text-sm text-blue-600">Running</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">foundation-canary/2025-07-23-00:30/TestFoundationSuite/NamespaceSuite/s-ce005/TestUpdate</span>
                  </td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <RefreshCw size={16} className="mr-1 text-blue-600 animate-spin" />
                      <span className="text-sm text-blue-600">Running</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">saas-api-canary/2025-07-23-00:30/TestAllAPIs/AuthMethodSuite/TestAll</span>
                  </td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <RefreshCw size={16} className="mr-1 text-blue-600 animate-spin" />
                      <span className="text-sm text-blue-600">Running</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">saas-api-canary/2025-07-23-00:30/TestAllAPIs/RBACSuite/TestAllRBAC</span>
                  </td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                  <td className="px-4 py-3"><span className="text-sm"></span></td>
                </tr>
              </>
            ) : (
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
            )}
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
              <span className="text-sm">
                {viewState === 'empty' ? '0-0 of 0' : 
                 viewState === 'highVolume' ? '1-100 of 1,966,085' : '1-1 of 1'}
              </span>
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