import './Header.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useHomeContext } from '../context/HomeContext'

const Header = () => {
  const { user, logout } = useAuth()
  const { query, setQuery, handleSearch } = useHomeContext()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void handleSearch()
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand-nav">
          <h2 className="header__title">Movie Explorer</h2>

          <nav className="header__nav">
            <Link className="header__link" to="/">
              Home
            </Link>

            <Link className="header__link" to="/favourites">
              Favourites
            </Link>
          </nav>
        </div>

        <div className="header__actions">
          {user ? (
            <button
              className="header__button"
              type="button"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link className="header__link" to="/auth">
              Login
            </Link>
          )}

          <form className="header__form" onSubmit={onSubmit}>
            <input
              className="header__input"
              type="text"
              placeholder="Search movies"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />

            <button className="header__button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header