import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Mail, FileText, Linkedin, Instagram } from 'lucide-react'

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
              <Button className="w-full" variant="outline">
                <FileText className="mr-2 h-4 w-4" /> Experience
              </Button>
            </Link>
            <Button 
              className="w-full" 
              variant="outline" 
              onClick={() => window.location.href = 'mailto:lisamarie@schwingshandl.org'}
            >
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => window.open('https://cal.com/', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" /> Schedule a Meeting
            </Button>
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

