'use client'

import Footer from './Footer'
import Nav from './Nav'
import { Container, Flex } from '@mantine/core'

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container w={'100%'} maw={1200} p={0} m={0}>
      <Flex direction={'column'} h={100} justify={'space-between'}>
        <Nav />
        {children}
        <Footer />
      </Flex>
    </Container>
  )
}

export default AppShell
