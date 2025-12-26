import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { ProfileProvider } from './context/ProfileContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ProfileProvider>

        <App />
      </ProfileProvider>
    </AuthProvider>
  </StrictMode>,
)
