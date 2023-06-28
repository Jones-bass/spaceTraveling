import { ReactNode } from 'react'

import { Roboto_Flex as Roboto } from 'next/font/google'

import './globals.css'
import Header from '@/components'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Spacetraveling',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ptBR">
      <body className={`${roboto.variable} bg-black font-sans text-white-100`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
