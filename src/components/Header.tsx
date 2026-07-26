import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header
      style={{
        padding: '1rem 1.5rem',
        background: 'linear-gradient(90deg, #111827 0%, #1f2937 100%)',
        color: '#f9fafb',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.1rem', letterSpacing: '0.02em' }}>Movie Explorer</h2>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#f9fafb', fontWeight: 600 }}>
              Home
            </Link>
            <Link to="/favourites" style={{ textDecoration: 'none', color: '#f9fafb', fontWeight: 600 }}>
              Favourites
            </Link>
          </nav>
        </div>

        <form style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search movies"
            style={{
              padding: '0.65rem 0.85rem',
              border: '1px solid #4b5563',
              borderRadius: '999px',
              minWidth: '220px',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.65rem 1rem',
              border: 'none',
              borderRadius: '999px',
              backgroundColor: '#f59e0b',
              color: '#111827',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
