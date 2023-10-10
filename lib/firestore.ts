import { initFirestore } from '@auth/firebase-adapter'
import { cert } from 'firebase-admin/app'

// firebase client
import {
  getDoc,
  doc,
  getDocs,
  addDoc,
  collection,
  query,
  where,
} from 'firebase/firestore'

const firestore = initFirestore({
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/gm, '\n'),
  }),
})

export { addDoc, collection, doc, firestore, getDoc, getDocs, query, where }
