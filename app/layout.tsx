import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'
export const metadata: Metadata = {
  title: 'Brainspark',
  description: 'AI Plateform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <CrispProvider/>
      <body className={inter.className}>
        <ModalProvider/>
        <ToasterProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
