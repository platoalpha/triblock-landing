import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'TriblockHR & Payroll',
    default:
      'TriblockHR - Your complete all-in-one integrated HR software built for your success',
  },
  description:
    'Transform your business with our intelligent HR solutions. Drive effectiveness, automate tasks, enhance self-service all in one easy to use package.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
      style={{
        backgroundColor: '#333366',
      }}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
