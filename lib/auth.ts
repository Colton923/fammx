import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { firestore } from './firestore'
import { Adapter } from 'next-auth/adapters'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter(firestore) as Adapter,
  callbacks: {
    async session({ session, token, user }) {
      if (!session.user) {
        return session
      }
      session.user = { ...session.user }
      return session
    },
  },
}

export default NextAuth(authOptions)
