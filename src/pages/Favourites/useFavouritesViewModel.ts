import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import type { Movie } from '../../types/movie'
import { deleteFavourite, loadFavourites } from './FavouritesModel'

export const useFavouritesViewModel = () => {
  const { user } = useAuth()
  const [favourites, setFavourites] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadMovies = async () => {
    setLoading(true)
    setError(null)

    try {
      if (!user?.uid) {
        throw new Error('Please sign in to view favourites.')
      }

      const movies = await loadFavourites(user.uid)
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
      if (!user?.uid) {
        throw new Error('Please sign in to remove favourites.')
      }

      await deleteFavourite(user.uid, imdbID)
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
  }, [user?.uid])

  return {
    favourites,
    loading,
    error,
    loadMovies,
    removeMovie,
  }
}
