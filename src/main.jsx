// REACT IMPORT
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// APP IMPORT
import App from './pages/App.jsx'
import './global.css'

// CREATE RENDER ROOT
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);