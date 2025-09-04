import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ← CAMBIA AQUÍ
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ← CAMBIA AQUÍ */}
      <App />
    </BrowserRouter>  {/* ← CAMBIA AQUÍ */}
  </React.StrictMode>,
)