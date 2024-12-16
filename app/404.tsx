import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center p-4">
      <main className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden text-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/lm" passHref>
          <Button variant="outline">Go back to homepage</Button>
        </Link>
      </main>
    </div>
  )
}

