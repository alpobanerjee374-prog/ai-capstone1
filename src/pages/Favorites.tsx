import MovieCard from '../components/MovieCard/MovieCard'
import { useFavouritesViewModel } from './Favourites/useFavouritesViewModel'

const Favorites = () => {
  const { favourites, loading, error, removeMovie } = useFavouritesViewModel()

  return (
    <main style={{ padding: '2rem 1.5rem' }}>
      <h2 style={{ marginTop: 0 }}>Favorites</h2>

      {loading && <p>Loading favourite movies...</p>}

      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      {!loading && favourites.length === 0 && (
        <p>No favourite movies yet.</p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {favourites.map((movie) => (
          <MovieCard
  key={movie.imdbID}
  movie={movie}
  onFavourite={(selectedMovie) => {
    void removeMovie(selectedMovie.imdbID)
  }}
  favouriteButtonText="Remove"
/>
        ))}
      </div>
    </main>
  )
}

export default Favorites