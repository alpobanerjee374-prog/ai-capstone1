import type { Movie, OmdbSearchResponse } from '../types/movie'

function getOmdbConfig() {
  const apiUrl = import.meta.env.VITE_OMDB_API_URL
  const apiKey = import.meta.env.VITE_OMDB_API_KEY

  if (!apiUrl || !apiKey) {
    throw new Error('OMDb API configuration is missing.')
  }

  return { apiUrl, apiKey }
}

function mapOmdbMovie(movie: NonNullable<OmdbSearchResponse['Search']>[number]): Movie {
  const id = Number.parseInt(movie.imdbID.replace(/\D/g, ''), 10)

  return {
    id: Number.isNaN(id) ? 0 : id,
    title: movie.Title,
    overview: undefined,
  }
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const trimmedQuery = query.trim()

  if (!trimmedQuery) {
    return []
  }

  console.log('[OMDb debug] search query:', trimmedQuery)

  const { apiUrl, apiKey } = getOmdbConfig()
  const requestUrl = `${apiUrl}?apikey=${encodeURIComponent(apiKey)}&s=${encodeURIComponent(trimmedQuery)}`

  console.log('[OMDb debug] request URL:', requestUrl)

  const response = await fetch(requestUrl)

  if (!response.ok) {
    throw new Error(`OMDb request failed with status ${response.status}.`)
  }

  const data = (await response.json()) as OmdbSearchResponse

  console.log('[OMDb debug] API response:', data)

  if (data.Response === 'False') {
    throw new Error(data.Error ?? 'OMDb returned an error.')
  }

  return (data.Search ?? []).map(mapOmdbMovie)
}

export const omdbMovieService = {
  isReady: true,
  searchMovies,
}
