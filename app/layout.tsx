import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About Consulting',
  description:
    'Optimize color choices for readability with the Color Contrast Checker (CCC).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  )
}
