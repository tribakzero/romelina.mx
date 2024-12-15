'use client'

import { Calendar } from 'lucide-react'

export function ScheduleButton() {
  return (
    <button
      className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center justify-center"
      onClick={() => window.open('https://cal.com/', '_blank')}
    >
      <Calendar className="mr-2 h-4 w-4" /> Schedule a Meeting
    </button>
  )
}

