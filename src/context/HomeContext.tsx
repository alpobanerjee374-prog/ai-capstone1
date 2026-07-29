import { createContext, useContext, type ReactNode } from 'react'
import { useHomeViewModel, type HomeViewModel } from '../pages/Home/useHomeViewModel'

const HomeContext = createContext<HomeViewModel | undefined>(undefined)

interface HomeProviderProps {
  children: ReactNode
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const viewModel = useHomeViewModel()

  return <HomeContext.Provider value={viewModel}>{children}</HomeContext.Provider>
}

export const useHomeContext = (): HomeViewModel => {
  const context = useContext(HomeContext)

  if (!context) {
    throw new Error('useHomeContext must be used inside a HomeProvider')
  }

  return context
}
