import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
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

        <form className="header__form">
          <input className="header__input" type="text" placeholder="Search movies" />
          <button className="header__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
