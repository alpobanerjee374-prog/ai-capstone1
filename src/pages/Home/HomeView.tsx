import { useHomeViewModel } from './useHomeViewModel'

const HomeView = () => {
  const { query, setQuery, movies, loading, error, handleSearch } = useHomeViewModel()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void handleSearch()
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Movie Explorer</h1>

      <form onSubmit={onSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a movie"
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              {movie.poster && movie.poster !== 'N/A' ? (
                <img src={movie.poster} alt={movie.title} style={{ width: 80, height: 120, objectFit: 'cover' }} />
              ) : null}
              <div>
                <h3>{movie.title}</h3>
                <p>Year: {movie.year ?? 'N/A'}</p>
                <p>Type: {movie.type ?? 'N/A'}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeView
