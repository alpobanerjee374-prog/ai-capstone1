import './HomeView.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useHomeViewModel } from './useHomeViewModel'

const HomeView = () => {
  const { movies, loading, error } = useHomeViewModel()

  return (
    <section className="home-view">
      <h1 className="home-view__title">Movie Explorer</h1>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <ul className="home-view__list">
        {movies.map((movie) => (
          <li key={movie.id} className="home-view__item">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeView
