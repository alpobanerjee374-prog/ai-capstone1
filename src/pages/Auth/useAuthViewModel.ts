import { useState } from 'react'
import { login, register } from './AuthModel'

export type AuthMode = 'login' | 'register'

export interface UseAuthViewModelResult {
    email: string
    setEmail: (value: string) => void
    password: string
    setPassword: (value: string) => void
    mode: AuthMode
    loading: boolean
    error: string | null
    handleSubmit: () => Promise<void>
    toggleMode: () => void
}

export function useAuthViewModel(): UseAuthViewModelResult {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mode, setMode] = useState<AuthMode>('login')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(): Promise<void> {
        setError(null)
        setLoading(true)

        try {
            if (mode === 'login') {
                await login(email, password)
            } else {
                await register(email, password)
            }

            setPassword('')
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : 'Authentication failed.')
        } finally {
            setLoading(false)
        }
    }

    function toggleMode(): void {
        setMode((currentMode) =>
            currentMode === 'login' ? 'register' : 'login'
        )
        setError(null)
        setPassword('')
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        mode,
        loading,
        error,
        handleSubmit,
        toggleMode,
    }
}
