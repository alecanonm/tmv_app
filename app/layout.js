import { Providers } from '@components/templates'
import { Inter } from 'next/font/google'
import '@styles/globals.css'
import { RedirectUI } from '@components/atoms'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Take my vape',
  description: 'Take my vape',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RedirectUI />
        <Providers>
          <div className='flex flex-col h-screen'>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
