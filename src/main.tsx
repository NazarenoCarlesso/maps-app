import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MapsApp from './MapsApp'

if (!navigator.geolocation) {
  const ERROR = 'Tu navegador no tiene opción de Geolocation';
  alert(ERROR);
  throw new Error(ERROR);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
