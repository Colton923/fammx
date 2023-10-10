import React from 'react'
import WaitingListSignUpForm from './_components/WaitingListSignUpForm'

export default function ComingSoon() {
  return (
    <div className="md:w-1/4 mx-auto">
      <h2>We're hard at work!</h2>
      <p className="my-4">
        Sign up below and we'll let you know when we're ready to enhance your fantasy
        surivor pool management!
      </p>
      <WaitingListSignUpForm />
    </div>
  )
}
