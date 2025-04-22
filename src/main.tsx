import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Cette ligne est cruciale

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)