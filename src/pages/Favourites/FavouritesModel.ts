import type { Movie } from '../../types/movie'
import { addFavourite, getFavourites, removeFavourite } from '../../services/firebaseService'

export async function loadFavourites(): Promise<Movie[]> {
  return getFavourites()
}

export async function saveFavourite(movie: Movie): Promise<void> {
  return addFavourite(movie)
}

export async function deleteFavourite(imdbID: string): Promise<void> {
  return removeFavourite(imdbID)
}
