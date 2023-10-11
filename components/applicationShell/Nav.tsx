'use client'

import { Flex, Grid, Burger, BackgroundImage, Modal, Button } from '@mantine/core'
import backgroundImage from '@/public/HomepageHeader-2.png'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <BackgroundImage src={backgroundImage.src} h={100}>
      <Burger
        size={'xl'}
        opened={isMenuOpened}
        onClick={() => setIsMenuOpened((s) => !s)}
      />
      <Modal opened={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
        <Grid columns={2} align={'center'}>
          <Flex justify={'center'} miw={'150px'} p={'xs'}>
            <Button
              component={Link}
              href={'/'}
              onClick={() => setIsMenuOpened(false)}
              c={'red'}
              bg={'dark'}
            >
              Home
            </Button>
          </Flex>
          <Flex justify={'center'} miw={'150px'} p={'xs'}>
            <Button
              component={Link}
              href={'/about'}
              onClick={() => setIsMenuOpened(false)}
              c={'red'}
              bg={'dark'}
            >
              About
            </Button>
          </Flex>
          <Flex justify={'center'} miw={'150px'} p={'xs'}>
            <Button
              component={Link}
              href={'/multimedia'}
              onClick={() => setIsMenuOpened(false)}
              c={'red'}
              bg={'dark'}
            >
              Multimedia
            </Button>
          </Flex>
          <Flex justify={'center'} miw={'150px'} p={'xs'}>
            <Button
              component={Link}
              href={'/contact'}
              onClick={() => setIsMenuOpened(false)}
              c={'red'}
              bg={'dark'}
            >
              Contact
            </Button>
          </Flex>
        </Grid>
      </Modal>
    </BackgroundImage>
  )
}

export default Nav
