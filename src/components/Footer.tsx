import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__overlay">
        <div className="footer__container">

          <div className="footer__section">
            <h2 className="footer__logo">🎬 Movie Explorer</h2>

            <p>
              Discover your favourite movies from thousands of titles.
              Search, explore and save the movies you love.
            </p>
          </div>

          <div className="footer__section">
            <h3>Navigation</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favourites">Favourites</Link></li>
              <li><Link to="/auth">Login</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Technologies</h3>

            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Firebase</li>
              <li>OMDb API</li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Contact</h3>

            <ul>
              <li>📧 alpobanerjee@example.com</li>
              <li>🌍 West Bengal, India</li>
              <li>💻 Frontend AI Engineer</li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          © 2026 Movie Explorer • Built by Alpo Banerjee
        </div>
      </div>
    </footer>
  )
}

export default Footer