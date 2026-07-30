import { type ReactElement } from 'react'
import { useAuthViewModel } from './useAuthViewModel'
import './AuthView.css'

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
        <section className="auth">
            <div className="auth__card">
                <h1 className="auth__title">{heading}</h1>

                <form
                    className="auth__form"
                    onSubmit={(event) => {
                        event.preventDefault()
                        void handleSubmit()
                    }}
                >
                    <div className="auth__field">
                        <label className="auth__label" htmlFor="email">
                            Email
                        </label>

                        <input
                            className="auth__input"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="auth__field">
                        <label className="auth__label" htmlFor="password">
                            Password
                        </label>

                        <input
                            className="auth__input"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete={
                                mode === 'login'
                                    ? 'current-password'
                                    : 'new-password'
                            }
                            required
                            minLength={6}
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <p className="auth__error" role="alert">
                            {error}
                        </p>
                    )}

                    <button
                        className="auth__button"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : heading}
                    </button>
                </form>

                <button
                    className="auth__switch"
                    type="button"
                    onClick={toggleMode}
                    disabled={loading}
                >
                    {toggleLabel}
                </button>
            </div>
        </section>
    )
}

export default AuthView