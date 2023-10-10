'use client'

import Image from 'next/image'
import Link from 'next/link'

import LogoImage from '@/public/fantasysurvivalpoollogo.png'
import { useSession } from 'next-auth/react'

export default function Page() {
  const { data: session, status } = useSession()
  console.log('session:', session)

  return (
    <div className="flex flex-col justify-center items-center w-full px-8 sm:px-16 py-4 text-center lg:leading-loose">
      <Image
        alt="Fantasy Football Survivor Pools Logo"
        src={LogoImage}
        width={500}
        height={500}
        placeholder="blur"
        priority
      />
      <h1 className="leading-none md:leading-tight md:my-2">
        Fantasy Football Survivor Pools
      </h1>
      <h2 className="leading-tight my-4">
        The best web app for fantasy football survivor pool managers and players.
      </h2>
      <Link className="cta-main-btn mt-8" href="/coming-soon">
        Get Started
      </Link>
    </div>
  )
}
