import { useEffect, useState } from 'react'
import type { Movie } from '../../types/movie'
import { deleteFavourite, loadFavourites } from './FavouritesModel'

export const useFavouritesViewModel = () => {
  const [favourites, setFavourites] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadMovies = async () => {
    setLoading(true)
    setError(null)

    try {
      const movies = await loadFavourites()
      setFavourites(movies)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to load favourites.'
      setError(message)
      setFavourites([])
    } finally {
      setLoading(false)
    }
  }

  const removeMovie = async (imdbID: string) => {
    try {
      await deleteFavourite(imdbID)
      setFavourites((currentFavourites) =>
        currentFavourites.filter((movie) => movie.imdbID !== imdbID)
      )
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to remove favourite.'
      setError(message)
    }
  }

  useEffect(() => {
    void loadMovies()
  }, [])

  return {
    favourites,
    loading,
    error,
    loadMovies,
    removeMovie,
  }
}
