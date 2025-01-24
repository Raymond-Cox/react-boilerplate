import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('app')

// @ts-expect-error This is standard for React 18+
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
