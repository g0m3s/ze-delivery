import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import { zéTheme } from './utils/theme'
import './assets/TTCommons/FontFace.css'
import { ThemeProvider } from '@mui/material'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={zéTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
