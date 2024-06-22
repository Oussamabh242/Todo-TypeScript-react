import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PbContextProvider } from './context/pocketbase.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <React.StrictMode>
    <PbContextProvider>
    <App />
    </PbContextProvider>
  </React.StrictMode>,
  </BrowserRouter>
)
