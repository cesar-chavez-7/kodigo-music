import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  // ← CAMBIA AQUÍ
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Search from './components/pages/Search/Search'
import './App.css'

function App() {
  return (
    <Router>  {/* ← CAMBIA AQUÍ */}
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>  /* ← CAMBIA AQUÍ */
  )
}

export default App