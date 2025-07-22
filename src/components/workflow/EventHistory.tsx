import React from 'react'
import { ArrowUpDown, Minimize, Filter, Pause, Download, ChevronUp } from 'lucide-react'

export const EventHistory: React.FC = () => {
  return (
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
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
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
  )
}