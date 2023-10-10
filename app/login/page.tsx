'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const { data: session, status } = useSession()
  if (status === 'authenticated') {
    router.replace('/dashboard')
  }

  return (
    <div className="w-1/3 mx-auto mt-8 h-[350px]">
      <button className="cta-main-btn" onClick={() => signIn('google')}>
        Login
      </button>
    </div>
  )
}
