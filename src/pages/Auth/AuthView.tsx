import { type ReactElement } from 'react'
import { useAuthViewModel } from './useAuthViewModel'

export function AuthView(): ReactElement {
  useAuthViewModel()

  return (
    <section>
      <h1>Authentication</h1>
      <p>Authentication page placeholder.</p>
    </section>
  )
}

export default AuthView