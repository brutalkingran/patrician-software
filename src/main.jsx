import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './index.css'
import App from './App.jsx'
import { MuralProvider } from './context/MuralContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MuralProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuralProvider>
  </StrictMode>,
)
