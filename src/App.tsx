import { useNavigate } from 'react-router-dom'
import { StrictMode } from 'react'
import { useAuth } from 'contexts/Auth'
import AuthenticatedApp from 'pages/AuthenticatedApp'
import UnauthenticatedApp from 'pages/UnAuthenticatedApp'

export default function App() {
  const navigate = useNavigate()
  const { user } = useAuth()
  return (
    <StrictMode>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </StrictMode>
  )
}
