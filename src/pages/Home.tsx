import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

const Home = () => {
  return (
    <main style={{ padding: '2rem 1.5rem' }}>
      <h2 style={{ marginTop: 0 }}>Home</h2>
      <p style={{ color: '#6b7280' }}>This is the placeholder home page for the Movie Explorer app.</p>
      <SearchBar />
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </main>
  )
}

export default Home
