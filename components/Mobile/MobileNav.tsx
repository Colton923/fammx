'use client'
import Link from 'next/link'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const dropdownClasses =
  'navbar-toggler text-white-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline'

export default function MobileNavFunction() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const { data: session } = useSession()

  return (
    <>
      <button
        className={`z-[99999] ${dropdownClasses} ${
          mobileMenuActive ? 'fixed top-[20px] right-[20px]' : ''
        }`}
        type="button"
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        className={
          mobileMenuActive
            ? 'fixed top-0 left-0 w-full h-screen bg-[#474056] opacity-95 z-[9999] pt-8 text-xl text-center'
            : 'hidden'
        }
      >
        {!session ? (
          <div className="flex flex-col gap-y-4 h-full justify-center">
            {/* <button
              onClick={() => {
                setMobileMenuActive(false), signIn('google')
              }}
            >
              Login
            </button> */}
            <Link href="/coming-soon">
              <button onClick={() => setMobileMenuActive(false)}>Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-y-4">
            <button
              onClick={() => {
                setMobileMenuActive(false), signOut()
              }}
            >
              Logout
            </button>
            <Link href="/dashboard">
              <button onClick={() => setMobileMenuActive(false)}>Dashboard</button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
