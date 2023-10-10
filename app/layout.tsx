import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { NextAuthProvider } from './providers'
import { defaultMetadata } from '@/lib/defaultMetadata'

export const metadata = defaultMetadata

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-zinc-400">
        <NextAuthProvider>
          <Header />
          <main
            className={`bg-slate-950 ${inter.className} flex justify-center items-center grow`}
          >
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
