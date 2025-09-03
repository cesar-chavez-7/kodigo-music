import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="logo">
        <h1>Kodigo Music</h1>
      </div>
      <nav className="navigation">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Inicio
        </Link>
        <Link 
          to="/library" 
          className={location.pathname === '/library' ? 'active' : ''}
        >
          Mi Biblioteca
        </Link>
        <Link 
          to="/search" 
          className={location.pathname === '/search' ? 'active' : ''}
        >
          Buscar
        </Link>
      </nav>
      <div className="user-actions">
        <button className="signup-btn">Registrarse</button>
        <button className="login-btn">Iniciar Sesión</button>
      </div>
    </header>
  )
}

export default Header