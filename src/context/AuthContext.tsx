import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactElement,
    type ReactNode,
} from 'react'
import {
    logoutUser,
    subscribeToAuthChanges,
    type User,
} from '../services/authService'

interface AuthContextValue {
    user: User | null
    authLoading: boolean
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({
    children,
}: AuthProviderProps): ReactElement {
    const [user, setUser] = useState<User | null>(null)
    const [authLoading, setAuthLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges((nextUser) => {
            setUser(nextUser)
            setAuthLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const logout = async (): Promise<void> => {
        await logoutUser()
    }

    const value: AuthContextValue = {
        user,
        authLoading,
        logout,
    }

    if (authLoading) {
        return <p>Loading authentication...</p>
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used inside an AuthProvider')
    }

    return context
}

export default AuthContext