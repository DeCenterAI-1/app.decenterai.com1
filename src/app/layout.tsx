import './globals.css'
import { Inter } from 'next/font/google'
import { AppMetaData } from '@config/app'
//import {ContextProvider} from '@state/userContext'
import NetworkProvider from './NetworkProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = AppMetaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <NetworkProvider>
          {/* <ContextProvider>{children}</ContextProvider> */}
          {children}
        </NetworkProvider>
      </body>
      </head>
    </html>
  )
}
