import { useEffect, useRef, useState } from 'react'
import type { Movie } from '../../types/movie'
import {
  getMovies,
  initialMovies as loadInitialMoviesFromModel,
  saveMovie,
} from './HomeModel'

export interface HomeViewModel {
  query: string
  setQuery: (value: string) => void
  movies: Movie[]
  loading: boolean
  error: string | null
  handleSearch: () => Promise<void>
  initialMovies: () => Promise<Movie[]>
  saveMovieAsFavourite: (movie: Movie) => Promise<void>
}

export const useHomeViewModel = (): HomeViewModel => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const hasLoadedInitialMovies = useRef(false)
  const previousQuery = useRef('')

  const initialMovies = async (): Promise<Movie[]> => {
    setLoading(true)
    setError(null)

    try {
      const results = await loadInitialMoviesFromModel()
      setMovies(results)
      return results
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to load movies.'
      setError(message)
      setMovies([])
      return []
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!hasLoadedInitialMovies.current) {
      hasLoadedInitialMovies.current = true
      void initialMovies()
      previousQuery.current = query
      return
    }

    if (query.trim() === '' && previousQuery.current.trim() !== '') {
      void initialMovies()
    }

    previousQuery.current = query
  }, [query])

  const handleSearch = async () => {
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      await initialMovies()
      return
    }

    setLoading(true)
    setError(null)

    try {
      const results = await getMovies(trimmedQuery)
      setMovies(results)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to load movies.'
      setError(message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }
  const saveMovieAsFavourite = async (movie: Movie) => {
  try {
    await saveMovie(movie)
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Unable to save favourite.'
    setError(message)
  }
}
  return {
  query,
  setQuery,
  movies,
  loading,
  error,
  handleSearch,
  initialMovies,
  saveMovieAsFavourite,
}
}
