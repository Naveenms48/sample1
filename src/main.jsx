import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Garage from './components/Garage'
// import Car from './components/Car'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
