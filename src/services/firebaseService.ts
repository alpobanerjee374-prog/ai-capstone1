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

function validateUserId(userId: string): string {
  const trimmedUserId = userId.trim()

  if (!trimmedUserId) {
    throw new Error('A valid user ID is required to manage favourites.')
  }

  return trimmedUserId
}

function getUserFavouritesCollection(userId: string) {
  const validUserId = validateUserId(userId)

  return collection(db, 'users', validUserId, 'favourites')
}

function getFavouriteDocument(userId: string, imdbID: string) {
  const validUserId = validateUserId(userId)

  return doc(db, 'users', validUserId, 'favourites', imdbID)
}

async function addFavourite(userId: string, movie: Movie): Promise<void> {
  try {
    const documentRef = getFavouriteDocument(userId, movie.imdbID)

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

async function removeFavourite(
  userId: string,
  imdbID: string
): Promise<void> {
  try {
    const documentRef = getFavouriteDocument(userId, imdbID)

    await deleteDoc(documentRef)
  } catch (error) {
    throw new Error(
      `Unable to remove favourite movie: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`
    )
  }
}

async function getFavourites(userId: string): Promise<Movie[]> {
  try {
    const favouritesCollection = getUserFavouritesCollection(userId)
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

export {
  firebaseApp,
  auth,
  db,
  addFavourite,
  removeFavourite,
  getFavourites,
}