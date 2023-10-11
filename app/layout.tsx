import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import AppShell from '../components/applicationShell/AppShell'
import '@mantine/core/styles.css'

export const metadata = {
  title: 'Blakes starter app',
  description: 'Using Mantine with Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
