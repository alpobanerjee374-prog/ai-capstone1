import { useEffect, useState } from 'react'
import './MovieCard.css'
import type { Movie } from '../../types/movie'
import { FaHeart } from 'react-icons/fa'

interface MovieCardProps {
  movie: Movie
  onFavourite?: (movie: Movie) => void
  favouriteButtonText?: string
}

const MovieCard = ({
  movie,
  onFavourite,
  favouriteButtonText = 'Favourite',
}: MovieCardProps) => {
  const hasPoster = Boolean(movie.poster && movie.poster !== 'N/A')
  const [showPosterFallback, setShowPosterFallback] = useState(false)

  useEffect(() => {
    setShowPosterFallback(false)
  }, [movie.poster])

  const shouldShowPoster = hasPoster && !showPosterFallback

  const isRemoveButton = favouriteButtonText
    .toLowerCase()
    .includes('remove')

  return (
    <article className="movie-card">
      {shouldShowPoster ? (
        <img
          className="movie-card__poster"
          src={movie.poster}
          alt={movie.title}
          onError={() => setShowPosterFallback(true)}
        />
      ) : (
        <div className="movie-card__poster movie-card__poster--placeholder">
          <span>No Poster</span>
        </div>
      )}

      <div className="movie-card__content">
        <h3 className="movie-card__title">{movie.title}</h3>

        <p className="movie-card__meta">
          Year: {movie.year ?? 'N/A'}
        </p>

        <p className="movie-card__meta">
          Type: {movie.type ?? 'N/A'}
        </p>

        <button
          className={`movie-card__button ${isRemoveButton
              ? 'movie-card__button--remove'
              : 'movie-card__button--add'
            }`}
          type="button"
          onClick={() => onFavourite?.(movie)}
        >
          <FaHeart className="movie-card__heart" />
          <span>
            {isRemoveButton ? 'Remove Favourite' : 'Add Favourite'}
          </span>
        </button>
      </div>
    </article>
  )
}

export default MovieCard