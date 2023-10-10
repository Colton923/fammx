'use server'

import { firestore as db } from '@/lib/firestore'
import { Timestamp } from 'firebase-admin/firestore'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'

const waitingListSignUpFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export async function addUserToWaitingList(
  formData: z.infer<typeof waitingListSignUpFormSchema>
) {
  try {
    console.log('attempting to send', formData.email)
    const emailListAddRes = await db
      .collection('marketing/emailList/preLaunch')
      .add({
        email: formData.email,
        signUpDateTime: Timestamp.fromDate(new Date()),
      })

    revalidatePath('/')

    console.log('Added document with ID: ', emailListAddRes.id)

    if (!emailListAddRes.id) {
      return { status: 400, error: 'Issue submitting email to database.' }
    }

    return { status: 200 }
  } catch (e: any) {
    return { status: 400, error: e.message }
  }
}
