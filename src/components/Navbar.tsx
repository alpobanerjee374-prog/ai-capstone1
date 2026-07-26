const Navbar = () => {
  return (
    <nav style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Movie Explorer</h1>
        <p style={{ margin: 0, color: '#6b7280' }}>Discover your next favorite film</p>
      </div>
    </nav>
  )
}

export default Navbar
