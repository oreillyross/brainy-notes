import { useNavigate } from "react-router-dom";
import { StrictMode } from "react";
import { useAuth } from "contexts/Auth";
import UnauthenticatedApp from "pages/UnAuthenticatedApp";

export default function App() {
  const navigate = useNavigate();
  const {user} = useAuth()
  console.log(user);
  
  return (
    <StrictMode>
      {/* {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>} */}
      <UnauthenticatedApp />
      Something
      {JSON.stringify(user)}
    </StrictMode>
  )
}
