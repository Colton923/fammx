'use client'

import Image from 'next/image'
import LogoImage from '@/public/fantasysurvivalpoollogo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import MobileNav from './Mobile/MobileNav'

export default function Nav() {
  const { data: session, status } = useSession()
  const currentPathname: string = usePathname()
  console.log(currentPathname)

  return (
    <div className="w-full flex h-[75px] bg-slate-950 border-b-2 border-b-purple-light justify-between items-center px-4 py-2 md:px-16 text-slate-50">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          alt="Fantasy Football Survivor Pools Logo"
          src={LogoImage}
          width={50}
          height={50}
          placeholder="blur"
          loading="lazy"
        />
        <p className="text-l sm:text-xl font-semibold whitespace-nowrap">
          Fantasy Survivor Pools
        </p>
      </Link>
      <div>
        <div className="hidden sm:flex flex-nowrap">
          {!session && currentPathname !== '/coming-soon' && (
            <Link className="default-btn" href="/coming-soon">
              Sign Up
            </Link>
          )}
          {session && currentPathname !== '/login' && (
            <>
              <button
                className="default-btn"
                onClick={(e) => {
                  e.preventDefault
                  signOut()
                }}
              >
                Logout
              </button>
              <Link className="default-btn" href="/dashboard">
                Dashboard
              </Link>
            </>
          )}
          {!session && currentPathname !== '/' && (
            <Link className="default-btn" href="/">
              Go Home
            </Link>
          )}
        </div>
        <div className="flex-auto sm:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
