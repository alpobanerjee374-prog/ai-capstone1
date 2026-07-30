import { useState } from 'react'
import { createInitialAuthModel, type AuthModel } from './AuthModel'

export interface UseAuthViewModelResult {
  model: AuthModel
}

export function useAuthViewModel(): UseAuthViewModelResult {
  const [model] = useState<AuthModel>(() => createInitialAuthModel())

  return {
    model,
  }
}
