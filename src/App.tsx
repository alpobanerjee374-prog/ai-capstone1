import { type ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { useAuth } from './context/AuthContext'
import { HomeProvider } from './context/HomeContext'
import AuthView from './pages/Auth/AuthView'
import FavouritesView from './pages/Favourites/FavouritesView'
import HomeView from './pages/Home/HomeView'
import './App.css'

interface AuthGateProps {
  children: ReactNode
}

function AuthGate({ children }: AuthGateProps) {
  const { user, authLoading } = useAuth()

  if (authLoading) {
    return <p>Loading authentication...</p>
  }

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return <>{children}</>
}

function PublicAuthRoute() {
  const { user, authLoading } = useAuth()

  if (authLoading) {
    return <p>Loading authentication...</p>
  }

  if (user) {
    return <Navigate to="/" replace />
  }

  return <AuthView />
}

function App() {
  return (
    <HomeProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomeView />} />

          <Route
            path="/auth"
            element={<PublicAuthRoute />}
          />

          <Route
            path="/favourites"
            element={
              <AuthGate>
                <FavouritesView />
              </AuthGate>
            }
          />
        </Routes>
      </BrowserRouter>
    </HomeProvider>
  )
}

export default App