import type { Movie } from '../../types/movie'
import { searchMovies } from '../../services/omdbMovieService'

export interface HomeModel {
  title: string
}

export const createHomeModel = (): HomeModel => ({
  title: 'Home',
})

export async function getMovies(query: string): Promise<Movie[]> {
  const cleanedQuery = query.trim()

  if (cleanedQuery.length < 2) {
    return []
  }

  return searchMovies(cleanedQuery)
}
