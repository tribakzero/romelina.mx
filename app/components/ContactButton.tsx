'use client'

import { Mail } from 'lucide-react'

export function ContactButton() {
  return (
    <button
      className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center justify-center"
      onClick={() => window.location.href = 'mailto:lisamarie@schwingshandl.org'}
    >
      <Mail className="mr-2 h-4 w-4" /> Contact
    </button>
  )
}

