import { useHomeViewModel } from './useHomeViewModel'

const HomeView = () => {
  const { movies, loading, error } = useHomeViewModel()

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Movie Explorer</h1>

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
