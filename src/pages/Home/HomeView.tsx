import MovieCard from '../../components/MovieCard/MovieCard'
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
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeView
