import { useEffect, useState } from 'react'
import type { Movie } from '../../types/movie'
import { getMovies, initialMovies } from './HomeModel'

export interface HomeViewModel {
  query: string
  setQuery: (value: string) => void
  movies: Movie[]
  loading: boolean
  error: string | null
  handleSearch: () => Promise<void>
}

export const useHomeViewModel = (): HomeViewModel => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadInitialMovies = async () => {
      setLoading(true)
      setError(null)

      try {
        const results = await initialMovies()
        setMovies(results)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unable to load movies.'
        setError(message)
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    void loadInitialMovies()
  }, [])

  const handleSearch = async () => {
    setLoading(true)
    setError(null)

    try {
      const results = await getMovies(query)
      setMovies(results)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to load movies.'
      setError(message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return {
    query,
    setQuery,
    movies,
    loading,
    error,
    handleSearch,
  }
}
