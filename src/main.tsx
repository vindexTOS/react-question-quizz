import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QusetionContextProvider } from './components/context'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QusetionContextProvider>
        <App />
      </QusetionContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
