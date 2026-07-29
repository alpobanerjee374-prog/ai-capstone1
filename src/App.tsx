import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeView from './pages/Home/HomeView'
import Favorites from './pages/Favorites'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/favourites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
