import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SmoothScroll from "./lenis.tsx"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <SmoothScroll> */}
      <App />
    {/* </SmoothScroll> */}
  </StrictMode>,
)
