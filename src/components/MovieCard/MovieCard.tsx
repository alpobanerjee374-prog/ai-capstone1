import type { Movie } from '../../types/movie'

interface MovieCardProps {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <article style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {movie.poster && movie.poster !== 'N/A' ? (
          <img src={movie.poster} alt={movie.title} style={{ width: 80, height: 120, objectFit: 'cover' }} />
        ) : null}

        <div style={{ flex: 1 }}>
          <h3>{movie.title}</h3>
          <p>Year: {movie.year ?? 'N/A'}</p>
          <p>Type: {movie.type ?? 'N/A'}</p>
          <button type="button">Favourite</button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
