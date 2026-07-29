import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { HomeProvider } from './context/HomeContext'
import HomeView from './pages/Home/HomeView'
import FavouritesView from './pages/Favourites/FavouritesView'
import './App.css'

function App() {
  return (
    <HomeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/favourites" element={<FavouritesView />} />
        </Routes>
      </BrowserRouter>
    </HomeProvider>
  )
}

export default App
