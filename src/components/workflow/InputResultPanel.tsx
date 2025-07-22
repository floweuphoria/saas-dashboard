import React from 'react'
import { Copy } from 'lucide-react'

interface InputResultPanelProps {
  input: string
  result: string
}

export const InputResultPanel: React.FC<InputResultPanelProps> = ({ input, result }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Input</h3>
        <div className="bg-gray-50 border border-gray-200 rounded p-3 relative">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <Copy size={14} />
          </button>
          <pre className="text-sm text-gray-800">{input}</pre>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-3">Result</h3>
        <div className="bg-gray-50 border border-gray-200 rounded p-3 relative">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <Copy size={14} />
          </button>
          <pre className="text-sm text-gray-800">{result}</pre>
        </div>
      </div>
    </div>
  )
}