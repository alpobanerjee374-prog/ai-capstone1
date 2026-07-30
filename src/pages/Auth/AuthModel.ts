import type { User } from 'firebase/auth'
import { loginUser, logoutUser, registerUser } from '../../services/authService'

export interface AuthModel {
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
}

export const createInitialAuthModel = (): AuthModel => ({
    isAuthenticated: false,
    isLoading: false,
    error: null,
})

function validateCredentials(
    email: string,
    password: string
): {
    normalizedEmail: string
    normalizedPassword: string
} {
    const normalizedEmail = email.trim().toLowerCase()
    const trimmedPassword = password.trim()

    if (!normalizedEmail) {
        throw new Error('Please enter your email address.')
    }

    if (!trimmedPassword) {
        throw new Error('Please enter your password.')
    }

    if (trimmedPassword.length < 6) {
        throw new Error('Password must be at least 6 characters long.')
    }

    return {
        normalizedEmail,
        normalizedPassword: trimmedPassword,
    }
}

export async function register(email: string, password: string): Promise<User> {
    const { normalizedEmail, normalizedPassword } =
        validateCredentials(email, password)

    return registerUser(normalizedEmail, normalizedPassword)
}

export async function login(email: string, password: string): Promise<User> {
    const { normalizedEmail, normalizedPassword } =
        validateCredentials(email, password)

    return loginUser(normalizedEmail, normalizedPassword)
}

export async function logout(): Promise<void> {
    await logoutUser()
}
