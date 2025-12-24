import { AuthForm } from "./components/AuthForm"
import { useAuth } from "./context/AuthContext"
import { RewardPage } from "./pages/RewardPage"

function App() {

  const { user, loading } = useAuth()
  if (loading) return <p>Loading...</p>



  return user ? <RewardPage /> : <AuthForm />

}

export default App
