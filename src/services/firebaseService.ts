import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  type Firestore,
} from 'firebase/firestore'
import type { Movie } from '../types/movie'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(firebaseApp)
const db: Firestore = getFirestore(firebaseApp)

const favouritesCollection = collection(db, 'favourites')

async function addFavourite(movie: Movie): Promise<void> {
  try {
    const documentRef = doc(db, 'favourites', movie.imdbID)

    const movieData = Object.fromEntries(
      Object.entries(movie).filter(([, value]) => value !== undefined)
    )

    await setDoc(documentRef, movieData)
  } catch (error) {
    throw new Error(
      `Unable to add favourite movie: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    )
  }
}

async function removeFavourite(imdbID: string): Promise<void> {
  try {
    const documentRef = doc(db, 'favourites', imdbID)
    await deleteDoc(documentRef)
  } catch (error) {
    throw new Error(
      `Unable to remove favourite movie: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    )
  }
}

async function getFavourites(): Promise<Movie[]> {
  try {
    const snapshot = await getDocs(favouritesCollection)
    return snapshot.docs.map((document) => document.data() as Movie)
  } catch (error) {
    throw new Error(
      `Unable to load favourite movies: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    )
  }
}

export { firebaseApp, auth, db }
export { addFavourite, removeFavourite, getFavourites }