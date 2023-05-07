import type { User } from "@firebase/auth"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore"

import { app, db } from "./firebase"

import { FirebaseStore, FirebaseStoreWithId } from "@/types"

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const loginWithGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(`Login error (${errorCode}): ${errorMessage}`)
    })
}

export const LogoutWithGoogle = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Error logging out:", error)
  }
}

export const getLoginUser = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
}

// schedule apis

export const addSchedule = async (data: Omit<FirebaseStore, "id">) => {
  try {
    const docRef = await addDoc(collection(db, "schedule"), data)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const updateSchedule = async (id: string, data: FirebaseStore) => {
  try {
    const usersCollection = collection(db, "schedule")
    const docRef = doc(usersCollection, id)
    await setDoc(docRef, data)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const getSchedule = async (id: string): Promise<FirebaseStore> => {
  try {
    const docRef = doc(db, "schedule", id)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data() as FirebaseStore
    const staticAddDay = (
      data.staticAddDay as unknown as { seconds: number; nanoseconds: number }[]
    ).map((timestampData) => new Date(timestampData.seconds * 1000))
    const staticDeleteDay = (
      data.staticDeleteDay as unknown as { seconds: number; nanoseconds: number }[]
    ).map((timestampData) => new Date(timestampData.seconds * 1000))

    return { id: docSnap.id, ...data, staticAddDay, staticDeleteDay } as FirebaseStore
  } catch (e) {
    console.error("Error getting document: ", e)
    throw e
  }
}

export const deleteSchedule = async (id: string) => {
  try {
    const docRef = doc(db, "schedule", id)
    await deleteDoc(docRef)
  } catch (e) {
    console.error("Error deleting document: ", e)
  }
}

export const getScheduleList = async (userId: string): Promise<FirebaseStoreWithId[]> => {
  try {
    const scheduleQuery = query(collection(db, "schedule"), where("user", "==", userId))
    const querySnapshot = await getDocs(scheduleQuery)
    const scheduleList: FirebaseStoreWithId[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      scheduleList.push({ id: doc.id, ...data } as FirebaseStoreWithId)
    })
    return scheduleList
  } catch (e) {
    console.error("Error getting schedule list: ", e)
    throw e
  }
}
