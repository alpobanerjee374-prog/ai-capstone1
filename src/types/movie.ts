export interface Movie {
  id: number
  title: string
  overview?: string
  year?: string
  type?: string
  poster?: string
}

export interface OmdbSearchResponse {
  Response: 'True' | 'False'
  Search?: Array<{
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
  }> 
  Error?: string
}
