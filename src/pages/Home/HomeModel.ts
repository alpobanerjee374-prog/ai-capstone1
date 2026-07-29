import type { Movie } from '../../types/movie'
import { searchMovies } from '../../services/omdbMovieService'

const SEED_KEYWORDS = [
  'Batman',
  'Avengers',
  'Harry Potter',
  'Star Wars',
  'Spider-Man',
  'Marvel',
  'Disney',
  'Matrix',
  'Lord of the Rings',
  'Fast',
  'Mission Impossible',
  'Pixar',
  'Horror',
  'Comedy',
  'Action',
]

function shuffleMovies(movies: Movie[]): Movie[] {
  const shuffled = [...movies]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    const temporaryValue = shuffled[index]
    shuffled[index] = shuffled[swapIndex]
    shuffled[swapIndex] = temporaryValue
  }

  return shuffled
}

function getRandomKeywords(): string[] {
  const selectedCount = 5
  const shuffled = [...SEED_KEYWORDS].sort(() => Math.random() - 0.5)

  return shuffled.slice(0, selectedCount)
}

function deduplicateMovies(movies: Movie[]): Movie[] {
  const uniqueMovies = new Map<number, Movie>()

  movies.forEach((movie) => {
    if (!uniqueMovies.has(movie.id)) {
      uniqueMovies.set(movie.id, movie)
    }
  })

  return Array.from(uniqueMovies.values())
}

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

export async function initialMovies(): Promise<Movie[]> {
  const keywords = getRandomKeywords()
  const movieResults = await Promise.all(keywords.map((keyword) => searchMovies(keyword)))
  const combinedMovies = movieResults.flat()
  const uniqueMovies = deduplicateMovies(combinedMovies)
  const shuffledMovies = shuffleMovies(uniqueMovies)

  return shuffledMovies.slice(0, 20)
}
