import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Mail, FileText, Linkedin, Instagram } from 'lucide-react'
import { ContactButton } from './components/ContactButton'
import { ScheduleButton } from './components/ScheduleButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center p-4">
      <main className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 text-center">
          <Image
            src="https://i.ibb.co/8dBv0tf/lm-profile.jpg"
            alt="Lisa-Marie Schwingshandl"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Lisa-Marie Schwingshandl</h1>
          <p className="text-gray-600 mb-6">Business Development Partner at the CSM Family Office</p>
          
          <div className="space-y-4">
            <Link href="/experience" passHref>
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center justify-center">
                <FileText className="mr-2 h-4 w-4" /> Experience
              </button>
            </Link>
            <ContactButton />
            <ScheduleButton />
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/schmolmueller-schwingshandl/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/lisamarieschwingshandl/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Lisa-Marie Schwingshandl. All rights reserved.
      </footer>
    </div>
  )
}
