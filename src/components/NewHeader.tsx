import React from 'react'
import {
  ExternalLink,
  Clock,
  Monitor,
  ChevronDown,
  Settings2,
} from 'lucide-react'

export const NewHeader: React.FC = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center px-4 h-14">
        <div className="flex items-center border border-gray-200 rounded px-2 py-1 flex-1">
          <span className="mr-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 8V16L12 20L4 16V8L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm">quickstart-samarqui-16957b01.iiqno</span>
          <span className="ml-auto">
            <ExternalLink size={16} />
          </span>
        </div>
        <div className="flex items-center ml-4 gap-2">
          <button className="flex items-center text-sm border border-gray-200 rounded px-2 py-1">
            <Clock size={16} className="mr-1" />
            <span>UTC</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="p-2 border border-gray-200 rounded">
            <Monitor size={16} />
          </button>
          <button className="p-2 border border-gray-200 rounded">
            <Settings2 size={16} />
          </button>
          <button className="p-2 border border-gray-200 rounded bg-blue-600 text-white">
            <span className="font-medium">M</span>
          </button>
        </div>
      </div>
    </header>
  )
}