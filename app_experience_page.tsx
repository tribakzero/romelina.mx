import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center p-4">
      <main className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <Link href="/" passHref>
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Experience</h1>
          
          <div className="space-y-6">
            <ExperienceItem 
              title="Partner, Business Development"
              company="CSM Family Ventures"
              date="November 2024 – Present"
            />
            <ExperienceItem 
              title="Office of the President"
              company="Kerna Health"
              date="December 2022 – Present"
            />
            <ExperienceItem 
              title="Administrative Assistant"
              company="Besa Sharrah for Senate"
              date="February 2024 – November 2024"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Education</h2>
          <div className="space-y-6">
            <ExperienceItem 
              title="MBA, Business Analytics"
              company="Fisher College of Business, The Ohio State University"
              date="August 2024"
            />
            <ExperienceItem 
              title="BA, Criminal Justice & Criminology"
              company="The Ohio State University"
              date="May 2023"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function ExperienceItem({ title, company, date }: { title: string, company: string, date: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  )
}

