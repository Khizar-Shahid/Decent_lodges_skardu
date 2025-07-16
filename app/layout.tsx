import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decent Luxury Hotel Skardu - Premium Accommodation',
  description: 'Experience luxury accommodation in Skardu with Decent Luxury Hotel. Located on ShangriLa road, Murtazabad, offering 8 rooms with modern amenities.',
  keywords: 'hotel, skardu, luxury accommodation, decent luxury hotel, shangrila road, murtazabad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  )
} 