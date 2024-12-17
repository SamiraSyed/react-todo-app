import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StateProvider } from './StateProvider';
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>    
  </StrictMode>,
)
