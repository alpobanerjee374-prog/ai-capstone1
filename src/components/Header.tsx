import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111827', fontWeight: 600 }}>
            Home
          </Link>
          <Link to="/favourites" style={{ textDecoration: 'none', color: '#111827', fontWeight: 600 }}>
            Favourites
          </Link>
        </nav>

        <form style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search movies"
            style={{ padding: '0.6rem 0.8rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
          />
          <button
            type="submit"
            style={{ padding: '0.6rem 0.9rem', border: 'none', borderRadius: '0.5rem', backgroundColor: '#111827', color: '#fff', cursor: 'pointer' }}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
