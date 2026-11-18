import '../styles/index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const appRoot = document.getElementById('app')

if (appRoot) {
  const root = createRoot(appRoot)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}