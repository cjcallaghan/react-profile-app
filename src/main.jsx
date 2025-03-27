import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// git config core.autocrlf true
//import { ModeProvider } from './contexts/ModeContext.jsx'
import { Provider } from "react-redux"
import store from "./redux/store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
