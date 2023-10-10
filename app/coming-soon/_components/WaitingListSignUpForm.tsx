'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { addUserToWaitingList } from '../_actions/actions'
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { ServerActionResponseType } from '@/actions/global-actions'

const waitingListSignUpFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export default function WaitingListSignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting, errors },
    resetField,
  } = useForm<z.infer<typeof waitingListSignUpFormSchema>>({
    resolver: zodResolver(waitingListSignUpFormSchema),
    defaultValues: {
      email: '',
    },
  })

  // const { pending } = useFormStatus()
  // using react-hook-form state...
  // console.log('submitting form status: ', isSubmitting)

  const onSubmit = async (data: z.infer<typeof waitingListSignUpFormSchema>) => {
    const formSubmitResp = (await addUserToWaitingList(
      data
    )) as ServerActionResponseType
    if (formSubmitResp.status === 400) {
      console.log('back-end error messaging', formSubmitResp.errors)
      return
    }

    if (formSubmitResp.status === 200) {
      // console.log('success after back-end stuff..', formSubmitResp)
      // reset form back to default values
      resetField('email')
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(
          // successful submit stuff..
          (data) => {
            onSubmit(data)
          },
          // front-end error-y stuff
          (errors) => {
            console.log('front-end errors ', errors)
          }
        )}
        noValidate={true}
      >
        <input
          {...register('email')}
          className="default-form-input"
          type="email"
          autoComplete="email"
          placeholder="Enter email"
          defaultValue={''}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        {isSubmitSuccessful && <p>Email submitted successfully!</p>}
        <button
          className="default-form-submit-btn"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </>
  )
}
