import { type ReactElement } from 'react'
import { useAuthViewModel } from './useAuthViewModel'

export function AuthView(): ReactElement {
  const {
    email,
    setEmail,
    password,
    setPassword,
    mode,
    loading,
    error,
    handleSubmit,
    toggleMode,
  } = useAuthViewModel()

  const heading = mode === 'login' ? 'Login' : 'Create Account'
  const toggleLabel =
    mode === 'login' ? 'Create an account' : 'Sign in instead'

  return (
    <section>
      <h1>{heading}</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          void handleSubmit()
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete={
              mode === 'login' ? 'current-password' : 'new-password'
            }
            required
            minLength={6}
            disabled={loading}
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : heading}
        </button>
      </form>

      <button
        type="button"
        onClick={toggleMode}
        disabled={loading}
      >
        {toggleLabel}
      </button>
    </section>
  )
}

export default AuthView