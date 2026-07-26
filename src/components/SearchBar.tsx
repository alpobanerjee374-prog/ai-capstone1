const SearchBar = () => {
  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <label htmlFor="movie-search" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Search Movies
      </label>
      <input
        id="movie-search"
        type="text"
        placeholder="Coming soon..."
        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
      />
    </section>
  )
}

export default SearchBar
