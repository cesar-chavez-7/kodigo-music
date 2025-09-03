import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import Home from './components/pages/Home/Home'
import Search from './components/pages/Search/Search'
// import Library from './components/pages/Library/Library'  // ¡COMENTA O ELIMINA SI NO EXISTE!
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* Elimina esta ruta si Library no existe: <Route path="/library" element={<Library />} /> */}
        </Routes>
      </main>
      <Player />
    </div>
  )
}

export default App