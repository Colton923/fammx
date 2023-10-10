import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MantineProvider } from '@mantine/core'

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MantineProvider>{children}</MantineProvider>
        <Footer />
      </body>
    </html>
  )
}
