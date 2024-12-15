import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lisa-Marie Schwingshandl',
  description: 'Business Development Partner at the CSM Family Office',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

