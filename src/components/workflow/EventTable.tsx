import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Event {
  id: number
  eventType: string
  timestamp: string
  details?: string
  expanded?: boolean
}

interface EventTableProps {
  events: Event[]
}

export const EventTable: React.FC<EventTableProps> = ({ events }) => {
  const [expandedEvents, setExpandedEvents] = React.useState<Set<number>>(new Set())

  const toggleEvent = (eventId: number) => {
    const newExpanded = new Set(expandedEvents)
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId)
    } else {
      newExpanded.add(eventId)
    }
    setExpandedEvents(newExpanded)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-8"></th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Event ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Event Type</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <React.Fragment key={event.id}>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <button 
                    onClick={() => toggleEvent(event.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {expandedEvents.has(event.id) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                </td>
                <td className="px-4 py-3 text-sm text-blue-600">{event.id}</td>
                <td className="px-4 py-3 text-sm">{event.eventType}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{event.timestamp}</td>
              </tr>
              {expandedEvents.has(event.id) && event.details && (
                <tr>
                  <td colSpan={4} className="px-4 py-3 bg-gray-50">
                    <div className="text-sm text-gray-700">
                      <pre className="whitespace-pre-wrap">{event.details}</pre>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}