import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PennyPips - Trading Education & Community',
  description: 'Join PennyPips for free trading education, community, and resources. Access our educational platform, Discord & Telegram communities, and YouTube channel.',
  keywords: 'trading, forex, education, community, PennyPips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
