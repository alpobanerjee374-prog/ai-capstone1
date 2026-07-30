import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { auth } from './firebaseService'

export type { User } from 'firebase/auth'
export type AuthStateCallback = (user: User | null) => void

function getReadableAuthError(error: unknown): string {
    console.log(error)
  if (typeof error === 'object' && error !== null && 'code' in error) {
    const code = (error as { code?: string }).code

    switch (code) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please sign in instead.'
      case 'auth/invalid-email':
        return 'Please enter a valid email address.'
      case 'auth/weak-password':
        return 'Your password should be at least 6 characters long.'
      case 'auth/user-not-found':
        return 'No account was found for this email.'
      case 'auth/wrong-password':
        return 'The password you entered is incorrect.'
      case 'auth/invalid-credential':
        return 'The email or password you entered is incorrect.'
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection and try again.'
      default:
        return 'Authentication failed. Please try again.'
    }
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Authentication failed. Please try again.'
}

export async function registerUser(email: string, password: string): Promise<User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error(error)
    throw new Error(getReadableAuthError(error))
  }
}

export async function loginUser(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw new Error(getReadableAuthError(error))
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error) {
    throw new Error(getReadableAuthError(error))
  }
}

export function subscribeToAuthChanges(callback: AuthStateCallback): () => void {
  return onAuthStateChanged(auth, callback)
}
