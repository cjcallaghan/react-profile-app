import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// git config core.autocrlf true
import { ModeProvider } from './contexts/ModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>,
)
