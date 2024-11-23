import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context';
import { GlobalStyles } from './GlobalStyles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
