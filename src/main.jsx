import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ComponentApp from './ComponentApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentApp />
    
  </StrictMode>,
)
