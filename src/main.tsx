import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // ou './App.jsx'
import './index.css' // Assurez-vous que votre CSS est importé ici

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)