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
